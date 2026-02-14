import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { getOrderedDocsForVersion } from "@/lib/docs-utils";

function titleCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const metadata: Metadata = {
  title: "Documentation Portal",
  description: "High-performance documentation site with ISR and i18n",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate nav items for all versions
  const versions = ['v1', 'v2', 'v3'];
  const versionNavMap: Record<string, Array<{ id: string; title: string }>> = {};
  
  for (const version of versions) {
    const docs = getOrderedDocsForVersion(version);
    versionNavMap[version] = [
      ...docs.map(doc => ({
        id: doc.slug,
        title: titleCase(doc.slug)
      })),
      { id: 'api-reference', title: 'API Reference' }
    ];
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased min-h-screen bg-background text-foreground"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Sidebar versionNavMap={versionNavMap} />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 p-6 overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}