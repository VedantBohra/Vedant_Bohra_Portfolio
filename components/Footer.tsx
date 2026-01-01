"use client"

import { ContactForm } from "./ContactForm";

export function Footer() {
  return (
    <footer id="contact" className="bg-black py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>

          {/* Right: Contact Info */}
          <div className="order-1 md:order-2 flex flex-col justify-center gap-6">
            <h2 className="text-2xl md:text-3xl text-white font-semibold leading-snug">
              Let's talk for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-400">
                something special
              </span>
            </h2>

            <p className="text-base text-zinc-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <a 
                href="mailto:vedantbohra@gmail.com" 
                className="group flex items-center gap-3 text-white hover:text-zinc-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg group-hover:underline">vedantbohra@gmail.com</span>
              </a>
              
              <a 
                href="tel:+917900453820" 
                className="group flex items-center gap-3 text-white hover:text-zinc-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg group-hover:underline">+91 7900453820</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}