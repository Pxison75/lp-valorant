"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Radio, ExternalLink, Menu, X, Shield, Crosshair, Tv, UserCheck } from "lucide-react";
import { STREAMER_INFO } from "@/data/streamerData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Live & Chat", href: "#stream" },
    { name: "Stats & Rank", href: "#stats" },
    { name: "Agentes", href: "#agentes" },
    { name: "Mira & Setup", href: "#configs" },
    { name: "Clipes", href: "#clipes" },
    { name: "Cronograma", href: "#cronograma" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090c10]/95 backdrop-blur-md border-b border-[#232f42] py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#090c10]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-[#ff4655] val-cut-tl flex items-center justify-center font-black text-black text-xl tracking-tighter group-hover:scale-105 transition-transform">
            <span>PX</span>
            <div className="absolute inset-0 border border-white/30 pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-wider text-white group-hover:text-[#ff4655] transition-colors">
                PXISON
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ff4655]/20 text-[#ff4655] font-mono font-bold border border-[#ff4655]/40">
                PRO
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400 -mt-1 tracking-widest">
              JOÃO PEDRO
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#1a2332]/60 rounded transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Live CTA button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={STREAMER_INFO.twitchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-4 py-2 bg-[#9146ff] hover:bg-[#772ce8] text-white text-xs font-bold uppercase tracking-wider rounded transition-all hover:scale-105 glow-purple group"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <Radio className="w-3.5 h-3.5" />
            <span>Assistir Live</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white hover:bg-[#1a2332] rounded focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d121a] border-b border-[#232f42] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#1a2332] rounded"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href={STREAMER_INFO.twitchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#9146ff] hover:bg-[#772ce8] text-white text-xs font-bold uppercase tracking-wider rounded glow-purple"
            >
              <Radio className="w-4 h-4" />
              <span>Assistir ao Vivo na Twitch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
