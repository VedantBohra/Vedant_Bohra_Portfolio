"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // Initialize EmailJS once (client-side only)
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current
      );

      setSubmitStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 3000);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
        formRef.current
      )
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg text-slate-400 font-normal">
        Contact Form
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg"
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          value={formData.from_name}
          onChange={(e) =>
            setFormData({ ...formData, from_name: e.target.value })
          }
          className="px-4 py-3 text-base bg-zinc-900 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-600"
        />

        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          value={formData.from_email}
          onChange={(e) =>
            setFormData({ ...formData, from_email: e.target.value })
          }
          className="px-4 py-3 text-base bg-zinc-900 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-600"
        />

        <textarea
          name="message"
          placeholder="Write your message here..."
          rows={5}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="px-4 py-3 text-base bg-zinc-900 text-white border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-600 resize-none"
        />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-white text-black font-medium rounded-lg
            cursor-pointer
            hover:bg-zinc-200 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <span className="text-green-400 text-sm">
              Message sent successfully!
            </span>
          )}

          {submitStatus === "error" && (
            <span className="text-red-400 text-sm">
              Failed to send. Please try again.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
