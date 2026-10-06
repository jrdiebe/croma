import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-white/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-52">
                <Image
                  src="/logos/logo-principal.png"
                  alt="Croma Arquitetura"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xl font-light text-zinc-300 font-title tracking-tight">
              Conectar. Projetar. Transformar.
            </p>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Mais de 30 anos transformando necessidades e relações em espaços que geram experiências e resultados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link
                  href="/stands"
                  className="hover:text-[#5a873c] transition-colors flex items-center gap-1 group"
                >
                  <span>Stands e Eventos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/comercial"
                  className="hover:text-[#f47820] transition-colors flex items-center gap-1 group"
                >
                  <span>Arquitetura Comercial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Fale Conosco</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato & Redes */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
              Conecte-se com a Croma
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/5511994528307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#5a873c] group-hover:text-[#5a873c] transition-all">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>Falar pelo WhatsApp</span>
              </a>

              <a
                href="mailto:sandramartins@cromarquitetura.com.br"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">sandramartins@cromarquitetura.com.br</span>
              </a>

              <a
                href="https://instagram.com/cromarquitetura"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f47820] group-hover:text-[#f47820] transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>@CROMARQUITETURA</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <p>© {new Date().getFullYear()} Croma Arquitetura. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6">
            <span>Stands e Eventos</span>
            <span>•</span>
            <span>Arquitetura Comercial</span>
            <span>•</span>
            <span>São Paulo / Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
