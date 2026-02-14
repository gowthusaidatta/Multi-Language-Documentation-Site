'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useMemo } from 'react';

interface NavItem {
  id: string;
  title: string;
}

interface SidebarProps {
  versionNavMap: Record<string, NavItem[]>;
}

export function Sidebar({ versionNavMap }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const currentLang = pathParts[1] || 'en';
  const currentVersion = pathParts[3] || 'v1';
  const currentSlug = pathParts[4] || 'introduction';

  // Select nav items based on current version
  const navItems = useMemo(() => {
    return versionNavMap[currentVersion] || versionNavMap['v1'] || [];
  }, [currentVersion, versionNavMap]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside 
      className={`bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
      data-testid="sidebar"
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md"
        >
          <span className={`${!isOpen && 'hidden'}`}>Navigation</span>
          <svg 
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isApiReference = item.id === 'api-reference';
            const isActive = isApiReference 
              ? pathname === '/api-reference'
              : currentSlug === item.id;
            const href = isApiReference ? '/api-reference' : `/${currentLang}/docs/${currentVersion}/${item.id}`;
            
            return (
              <li key={item.id}>
                <Link
                  href={href}
                  data-testid={`sidebar-nav-link-${item.id}`}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 sidebar-link-active'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  } ${!isOpen && 'justify-center'}`}
                >
                  {isOpen && item.title}
                  {!isOpen && (
                    <span className="flex justify-center">
                      {item.title.charAt(0)}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}