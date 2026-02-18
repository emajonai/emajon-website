"use client";

import { useState } from "react";
import WaitlistModal from "./WaitlistModal";

export default function Community() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Join the Community
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
          Emajon is being built in the open, with input from people who actually live with ADHD.
          Join us and help shape what comes next.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          <div className="bg-background-light rounded-xl p-6 border border-border-light">
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <p className="text-sm text-text-secondary">Waitlist Members</p>
          </div>
          <div className="bg-background-light rounded-xl p-6 border border-border-light">
            <div className="text-3xl font-bold text-secondary mb-1">12</div>
            <p className="text-sm text-text-secondary">Blog Articles</p>
          </div>
          <div className="bg-background-light rounded-xl p-6 border border-border-light">
            <div className="text-3xl font-bold text-accent mb-1">3</div>
            <p className="text-sm text-text-secondary">Tools in Development</p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-md"
        >
          Join the Waitlist
        </button>
      </div>

      {showModal && <WaitlistModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
