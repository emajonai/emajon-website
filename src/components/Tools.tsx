export default function Tools() {
  const tools = [
    {
      name: "Task Simplifier",
      description: "Break overwhelming tasks into ADHD-friendly steps. No more staring at a huge to-do list.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
      color: "blue",
    },
    {
      name: "Focus Timer",
      description: "Flexible work sessions that adapt to your energy. Not rigid Pomodoros that ignore how you feel.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "purple",
    },
    {
      name: "Routine Builder",
      description: "Build sustainable habits with gentle nudges, not guilt trips. Designed for brains that resist routine.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      color: "emerald",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: "bg-blue-100", text: "text-primary" },
    purple: { bg: "bg-purple-100", text: "text-secondary" },
    emerald: { bg: "bg-emerald-100", text: "text-accent" },
  };

  return (
    <section id="tools" className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Our Tools</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Coming soon &mdash; tools designed around how your brain actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const colors = colorMap[tool.color];
            return (
              <div
                key={tool.name}
                className="bg-white rounded-xl p-8 border border-border-light shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{tool.name}</h3>
                <p className="text-text-secondary mb-4">{tool.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
