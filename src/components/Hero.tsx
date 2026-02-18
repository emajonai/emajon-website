export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
          Organization Made{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Simple
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          ADHD-informed tools and community for managing your relationships, health, and finances.
          Built by people who get it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-md"
          >
            Learn More
          </a>
          <a
            href="/blog"
            className="px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Read the Blog
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border-light">
            <div className="text-2xl mb-2">&#x1f9e0;</div>
            <h3 className="font-semibold text-text-primary mb-1">ADHD-First Design</h3>
            <p className="text-sm text-text-secondary">Built around how your brain actually works</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border-light">
            <div className="text-2xl mb-2">&#x1f91d;</div>
            <h3 className="font-semibold text-text-primary mb-1">Community Driven</h3>
            <p className="text-sm text-text-secondary">Connect with people who understand</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border-light">
            <div className="text-2xl mb-2">&#x26a1;</div>
            <h3 className="font-semibold text-text-primary mb-1">Quick Wins</h3>
            <p className="text-sm text-text-secondary">Small steps that lead to big changes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
