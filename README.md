# High-Performance Content Delivery API Documentation Portal

A modern, high-performance documentation portal built with Next.js, featuring Incremental Static Regeneration (ISR), internationalization (i18n), and interactive components.

## 🚀 Features

- **⚡ High Performance**: Built with Next.js and ISR for lightning-fast page loads
- **🌍 Multi-Language Support**: Full i18n with English, Spanish, French, and German
- **🌓 Theme Switching**: Light/dark mode with system preference detection
- **🔍 Full-Text Search**: Client-side search functionality
- **📋 Interactive Table of Contents**: Auto-generated with scroll highlighting
- **📄 Code Copy**: One-click code block copying
- **📝 Feedback System**: Built-in user feedback widget
- **📚 API Documentation**: Interactive Swagger UI integration
- **🐳 Docker Support**: Containerized deployment ready

## 🛠️ Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **next-themes** for theme management
- **next-i18next** for internationalization
- **swagger-ui-react** for API documentation
- **flexsearch** for client-side search
- **Docker** for containerization

## 📁 Project Structure

```
docs-project/
├── _docs/                    # Documentation content
│   ├── v1/                  # Version 1 documentation
│   │   ├── introduction.md
│   │   ├── getting-started.md
│   │   └── installation.md
│   ├── v2/                  # Version 2 documentation
│   └── v3/                  # Version 3 documentation
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── docs/               # Documentation pages
│   │   └── [version]/
│   │       └── [slug]/
│   │           └── page.tsx
│   └── api-reference/      # API documentation page
├── components/             # React components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── LanguageSwitcher.tsx
│   ├── VersionSelector.tsx
│   ├── TableOfContents.tsx
│   ├── CodeBlock.tsx
│   └── FeedbackWidget.tsx
├── public/                 # Static assets
│   ├── locales/           # Translation files
│   │   ├── en/
│   │   ├── es/
│   │   ├── fr/
│   │   └── de/
│   └── openapi.json       # API specification
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
├── .env.example          # Environment variables template
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16.14.0 or higher
- npm or yarn package manager
- Docker (optional, for containerized deployment)

### Development Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd docs-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

### Docker Deployment

1. **Build and run with Docker Compose**
```bash
docker-compose up --build
```

2. **Access the application**
Visit `http://localhost:3000`

## 📖 Documentation Content

### Adding New Documentation

1. **Create a new markdown file** in the `_docs/{version}/` directory:
```markdown
---
title: My New Document
description: Brief description of the document
---

# Main Heading

Your content here...
```

2. **Add to navigation** by updating the sidebar navigation in `components/Sidebar.tsx`

3. **The page will be automatically available** at `/docs/{version}/{filename}`

### Multi-Language Support

To add translations:

1. **Create language-specific files**:
   - English: `document.md`
   - Spanish: `document.es.md`
   - French: `document.fr.md`
   - German: `document.de.md`

2. **Add translation strings** in `public/locales/{language}/common.json`

### Content Structure

The documentation follows this structure:
- `introduction.md` - Welcome and overview
- `getting-started.md` - Setup instructions
- `installation.md` - Detailed installation guide
- `configuration.md` - Configuration options
- `api-reference.md` - API documentation
- `troubleshooting.md` - Common issues and solutions
- `faq.md` - Frequently asked questions

## 🎨 Customization

### Theme Customization

Modify the Tailwind configuration in `tailwind.config.ts`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#64748b',
        // Add your custom colors
      }
    }
  }
}
```

### Adding New Components

Create new components in the `components/` directory:

```typescript
// components/MyComponent.tsx
'use client';

import React from 'react';

export function MyComponent() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
      {/* Your component content */}
    </div>
  );
}
```

## 🔍 Search Functionality

The portal includes client-side search powered by FlexSearch:

1. **Search indexes are built automatically** from documentation content
2. **Real-time search results** as you type
3. **Filtering by version and language** is supported

To customize search:
- Modify the search configuration in the search component
- Adjust the indexing strategy for better performance

## 🌐 Internationalization

### Adding New Languages

1. **Add language to next.config.ts**:
```javascript
i18n: {
  locales: ['en', 'es', 'fr', 'de', 'new-lang'],
  defaultLocale: 'en',
}
```

2. **Create translation files** in `public/locales/new-lang/`

3. **Update language switcher** component to include the new language

### Content Translation

Use the filename convention:
- `document.md` (default/english)
- `document.es.md` (Spanish)
- `document.fr.md` (French)
- `document.de.md` (German)

## 🐳 Deployment

### Docker Deployment

```bash
# Build the Docker image
docker build -t docs-portal .

# Run the container
docker run -p 3000:3000 docs-portal
```

### Docker Compose

```bash
# Start all services
docker-compose up -d

# Stop services
docker-compose down
```

### Environment Variables

Required environment variables:

```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=Documentation Portal
```

See `.env.example` for all available options.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing Components

The application includes `data-testid` attributes for automated testing:

```javascript
// Example test
const languageSwitcher = screen.getByTestId('language-switcher');
const themeToggle = screen.getByTestId('theme-toggle');
const sidebar = screen.getByTestId('sidebar');
```

## 📊 Performance Optimization

### ISR Configuration

Pages are revalidated every 60 seconds:
```typescript
// app/docs/[version]/[slug]/page.tsx
export const revalidate = 60; // seconds
```

### Code Splitting

Dynamic imports are used for heavy components:
```typescript
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });
```

### Bundle Optimization

The build process includes:
- Automatic code splitting
- Asset optimization
- Bundle analysis tools

## 🔒 Security Considerations

### Content Security

- User feedback is stored client-side only
- No database connections required
- Static content serving
- Environment variables for configuration

### Deployment Security

When deploying to production:
1. Set proper environment variables
2. Configure HTTPS
3. Implement proper rate limiting for search
4. Consider CDN deployment

## 🤝 Contributing

### Code Structure

1. **Component Design**: Reusable, typed, client-side only where needed
2. **Content Structure**: Clear documentation hierarchy
3. **Type Safety**: Comprehensive TypeScript coverage
4. **Performance**: Optimize with React.memo and useMemo

### Style Guide

- **Components**: Use PascalCase naming
- **Files**: Use camelCase with descriptive names
- **Props**: Strict typing with interfaces
- **State Management**: use useReducer or dedicated contexts
- **Imports**: Sort by external/internal, then alphabetical

## 📞 Support

### Getting Help

- **Documentation**: Check the official documentation
- **Issues**: Report bugs on GitHub
- **Community**: Join our Discord/Slack community
- **Email**: support@docs-portal.com

### Common Issues

**Build fails with TypeScript errors:**
```bash
npm run build -- --no-cache
```

**Docker container fails to start:**
```bash
docker-compose logs app
```

**Search not working:**
- Check browser console for errors
- Verify content structure
- Ensure proper indexing

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All the open-source libraries that made this project possible

---

*Built with ❤️ using Next.js and TypeScript*