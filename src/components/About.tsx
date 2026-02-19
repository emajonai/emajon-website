export default function About() {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Fighting Loneliness, Building Connection
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            We believe true wealth comes from the combination of strong
            relationships, good health, and financial stability. Emajon exists to
            help you invest intentionally in all three
            dimensions &mdash; starting with the ADHD community but extending to
            anyone seeking deeper connections.
          </p>
        </div>

        <div className="bg-background-light rounded-2xl p-8 sm:p-10 border border-border-light">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Our Promise</h3>
              <p className="text-text-secondary leading-relaxed">
                We&apos;re building this company differently. No advertising-driven models
                that compromise our mission. No selling your data. Just honest content
                and community focused on helping you build the life you want.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-text-light border-t border-border-light pt-6">
            <span>&#x2728;</span>
            <span>No ads. No data selling. Just honest content to help you thrive.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
