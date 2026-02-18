export default function Pillars() {
  const pillars = [
    {
      title: "Connection & Community",
      emoji: "\u{1f91d}",
      accent: "card-accent-primary",
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
      accent: "card-accent-secondary",
      items: [
        "Physical fitness habits",
        "Mental health support",
        "ADHD-friendly routines",
        "Sustainable self-care",
        "Executive function strategies",
      ],
    },
    {
      title: "Financial Health",
      emoji: "\u{1f4b0}",
      accent: "card-accent-accent",
      items: [
        "ADHD-friendly money management",
        "Building financial habits",
        "Reducing money stress",
        "Long-term planning strategies",
        "Financial accountability",
      ],
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`bg-white rounded-xl p-8 shadow-sm card-hover ${pillar.accent}`}
            >
              <div className="text-3xl mb-4">{pillar.emoji}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">{pillar.title}</h3>
              <ul className="space-y-3">
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
      </div>
    </section>
  );
}
