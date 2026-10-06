"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  variant?: "default" | "stands" | "comercial";
}

export default function Header({ variant }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-detect variant from path if not provided
  const currentVariant =
    variant ||
    (pathname?.startsWith("/stands")
      ? "stands"
      : pathname?.startsWith("/comercial")
      ? "comercial"
      : "default");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine logo based on variant
  let logoSrc = "/logos/logo-principal.png";
  let brandColor = "hover:text-[#5a873c]";
  let ctaClass = "glass-button-green";

  if (currentVariant === "stands") {
    logoSrc = "/logos/logo-stands.png";
    brandColor = "hover:text-[#5a873c]";
    ctaClass = "glass-button-green";
  } else if (currentVariant === "comercial") {
    logoSrc = "/logos/logo-comercial.png";
    brandColor = "hover:text-[#f47820]";
    ctaClass = "glass-button-orange";
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 transition-transform hover:scale-105">
          <div className="relative h-10 w-44 md:h-12 md:w-52">
            <Image
              src={logoSrc}
              alt="Croma Arquitetura"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <Link
            href="/stands"
            className={`transition-colors duration-200 ${
              pathname === "/stands"
                ? "text-white font-semibold border-b-2 border-[#5a873c] pb-1"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Stands e Eventos
          </Link>

          <Link
            href="/comercial"
            className={`transition-colors duration-200 ${
              pathname === "/comercial"
                ? "text-white font-semibold border-b-2 border-[#f47820] pb-1"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Arquitetura Comercial
          </Link>

          <Link
            href="/contato"
            className={`transition-colors duration-200 ${
              pathname === "/contato"
                ? "text-white font-semibold border-b-2 border-white pb-1"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Contato
          </Link>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/5511994528307?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20novo%20projeto%20com%20a%20Croma."
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${ctaClass}`}
          >
            <span>Iniciar Conversa</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col space-y-4 text-base shadow-2xl">
          <Link
            href="/stands"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-2 border-b border-white/5"
          >
            Stands e Eventos
          </Link>
          <Link
            href="/comercial"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-2 border-b border-white/5"
          >
            Arquitetura Comercial
          </Link>
          <Link
            href="/contato"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-2 border-b border-white/5"
          >
            Contato
          </Link>
          <a
            href="https://wa.me/5511994528307?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20novo%20projeto%20com%20a%20Croma."
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white text-center mt-2 ${ctaClass}`}
          >
            <span>Falar pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
