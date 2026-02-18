"use client";

import { useState, useEffect, useRef } from "react";

interface WaitlistModalProps {
  onClose: () => void;
}

export default function WaitlistModal({ onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waitlist = JSON.parse(localStorage.getItem("emajon-newsletter") || "[]");
    waitlist.push({ email, date: new Date().toISOString() });
    localStorage.setItem("emajon-newsletter", JSON.stringify(waitlist));
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
      >
        {submitted ? (
          <div className="text-center">
            <div className="text-4xl mb-4">&#x1f389;</div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">You&apos;re subscribed!</h2>
            <p className="text-text-secondary mb-6">
              We&apos;ll send you the best of what we publish. Thanks for subscribing.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="newsletter-title" className="text-2xl font-bold text-text-primary mb-2">
              Subscribe to the Newsletter
            </h2>
            <p className="text-text-secondary mb-6">
              Weekly insights on money, health, and community. No spam, just content that matters.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-text-primary mb-1">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-border-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-text-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
            <button
              onClick={onClose}
              className="mt-4 w-full text-sm text-text-light hover:text-text-secondary transition-colors"
            >
              Maybe later
            </button>
          </>
        )}
      </div>
    </div>
  );
}
