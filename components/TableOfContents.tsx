'use client';

import { useEffect, useState } from 'react';

interface Heading {
  level: number;
  id: string;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden lg:block">
      <div className="sticky top-24">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          On this page
        </h2>
        <ul className="space-y-2" data-testid="table-of-contents">
          {headings.map((heading) => {
            // Only show h1, h2, and h3 headings
            if (heading.level > 3) return null;
            
            const isActive = activeId === heading.id;
            
            return (
              <li 
                key={heading.id} 
                className={`pl-${(heading.level - 1) * 4}`}
              >
                <a
                  href={`#${heading.id}`}
                  data-testid={`toc-link-${heading.id}`}
                  data-active={isActive ? 'true' : 'false'}
                  className={`block py-1 text-sm transition-colors ${
                    isActive 
                      ? 'text-blue-600 font-semibold dark:text-blue-400 toc-link-active' 
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}