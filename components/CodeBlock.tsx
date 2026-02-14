'use client';

import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
}

export function CodeBlock({ children, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div 
      className="code-block relative my-4 rounded-lg overflow-hidden bg-gray-800 dark:bg-gray-900"
      data-testid="code-block"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700 dark:bg-gray-800">
        <span className="text-xs text-gray-300 font-mono">
          {language || 'code'}
        </span>
        <button
          onClick={copyToClipboard}
          className="copy-button text-xs text-gray-300 hover:text-white transition-colors"
          data-testid="copy-code-button"
          aria-label="Copy code to clipboard"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-100 font-mono">
          {children}
        </code>
      </pre>
    </div>
  );
}