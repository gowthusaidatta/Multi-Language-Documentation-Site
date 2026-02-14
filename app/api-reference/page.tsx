'use client'

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import SwaggerUI to avoid SSR issues
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiReference() {
  const [swaggerSpec, setSwaggerSpec] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
  }, []);

  if (error || !swaggerSpec) {
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
                {error ? 'Error loading API documentation' : 'Loading API documentation...'}
              </h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                <p>{error || 'Please wait while the API specification loads.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="swagger-ui-wrapper">
          <SwaggerUI 
            spec={swaggerSpec}
            deepLinking={true}
            presets={[
              // @ts-ignore
              SwaggerUI.presets.apis,
              // @ts-ignore
              SwaggerUI.presets.apis.reset
            ]}
            layout="BaseLayout"
            docExpansion="list"
            defaultModelsExpandDepth={1}
            defaultModelExpandDepth={1}
          />
        </div>
      </div>
      
      <style jsx global>{`
        .swagger-ui-wrapper {
          padding: 20px;
        }
        
        .swagger-ui {
          color: #333;
        }
        
        .swagger-ui .info {
          margin-bottom: 30px;
        }
        
        .swagger-ui .opblock {
          margin-bottom: 15px;
          border-radius: 4px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        
        .swagger-ui .opblock-summary-method {
          font-weight: bold;
          padding: 6px 15px;
          border-radius: 3px;
          color: white;
        }
        
        .swagger-ui .opblock-tag {
          font-size: 24px;
          font-weight: normal;
          padding: 10px 20px;
          margin: 0 0 5px 0;
          background: transparent;
          border-bottom: 1px solid #ebebeb;
        }
        
        .dark .swagger-ui {
          color: #e5e7eb;
        }
        
        .dark .swagger-ui .opblock {
          background: #1f2937;
          border: 1px solid #374151;
        }
        
        .dark .swagger-ui .opblock-tag {
          border-bottom: 1px solid #374151;
          color: #f9fafb;
        }
      `}</style>
    </div>
  );
}