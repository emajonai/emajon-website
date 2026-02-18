"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subscribers = JSON.parse(localStorage.getItem("emajon-newsletter") || "[]");
    subscribers.push({ email, date: new Date().toISOString() });
    localStorage.setItem("emajon-newsletter", JSON.stringify(subscribers));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
        <p className="text-lg font-semibold text-text-primary">Thanks for subscribing!</p>
        <p className="text-sm text-text-secondary mt-1">We&apos;ll send you the good stuff. No spam.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
      <h3 className="text-xl font-semibold text-text-primary mb-2">Stay in the Loop</h3>
      <p className="text-text-secondary mb-4">
        Get new articles and ADHD-friendly tips delivered to your inbox. No overwhelm, we promise.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 px-4 py-2 border border-border-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-text-primary"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
