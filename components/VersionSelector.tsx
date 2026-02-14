'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const versions = [
  { id: 'v1', name: 'Version 1.0' },
  { id: 'v2', name: 'Version 2.0' },
  { id: 'v3', name: 'Version 3.0' },
];

export function VersionSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const pathParts = pathname.split('/');
  const currentVersion = pathParts[3] || 'v1';

  const changeVersion = (newVersion: string) => {
    const pathParts = pathname.split('/');
    if (pathParts.length >= 4) {
      pathParts[3] = newVersion;
      router.push(pathParts.join('/'));
    } else {
      router.push(`/en/docs/${newVersion}/introduction`);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" data-testid="version-selector">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{versions.find(v => v.id === currentVersion)?.name || 'Version 1.0'}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="py-1">
            {versions.map((version) => (
              <button
                key={version.id}
                onClick={() => changeVersion(version.id)}
                data-testid={`version-option-${version.id}`}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  currentVersion === version.id 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {version.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}