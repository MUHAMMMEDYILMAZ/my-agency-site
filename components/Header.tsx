"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // CLOSE MENU ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        px-4 pt-4 
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          flex items-center justify-between
          px-6 py-3
          rounded-full

          bg-[rgba(70,70,80,0.35)]
          backdrop-blur-xl
          border border-white/10
          shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        "
      >
        {/* LOGO */}
        <span className="text-xl font-semibold text-white">Niche Geeky</span>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
          <Link href="#" className="hover:text-white relative">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white rounded-full" />
          </Link>
          <Link href="#">Services</Link>
          <Link href="#">Our Work</Link>
          <Link href="#">Reviews</Link>
          <Link href="#">Contact us</Link>
        </nav>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="h-9 w-9 flex items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-green-400 hover:border-green-400 transition">
            <Phone className="h-4 w-4" />
          </button>

          <button
            className="
              px-5 py-1.5 
              rounded-full 
              text-sm font-medium 
              text-white

              bg-gradient-to-r from-[#764bff] via-[#9b6bff] to-[#5c4bff]
              shadow-[0_15px_40px_#764bff73]

              border border-white/20
            "
          >
            Get Started <span className="text-white/70 ml-1">• it's free →</span>
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          ref={menuRef}
          className="
            mt-4 mx-auto max-w-6xl
            px-6 py-4
            rounded-2xl

            bg-[rgba(70,70,80,0.35)]
            backdrop-blur-xl
            border border-white/10
            shadow-[0_4px_20px_rgba(0,0,0,0.25)]

            flex flex-col gap-4 text-white text-sm md:hidden
          "
        >
          <Link href="#" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Our Work
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Reviews
          </Link>
          <Link href="#" onClick={() => setOpen(false)}>
            Contact us
          </Link>

          <hr className="border-white/10" />

          <button className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-white/10 border border-white/20">
            <Phone className="h-4 w-4" /> WhatsApp
          </button>

          <button
            className="
              px-5 py-1.5 
              rounded-full 
              text-sm font-medium 
              text-white

              bg-gradient-to-r from-[#764bff] via-[#9b6bff] to-[#5c4bff]
              shadow-[0_15px_40px_#764bff73]

              border border-white/10
              hover:brightness-110
              transition
            "
          >
            Get Started <span className="text-white/70 ml-1">• it's free →</span>
          </button>
        </div>
      )}
    </header>
  );
}
