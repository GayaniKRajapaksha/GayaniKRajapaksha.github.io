import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaushalya Rajapaksha | Software Engineering Portfolio",
  description:
    "Portfolio of Kaushalya Rajapaksha, BSc (Hons) Software Engineering graduate and Software Engineering Intern at Sri Lanka Customs Headquarters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-black/80 backdrop-blur-lg">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
            <a
              href="#home"
              className="text-sm md:text-base font-semibold tracking-tight gradient-text hover:scale-105 transition-transform"
            >
              Kaushalya Rajapaksha
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
              <a href="#home" className="hover:text-purple-400 transition-colors">
                Home
              </a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-purple-400 transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">
                Contact
              </a>
            </nav>
            <a
              href="/Kaushalya_Rajapaksha_CV.pdf"
              className="text-xs md:text-sm px-4 py-2 rounded-full button-gradient text-black font-medium transition-all duration-300 hover:scale-105"
              download
            >
              Download CV
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}