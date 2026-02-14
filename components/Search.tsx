'use client';

import { useState, useEffect, useCallback } from 'react';
import indexer from '@/lib/search-indexer';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  version: string;
  locale: string;
}

export function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Wait for indexer to be ready
  useEffect(() => {
    const checkIndexer = () => {
      if (indexer.getDocuments().length > 0) {
        setInitialized(true);
      } else {
        setTimeout(checkIndexer, 100);
      }
    };
    
    checkIndexer();
  }, []);

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!initialized || !searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    
    // Perform search with a slight delay to avoid excessive searches
    const searchTimeout = setTimeout(() => {
      const searchResults = indexer.search(searchQuery);
      
      // Transform results to match expected format
      const transformedResults = searchResults.map(doc => ({
        id: doc.id,
        title: doc.title,
        excerpt: doc.excerpt,
        url: doc.url,
        version: doc.version,
        locale: doc.locale
      }));
      
      setResults(transformedResults);
      setLoading(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [initialized]);

  // Handle search input
  useEffect(() => {
    const cleanup = performSearch(query);
    return cleanup;
  }, [query, performSearch]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          data-testid="search-input"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
      </div>

      {/* Search Results */}
      {query && (
        <div 
          className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto"
          data-testid="search-results"
        >
          {loading ? (
            <div className="px-4 py-3 text-gray-500 dark:text-gray-400">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {results.map((result) => (
                <li key={result.id}>
                  <a
                    href={result.url}
                    className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {result.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {result.excerpt}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {result.version} • {result.locale}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div 
              className="px-4 py-3 text-gray-500 dark:text-gray-400"
              data-testid="search-no-results"
            >
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}