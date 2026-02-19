import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-secondary">Emajon</h3>
            <p className="text-sm text-white/60 mt-1">
              Content and community for brains that work differently.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
              Blog
            </Link>
            <a href="mailto:hello@emajon.com" className="text-sm text-white/70 hover:text-white transition-colors">
              Connect
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; 2026 Emajon
          </p>
        </div>
      </div>
    </footer>
  );
}
