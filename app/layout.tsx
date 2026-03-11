import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tanish Chaudhary | Personal Portfolio',
  description:
    'Portfolio website showcasing projects, experience, and expertise in AI, policy, and technology',
  authors: [{ name: 'Tanish Chaudhary' }],
  creator: 'Tanish Chaudhary',
  themeColor: '#234C6A',
  openGraph: {
    title: 'Tanish Chaudhary | Portfolio',
    description: 'Personal portfolio showcasing projects and expertise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-neutral-dark text-neutral-light antialiased">
        {children}
      </body>
    </html>
  );
}
