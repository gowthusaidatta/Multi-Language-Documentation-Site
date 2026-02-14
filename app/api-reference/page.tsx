'use client'

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import SwaggerUI to avoid SSR issues
const SwaggerUI = dynamic(() => import('swagger-ui-react').then(mod => mod.default), { 
  ssr: false,
  loading: () => <div className="text-center py-8">Loading Swagger UI...</div>
});

export default function ApiReference() {
  const [swaggerSpec, setSwaggerSpec] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Load the OpenAPI spec on client side
    fetch('/openapi.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load API specification');
        }
        return response.json();
      })
      .then(data => {
        setSwaggerSpec(data);
      })
      .catch(err => {
        setError(err.message);
        console.error('Error loading swagger spec:', err);
      });
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            API Reference
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Interactive API documentation powered by Swagger UI
          </p>
        </div>
        <div className="text-center py-8">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            API Reference
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Interactive API documentation powered by Swagger UI
          </p>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                Error loading API documentation
              </h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!swaggerSpec) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            API Reference
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Interactive API documentation powered by Swagger UI
          </p>
        </div>
        <div className="text-center py-8">Loading API specification...</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          API Reference
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Interactive API documentation powered by Swagger UI
        </p>
      </div>
      
      <div className="swagger-container">
        <SwaggerUI 
          url="/openapi.json"
          deepLinking={true}
          docExpansion="list"
          defaultModelsExpandDepth={1}
          defaultModelExpandDepth={1}
          tryItOutEnabled={true}
        />
      </div>
      
      <style jsx global>{`
        .swagger-container {
          width: 100%;
          background-color: #fafafa;
        }

        .swagger-container .swagger-ui {
          max-width: 100%;
          padding: 20px 0;
        }

        .swagger-ui {
          font-family: sans-serif;
        }

        .swagger-ui .topbar {
          display: none;
        }

        .swagger-ui .info {
          margin: 30px 0;
        }

        .swagger-ui .scheme-container {
          display: none;
        }

        .swagger-ui .opblock {
          margin: 15px 0;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .swagger-ui .opblock-summary {
          padding: 10px 20px;
        }

        .swagger-ui .opblock-tag {
          font-size: 20px;
          font-weight: 600;
          margin: 20px 0 10px 0;
          padding: 15px 0;
          border-bottom: 2px solid #e0e0e0;
        }

        .dark .swagger-container {
          background-color: #1f2937;
        }

        .dark .swagger-ui {
          color: #e5e7eb;
        }

        .dark .swagger-ui .opblock {
          background: #2d3748;
          border: 1px solid #4a5568;
        }

        .dark .swagger-ui .opblock-tag {
          border-bottom: 2px solid #4a5568;
          color: #f9fafb;
        }

        .dark .swagger-ui input,
        .dark .swagger-ui select,
        .dark .swagger-ui textarea {
          background-color: #374151;
          color: #f3f4f6;
          border: 1px solid #4b5563;
        }

        .dark .swagger-ui .response-col_status {
          color: #f3f4f6;
        }
      `}</style>
    </div>
  );
}