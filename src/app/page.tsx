import { auth } from "@clerk/nextjs/server";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Content from "@/components/Content";
import Community from "@/components/Community";
import Contact from "@/components/Contact";

export default async function Home() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  return (
    <>
      <Hero />
      {isSignedIn ? (
        <>
          <Pillars />
          <Content />
          <Community />
          <Contact />
        </>
      ) : (
        <section className="py-12 sm:py-14 text-center bg-white">
          <div className="max-w-xl mx-auto px-4">
            <p className="text-sm sm:text-base text-text-secondary mb-8">
              We&apos;re building something for brains that work differently.
              More details coming soon.
            </p>
            <div className="flex gap-3 justify-center">
              <a
                href="/blog"
                className="px-5 py-2 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-hover transition-colors"
              >
                Read the Blog
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
