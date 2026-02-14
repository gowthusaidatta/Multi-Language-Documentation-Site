import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface SearchDocument {
  id: string;
  title: string;
  content: string;
  url: string;
  version: string;
  locale: string;
  excerpt: string;
}

class DocumentationIndexer {
  private documents: SearchDocument[] = [];

  async indexAllDocuments() {
    const docsPath = path.join(process.cwd(), '_docs');
    const versions = ['v1', 'v2', 'v3'];
    const locales = ['en', 'es', 'fr', 'de'];

    for (const version of versions) {
      const versionPath = path.join(docsPath, version);
      if (!fs.existsSync(versionPath)) continue;

      const files = fs.readdirSync(versionPath);
      
      for (const file of files) {
        if (!file.endsWith('.md')) continue;

        const filePath = path.join(versionPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { content, data } = matter(fileContent);

        // Process content to HTML
        const processedContent = await remark().use(html).process(content);
        const htmlContent = processedContent.toString();

        // Extract plain text from HTML
        const plainText = this.htmlToText(htmlContent);

        // Determine locale and slug
        let locale = 'en';
        let slug = file.replace('.md', '');
        
        if (slug.includes('.')) {
          const parts = slug.split('.');
          slug = parts[0];
          locale = parts[1];
        }

        // Create excerpt (first 150 characters)
        const excerpt = plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');

        const doc: SearchDocument = {
          id: `${version}-${slug}-${locale}`,
          title: data.title || this.titleize(slug),
          content: plainText,
          url: `/${locale}/docs/${version}/${slug}`,
          version,
          locale,
          excerpt
        };

        this.documents.push(doc);
      }
    }

    return this.documents;
  }

  private htmlToText(html: string): string {
    // Simple HTML to text conversion
    return html
      .replace(/<[^>]*>/g, ' ') // Remove HTML tags
      .replace(/\s+/g, ' ')     // Normalize whitespace
      .trim();
  }

  private titleize(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  search(query: string, filters: { version?: string; locale?: string } = {}): SearchDocument[] {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return [];

    let results = this.documents.filter(doc => {
      // Apply filters
      if (filters.version && doc.version !== filters.version) return false;
      if (filters.locale && doc.locale !== filters.locale) return false;

      // Search in title and content
      const titleMatch = doc.title.toLowerCase().includes(normalizedQuery);
      const contentMatch = doc.content.toLowerCase().includes(normalizedQuery);
      
      return titleMatch || contentMatch;
    });

    // Sort by relevance (title matches first, then content)
    results.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(normalizedQuery);
      const bTitleMatch = b.title.toLowerCase().includes(normalizedQuery);
      
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      
      // Both have title matches or both don't, sort by content relevance
      const aContentIndex = a.content.toLowerCase().indexOf(normalizedQuery);
      const bContentIndex = b.content.toLowerCase().indexOf(normalizedQuery);
      
      return aContentIndex - bContentIndex;
    });

    return results.slice(0, 20); // Return top 20 results
  }

  getDocuments(): SearchDocument[] {
    return this.documents;
  }
}

// Create singleton instance
const indexer = new DocumentationIndexer();

// Initialize indexing on module load
indexer.indexAllDocuments().then(() => {
  console.log('Documentation indexing completed');
}).catch(console.error);

export default indexer;