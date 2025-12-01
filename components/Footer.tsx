"use client";

import { Mail, Phone, Facebook, Instagram, X, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="
      relative py-20 text-white 
      bg-[#050816] 
      border-t border-white/10
      bg-gradient-to-b from-[#050816] via-[#040515] to-[#03030f]
    ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* COLUMN 1 — Brand */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Niche Geeky</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            We build secure, SEO-friendly, and high-performing websites and 
            online stores tailored to your goals using modern technologies.
          </p>

          <h4 className="font-medium mb-2">Contact:</h4>

          <div className="flex items-center gap-3 text-white/70 text-sm mb-2">
            <Mail className="w-4 h-4" />
            <span>hellonichegeeky@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-white/70 text-sm mb-6">
            <Phone className="w-4 h-4" />
            <span>+8807683674747</span>
          </div>

          {/* Email Input + Button */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-full backdrop-blur-lg">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="bg-transparent text-sm text-white/80 outline-none placeholder-white/40 flex-1"
            />

            <button className="
              px-5 py-1.5 rounded-full text-sm font-medium text-white
              bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500
              shadow-[0_10px_25px_rgba(118,75,255,0.35)]
              hover:shadow-[0_10px_30px_rgba(118,75,255,0.55)]
              transition
            ">
              Book a Demo
            </button>
          </div>
        </div>

        {/* COLUMN 2 — Features */}
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>24/7 Support</li>
            <li>Custom Web Development</li>
            <li>SEO Optimization</li>
            <li>Landing Pages</li>
            <li>Analytics Integration</li>
            <li>Performance Boost</li>
          </ul>
        </div>

        {/* COLUMN 3 — Solutions */}
        <div>
          <h3 className="font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>E-commerce Stores</li>
            <li>Business Websites</li>
            <li>Dashboards</li>
            <li>Portfolio Websites</li>
            <li>Custom Systems</li>
            <li>Brand Websites</li>
          </ul>
        </div>

        {/* COLUMN 4 — Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>About Us</li>
            <li>Our Work</li>
            <li>Reviews</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 border-t border-white/10 pt-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs text-white/50">
            Niche Geeky © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Facebook className="w-4 h-4 text-white/70" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Instagram className="w-4 h-4 text-white/70" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
              <X className="w-4 h-4 text-white/70" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
              <Linkedin className="w-4 h-4 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
