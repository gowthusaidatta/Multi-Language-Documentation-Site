import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Documentation Portal
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          High-performance documentation with multi-language support, 
          Incremental Static Regeneration, and interactive features.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">📚 Documentation</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Browse comprehensive documentation across multiple versions
            </p>
            <Link 
              href="/en/docs/v1/introduction"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">⚡ API Reference</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore our REST API documentation with interactive examples
            </p>
            <Link 
              href="/api-reference"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              View API Docs
            </Link>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">🚀 Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <li className="flex items-center">
              <span className="mr-2">🌍</span>
              <span>Multi-language (English, Spanish, French, German)</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              <span>Incremental Static Regeneration (ISR)</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌓</span>
              <span>Light/Dark Theme Toggle</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔍</span>
              <span>Full-text Search</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📋</span>
              <span>Interactive Table of Contents</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📋</span>
              <span>Code Copy Functionality</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}