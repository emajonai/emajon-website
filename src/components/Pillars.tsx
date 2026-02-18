export default function Pillars() {
  const pillars = [
    {
      title: "Connection & Community",
      emoji: "\u{1f91d}",
      borderColor: "border-primary",
      items: [
        "Maintain meaningful relationships",
        "Combat isolation and loneliness",
        "Build support networks",
        "Strengthen family bonds",
        "Nurture work relationships",
      ],
    },
    {
      title: "Health & Wellness",
      emoji: "\u{2764}\u{fe0f}",
      borderColor: "border-secondary",
      items: [
        "Physical fitness habits",
        "Mental health support",
        "ADHD-friendly routines",
        "Sustainable self-care",
        "Stress management",
      ],
    },
    {
      title: "Financial Health",
      emoji: "\u{1f4b0}",
      borderColor: "border-accent",
      items: [
        "ADHD-friendly money management",
        "Building financial habits",
        "Reducing money stress",
        "Long-term planning strategies",
        "Financial accountability",
      ],
    },
  ];

  const foundations = [
    {
      title: "Executive Function",
      emoji: "\u{1f9e0}",
      description: "Planning, prioritizing, and following through",
    },
    {
      title: "Organization",
      emoji: "\u{1f4cb}",
      description: "Managing complexity without overwhelm",
    },
    {
      title: "Focus",
      emoji: "\u{1f3af}",
      description: "Staying on track in an attention-deficit world",
    },
  ];

  return (
    <section id="pillars" className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Three Pillars of a Profitable Life
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            True profitability isn&apos;t just about money. It&apos;s about investing in the
            things that compound over a lifetime.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`bg-white rounded-xl p-8 border-2 ${pillar.borderColor} shadow-sm card-hover text-center`}
            >
              <div className="text-3xl mb-4">{pillar.emoji}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">{pillar.title}</h3>
              <ul className="space-y-3 text-left">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Foundation sitting under the pillars */}
        <div className="mt-8 relative">
          {/* Connector lines from pillars to foundation */}
          <div className="hidden md:flex justify-around px-16 h-6">
            <div className="w-px bg-primary/30" />
            <div className="w-px bg-primary/30" />
            <div className="w-px bg-primary/30" />
          </div>

          <div className="bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8">
              <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-8">
                Built on the Foundation of
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {foundations.map((f) => (
                  <div key={f.title} className="text-center">
                    <div className="text-3xl mb-4">{f.emoji}</div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">{f.title}</h3>
                    <p className="text-sm text-text-secondary">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
