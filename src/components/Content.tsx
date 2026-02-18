import Link from "next/link";

export default function Content() {
  const offerings = [
    {
      name: "Blog",
      description:
        "In-depth articles on financial literacy, health, community, and the ADHD experience. New posts weekly.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      color: "blue",
      cta: { label: "Read the Blog", href: "/blog" },
      badge: null,
    },
    {
      name: "Podcast",
      description:
        "Conversations about investing in the things that matter -- your money, your body, your people.",
      icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
      color: "purple",
      cta: null,
      badge: "Coming Soon",
    },
    {
      name: "Newsletter",
      description:
        "A weekly dose of insight and encouragement delivered to your inbox. No overwhelm.",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "emerald",
      cta: { label: "Subscribe", href: "#contact" },
      badge: null,
    },
  ];

  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: "bg-blue-100", text: "text-primary" },
    purple: { bg: "bg-purple-100", text: "text-secondary" },
    emerald: { bg: "bg-emerald-100", text: "text-accent" },
  };

  return (
    <section id="content" className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">How We Help</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Honest, research-backed content for people navigating an attention-deficit world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item) => {
            const colors = colorMap[item.color];
            return (
              <div
                key={item.name}
                className="bg-white rounded-xl p-8 border border-border-light shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{item.name}</h3>
                <p className="text-text-secondary mb-4">{item.description}</p>
                {item.badge && (
                  <span className="inline-block px-3 py-1 bg-purple-50 text-secondary text-xs font-medium rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.cta && (
                  <Link
                    href={item.cta.href}
                    className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    {item.cta.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
