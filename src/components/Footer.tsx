import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-border-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-3">Emajon</h3>
            <p className="text-sm text-text-secondary">
              Investing in your financial future, your health, and your community. Content and community for brains that work differently.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-text-secondary hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/blog" className="text-sm text-text-secondary hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/#about" className="text-sm text-text-secondary hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/feed.xml" className="text-sm text-text-secondary hover:text-primary transition-colors">RSS Feed</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">Stay Connected</h4>
            <p className="text-sm text-text-secondary mb-3">
              Subscribe for weekly insights on investing in what matters most.
            </p>
            <Link
              href="/blog"
              className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border-light text-center text-sm text-text-light">
          &copy; 2026 Emajon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
