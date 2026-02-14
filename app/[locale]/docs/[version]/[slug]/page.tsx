import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { TableOfContents } from '@/components/TableOfContents';
import { CodeBlock } from '@/components/CodeBlock';
import { FeedbackWidget } from '@/components/FeedbackWidget';

interface DocParams {
  params: {
    locale: string;
    version: string;
    slug: string;
  };
}

interface DocContent {
  content: string;
  data: {
    title: string;
    description?: string;
  };
}

// Generate static paths for all documentation pages
export async function generateStaticParams() {
  const locales = ['en', 'es', 'fr', 'de'];
  const versions = ['v1', 'v2', 'v3'];
  const docsPath = path.join(process.cwd(), '_docs');
  const paths: { locale: string; version: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const version of versions) {
      const versionPath = path.join(docsPath, version);
      if (fs.existsSync(versionPath)) {
        const files = fs.readdirSync(versionPath);
        files.forEach(file => {
          if (file.endsWith('.md')) {
            // Check if this is a locale-specific file
            const fileName = file.replace('.md', '');
            if (fileName.endsWith(`.${locale}`)) {
              // Locale-specific file
              const slug = fileName.replace(`.${locale}`, '');
              paths.push({ locale, version, slug });
            } else if (!fileName.includes('.')) {
              // Default language file (English)
              if (locale === 'en') {
                paths.push({ locale, version, slug: fileName });
              }
            }
          }
        });
      }
    }
  }

  return paths;
}

// Get documentation content
async function getDocContent(locale: string, version: string, slug: string): Promise<DocContent | null> {
  const docsPath = path.join(process.cwd(), '_docs', version);
  
  // Try locale-specific file first
  const localeFile = path.join(docsPath, `${slug}.${locale}.md`);
  const defaultFile = path.join(docsPath, `${slug}.md`);
  
  let filePath = '';
  if (fs.existsSync(localeFile)) {
    filePath = localeFile;
  } else if (fs.existsSync(defaultFile)) {
    filePath = defaultFile;
  } else {
    return null;
  }
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    return {
      content: processedContent.toString(),
      data: {
        title: data.title || slug,
        description: data.description
      }
    };
  } catch (error) {
    return null;
  }
}

export default async function DocPage({ params }: DocParams) {
  const { locale, version, slug } = params;
  const doc = await getDocContent(locale, version, slug);

  if (!doc) {
    notFound();
  }

  // Extract headings for table of contents
  const headings = [];
  const headingRegex = /<h([1-6]) id="([^"]*)"[^>]*>([^<]+)<\/h[1-6]>/g;
  let match;
  while ((match = headingRegex.exec(doc.content)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3]
    });
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-4">{doc.data.title}</h1>
            {doc.data.description && (
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {doc.data.description}
              </p>
            )}
            <div 
              data-testid="doc-content"
              dangerouslySetInnerHTML={{ __html: doc.content }}
            />
          </div>
          <div className="mt-12">
            <FeedbackWidget />
          </div>
        </div>
        
        {/* Table of contents */}
        <div className="lg:w-64 lg:sticky lg:top-24 lg:self-start">
          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
}

// Enable ISR with revalidation
export const revalidate = 60;