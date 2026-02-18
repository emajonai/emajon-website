export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-4">
          Emajon &mdash; Living Profitably
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Your Life Can Be More{" "}
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Profitable
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto mb-4">
          Not just financially, but in health, happiness, and human connection.
        </p>
        <p className="text-base text-purple-300 max-w-xl mx-auto mb-10">
          We&apos;re building content and community to help you thrive &mdash; starting
          with those navigating ADHD and executive function challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#mission"
            className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-hover transition-colors shadow-lg"
          >
            Learn Our Mission
          </a>
          <a
            href="/blog"
            className="px-8 py-3 border-2 border-purple-400 text-purple-200 font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Read the Blog
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 card-hover">
            <div className="text-3xl mb-3">&#x1f4b0;</div>
            <h3 className="font-semibold text-white mb-1">Financial Wellness</h3>
            <p className="text-sm text-purple-200">Building wealth through smart, ADHD-friendly habits</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 card-hover">
            <div className="text-3xl mb-3">&#x2764;&#xfe0f;</div>
            <h3 className="font-semibold text-white mb-1">Health &amp; Fitness</h3>
            <p className="text-sm text-purple-200">Physical and mental wellbeing that sticks</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 card-hover">
            <div className="text-3xl mb-3">&#x1f91d;</div>
            <h3 className="font-semibold text-white mb-1">Meaningful Connections</h3>
            <p className="text-sm text-purple-200">Fighting loneliness and building real relationships</p>
          </div>
        </div>
      </div>
    </section>
  );
}
