import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-3">Emajon</h3>
            <p className="text-sm text-white/70">
              Investing in your financial future, your health, and your community.
              Content and community for brains that work differently.
            </p>
            <p className="text-xs text-white/50 mt-3">
              No ads. No data selling. Just honest content to help you thrive.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#content" className="text-sm text-white/70 hover:text-white transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/feed.xml" className="text-sm text-white/70 hover:text-white transition-colors">
                  RSS Feed
                </Link>
              </li>
              <li>
                <Link href="/#mission" className="text-sm text-white/70 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Focus Areas</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/70">ADHD Support</li>
              <li className="text-sm text-white/70">Relationship Building</li>
              <li className="text-sm text-white/70">Financial Wellness</li>
              <li className="text-sm text-white/70">Mental Health</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@emajon.com" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link href="/#community" className="text-sm text-white/70 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
            <p className="text-sm text-white/70 mt-4">
              Subscribe for weekly insights on investing in what matters most.
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            &copy; 2026 Emajon. Building a more connected, healthier, wealthier world.
          </p>
        </div>
      </div>
    </footer>
  );
}
