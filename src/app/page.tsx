import { cookies } from "next/headers";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Content from "@/components/Content";
import Community from "@/components/Community";
import Contact from "@/components/Contact";

export default async function Home() {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("stealth_access")?.value === "granted";

  return (
    <>
      <Hero />
      {hasAccess ? (
        <>
          <Pillars />
          <Content />
          <Community />
          <Contact />
        </>
      ) : (
        <section className="py-20 text-center bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-lg text-text-secondary mb-4">
              We&apos;re building something for brains that work differently.
            </p>
            <p className="text-text-secondary mb-8">
              More details coming soon. Follow our blog for updates.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/blog"
                className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-hover transition-colors"
              >
                Read the Blog
              </a>
              <a
                href="/stealth-login"
                className="px-6 py-3 border-2 border-purple-300 text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Have an access code?
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
