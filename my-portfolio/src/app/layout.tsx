import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Sam Oakes | Portfolio',
  description: 'Personal portfolio of Sam Oakes - Cybersecurity, Tech, and Achievements',
};

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#education', label: 'EDUCATION' },
  { href: '#projects', label: 'PROJECTS' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen bg-hero-gradient text-gray-100 font-mono">
        <header className="sticky top-0 z-20 w-full bg-opacity-80 backdrop-blur border-b border-gray-800">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <span className="text-2xl font-extrabold text-accent-green tracking-widest">SAM OAKES</span>
            <ul className="flex gap-8 text-sm font-semibold">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-accent-purple transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
