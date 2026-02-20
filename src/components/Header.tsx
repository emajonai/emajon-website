"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const TASKS_APP_URL = process.env.NEXT_PUBLIC_TASKS_URL || "https://emajon-web.vercel.app";

export default function Header({ hasAccess = false }: { hasAccess?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLLIElement>(null);

  // Close tools dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-light">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Emajon
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/blog"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </li>
          {hasAccess && (
            <li className="relative" ref={toolsRef}>
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-1"
              >
                Tools
                <svg className={`w-3.5 h-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {toolsOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-border-light py-1">
                  <a
                    href={TASKS_APP_URL}
                    className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tasks
                  </a>
                </div>
              )}
            </li>
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-border-light">
          <ul className="px-4 py-4 space-y-3">
            <li>
              <Link
                href="/blog"
                className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            {hasAccess && (
              <>
                <li className="pt-2 border-t border-border-light">
                  <span className="block text-xs font-semibold text-text-secondary/60 uppercase tracking-wider mb-2">Tools</span>
                </li>
                <li>
                  <a
                    href={TASKS_APP_URL}
                    className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Tasks
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
