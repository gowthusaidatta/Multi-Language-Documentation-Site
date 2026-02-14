import fs from 'fs';
import path from 'path';

export interface DocItem {
  id: string;
  title: string;
  slug: string;
}

/**
 * Get all available documentation pages for a specific version
 * Returns a list of unique pages (deduped from locale variants)
 */
export function getAvailableDocsForVersion(version: string): DocItem[] {
  const docsPath = path.join(process.cwd(), '_docs', version);
  
  if (!fs.existsSync(docsPath)) {
    return [];
  }

  const files = fs.readdirSync(docsPath);
  const docMap = new Map<string, DocItem>();

  // Extract unique slugs from all locale variants
  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const fileName = file.replace('.md', '');
    
    // Extract slug (remove locale suffix if present)
    let slug = fileName;
    if (fileName.match(/\.(en|es|fr|de)$/)) {
      slug = fileName.replace(/\.(en|es|fr|de)$/, '');
    }

    // Only add if not already in map
    if (!docMap.has(slug)) {
      docMap.set(slug, {
        id: slug,
        title: titleCase(slug),
        slug: slug,
      });
    }
  }

  // Return as sorted array
  return Array.from(docMap.values()).sort((a, b) => 
    a.slug.localeCompare(b.slug)
  );
}

/**
 * Convert slug to title case
 */
function titleCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get recommended order for docs (introduction first, then alphabetical)
 */
export function getOrderedDocsForVersion(version: string): DocItem[] {
  const docs = getAvailableDocsForVersion(version);
  
  // Separate introduction from other docs
  const introduction = docs.find(doc => doc.slug === 'introduction');
  const others = docs.filter(doc => doc.slug !== 'introduction');
  
  // Return introduction first, then others alphabetically
  return introduction ? [introduction, ...others] : others;
}
