export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Investing for{" "}
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Life
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto mb-4">
          Not just financially, but in health, happiness, and human connection.
        </p>
        <p className="text-base text-purple-300 max-w-xl mx-auto mb-10">
          We&apos;re building content and community to help you thrive &mdash; starting
          with those navigating ADHD and executive function challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pillars"
            className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-hover transition-colors shadow-lg"
          >
            Our Focus
          </a>
          <a
            href="/blog"
            className="px-8 py-3 border-2 border-purple-400 text-purple-200 font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Read the Blog
          </a>
        </div>
      </div>
    </section>
  );
}
