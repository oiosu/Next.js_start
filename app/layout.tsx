import type { Metadata } from 'next';
import './globals.css';

//metadata 추가
export const metadata: Metadata = {
  title : 'blog project',
  description: 'next.js project',
  keywords: 'Next.js, blog, project'
};

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className='header' aria-labelledby="header-title">
          <h2 id="header-title">hello my blog</h2>
        </header>

        <main>{children || <p>No content available.</p>}</main>

        <footer className='footer' role="contentinfo">hello my project</footer>
      </body>
    </html>
  )
}