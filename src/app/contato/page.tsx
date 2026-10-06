"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, Instagram, ArrowUpRight, Sparkles } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function ContatoPage() {
  return (
    <>
      <Header variant="default" />

      <main className="relative flex-1 overflow-hidden pt-36 pb-28 px-6 md:px-12 bg-radial-split">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-[#1b5a2d]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 translate-x-1/2 w-96 h-96 bg-[#e63812]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          {/* Abertura */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-[#5a873c]" />
              <span>Croma Arquitetura • Contato</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-title font-bold text-white tracking-tight uppercase leading-[1.08]">
              TODO PROJETO COMEÇA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">
                COM UMA CONVERSA.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Conte para a Croma o que você está planejando. Pode ser um stand, um espaço comercial ou um desafio que ainda está tomando forma. Vamos entender juntos o melhor caminho.
            </p>
          </motion.div>

          {/* Cards em Glassmorphism com animação */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {/* Card 1: WhatsApp Real */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-8 flex flex-col justify-between hover:border-[#5a873c]/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1b5a2d]/30 border border-[#5a873c]/40 flex items-center justify-center text-[#7fc35a] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-title font-bold text-white leading-snug">
                  PREFERE FALAR DIRETO COM A GENTE?
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Entre em contato pelo WhatsApp e converse com a equipe da Croma para tirar dúvidas, solicitar orçamentos ou marcar uma reunião.
                </p>

                <p className="text-xs sm:text-sm font-semibold text-[#7fc35a] pt-1">
                  (11) 99452-8307
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="https://wa.me/5511994528307?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20novo%20projeto%20com%20a%20Croma."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white glass-button-green group-hover:shadow-[0_10px_30px_rgba(90,135,60,0.4)]"
                >
                  <span>Falar pelo WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Card 2: E-mail (Garantido em uma linha só!) */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-title font-bold text-white leading-snug">
                  OU, SE PREFERIR, MANDE UM E-MAIL.
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Envie sua mensagem, briefing ou apresentação detalhada com os requerimentos do seu projeto para:
                </p>

                {/* E-mail em uma única linha sem quebra */}
                <div className="pt-1">
                  <p className="text-[12px] sm:text-[13px] font-semibold text-white whitespace-nowrap tracking-tight">
                    sandramartins@cromarquitetura.com.br
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="mailto:sandramartins@cromarquitetura.com.br"
                  className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
                >
                  <span>Enviar E-mail</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Card 3: Instagram */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-8 flex flex-col justify-between hover:border-[#f47820]/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e63812]/30 border border-[#f47820]/40 flex items-center justify-center text-[#ff9c54] group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-title font-bold text-white leading-snug">
                  ACOMPANHE A CROMA.
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Projetos, bastidores, processos construtivos, referências visuais e novidades do mundo da arquitetura.
                </p>

                <p className="text-xs sm:text-sm font-semibold text-[#ff9c54] pt-1">
                  @CROMARQUITETURA
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="https://instagram.com/cromarquitetura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white glass-button-orange group-hover:shadow-[0_10px_30px_rgba(244,120,32,0.4)]"
                >
                  <span>@CROMARQUITETURA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
