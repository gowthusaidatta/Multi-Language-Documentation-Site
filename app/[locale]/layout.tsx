import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const supportedLocales = ['en', 'es', 'fr', 'de'];

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!supportedLocales.includes(params.locale)) {
    notFound();
  }

  return <>{children}</>;
}
