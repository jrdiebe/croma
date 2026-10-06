"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

// Variantes suaves de animação
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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

export default function HomePage() {
  return (
    <>
      <Header variant="default" />

      <main className="relative flex-1 overflow-hidden">
        {/* =========================================================================
            1. HERO / SPLASH SCREEN (100vh com Split Screen e Radiais)
        ========================================================================= */}
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-6 md:px-12 bg-radial-split">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#1b5a2d]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-[#e63812]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center relative z-10">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-xs font-medium tracking-widest uppercase text-zinc-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#5a873c]" />
              <span>Conectar • Projetar • Transformar</span>
            </motion.div>

            {/* Main Title Obviously */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-title font-bold tracking-tight text-white max-w-5xl leading-[1.08] mb-6 uppercase"
            >
              DUAS FORMAS DE PROJETAR. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
                UMA MESMA FORMA DE CONSTRUIR:
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="text-white">EM PARCERIA.</span>
            </motion.h1>

            {/* Subtitle Montserrat */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-14"
            >
              Da experiência de criar espaços que aproximam marcas e pessoas à arquitetura que transforma negócios, a Croma desenvolve projetos com estratégia, criatividade e atenção a cada detalhe.
            </motion.p>

            {/* SPLIT SCREEN CARDS (Stands vs Comercial) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
              {/* Lado Esquerdo - STANDS E EVENTOS */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-8 md:p-10 text-left bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#5a873c]/50 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Glow decorativo no hover */}
                <div className="absolute -right-20 -top-20 w-52 h-52 bg-[#5a873c]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b5a2d]/30 border border-[#5a873c]/30 text-xs font-semibold uppercase tracking-wider text-[#7fc35a] mb-4">
                      <span>Stands & Cenografia</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-title font-bold text-white mb-3">
                      STANDS E EVENTOS
                    </h2>

                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      Espaços pensados para aproximar marcas e pessoas, criar experiências e fazer cada encontro acontecer com impacto e precisão.
                    </p>
                  </div>

                  <Link
                    href="/stands"
                    className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white glass-button-green group-hover:shadow-[0_10px_30px_rgba(90,135,60,0.4)]"
                  >
                    <span>Explorar Stands e Eventos</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Lado Direito - ARQUITETURA COMERCIAL */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-8 md:p-10 text-left bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-[#f47820]/50 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Glow decorativo no hover */}
                <div className="absolute -right-20 -top-20 w-52 h-52 bg-[#f47820]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e63812]/30 border border-[#f47820]/30 text-xs font-semibold uppercase tracking-wider text-[#ff9c54] mb-4">
                      <span>Comercial & Corporativo</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-title font-bold text-white mb-3">
                      ARQUITETURA COMERCIAL
                    </h2>

                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      Ambientes que traduzem marcas, valorizam negócios e transformam espaços em experiências relevantes para quem os vive.
                    </p>
                  </div>

                  <Link
                    href="/comercial"
                    className="inline-flex items-center justify-between w-full px-6 py-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white glass-button-orange group-hover:shadow-[0_10px_30px_rgba(244,120,32,0.4)]"
                  >
                    <span>Explorar Arquitetura Comercial</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. A CROMA EM UMA FRASE
        ========================================================================= */}
        <section className="relative py-28 px-6 md:px-12 border-t border-white/5 bg-[#080808]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold">
              Propósito e Posicionamento
            </span>

            <blockquote className="text-2xl sm:text-3xl md:text-5xl font-light text-zinc-200 leading-snug tracking-tight">
              &ldquo;Há mais de 30 anos, transformamos ideias, necessidades e relações em espaços que fazem sentido para cada marca, cada negócio e cada momento.&rdquo;
            </blockquote>

            <p className="text-lg md:text-xl text-[#7fc35a] font-title font-semibold tracking-wide">
              Mais do que projetar, acompanhamos. Mais do que entregar, construímos junto.
            </p>
          </motion.div>
        </section>

        {/* =========================================================================
            3. EXPERIÊNCIA QUE SE TRANSFORMA EM RESULTADO (COM VÍDEO VERTICAL)
        ========================================================================= */}
        <section className="relative py-28 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto com animação */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs uppercase tracking-widest text-[#5a873c] font-semibold">
                Nossa Abordagem
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white leading-tight">
                EXPERIÊNCIA QUE SE TRANSFORMA EM RESULTADO.
              </h2>
              <p className="text-base text-zinc-400 font-light leading-relaxed">
                Mais de 30 anos de mercado nos ensinaram que um bom projeto começa antes do primeiro traço. Começa na escuta, na troca e na compreensão do que realmente precisa ser construído.
              </p>
              <p className="text-base text-zinc-400 font-light leading-relaxed">
                Com atendimento próximo e experiência em diferentes desafios, conectamos estratégia, criatividade e execução para entregar projetos consistentes, bem resolvidos e alinhados aos objetivos de cada cliente.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#5a873c]" /> Atendimento Próximo
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#f47820]" /> Precisão na Execução
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-white" /> Soluções Sob Medida
                </span>
              </div>
            </motion.div>

            {/* VÍDEO VERTICAL APRESENTAÇÃO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden glass-card p-2 border border-white/15 shadow-2xl group">
                <video
                  src="/videos/apresentacao-vertical.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <p className="text-xs uppercase tracking-widest text-[#7fc35a] font-semibold mb-1">
                    Croma Arquitetura
                  </p>
                  <p className="text-sm font-title font-bold">
                    Conectar • Projetar • Transformar
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            4. NÚMEROS IMPORTANTES
        ========================================================================= */}
        <section className="relative py-24 px-6 md:px-12 bg-white/[0.015] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16 space-y-3"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                Nossa Trajetória
              </span>
              <h2 className="text-3xl sm:text-4xl font-title font-bold text-white">
                NÚMEROS QUE CONSTROEM CONFIANÇA
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {/* Card 1 */}
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white group-hover:text-[#5a873c] transition-colors">
                  30+
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                  Anos de História
                </span>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white group-hover:text-[#5a873c] transition-colors">
                  12.359
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                  Projetos Desenvolvidos
                </span>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white group-hover:text-[#f47820] transition-colors">
                  6.326
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                  Eventos com Nossos Stands
                </span>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white group-hover:text-[#f47820] transition-colors">
                  459.303
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                  m² Construídos
                </span>
              </motion.div>
            </motion.div>

            <p className="text-center text-xs text-zinc-600 mt-8 italic">
              *Dados acumulados ao longo da atuação da Croma Arquitetura no Brasil e exterior.
            </p>
          </div>
        </section>

        {/* =========================================================================
            5. MANIFESTO / FECHAMENTO DA HOME
        ========================================================================= */}
        <section className="relative py-28 px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <span className="text-xs uppercase tracking-widest text-[#f47820] font-semibold">
              Manifesto
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-title font-bold text-white leading-snug">
              Projetos mudam. Espaços mudam. Mercados mudam. <br className="hidden sm:inline" />
              O que permanece é a relação construída ao longo do caminho.
            </h3>
            <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
              É por isso que, em cada projeto, a Croma trabalha para transformar confiança em parceria, parceria em projeto e projeto em resultado.
            </p>
          </motion.div>
        </section>

        {/* =========================================================================
            6. CTA FINAL (WhatsApp Real +5511994528307)
        ========================================================================= */}
        <section className="relative py-24 px-6 md:px-12 border-t border-white/10 bg-gradient-to-b from-transparent to-black">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto glass-card p-10 md:p-16 text-center space-y-6 relative overflow-hidden"
          >
            {/* Background glowing spheres */}
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-[#1b5a2d]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#e63812]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Vamos Começar?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white">
                VAMOS CONSTRUIR O PRÓXIMO PROJETO JUNTOS?
              </h2>
              <p className="text-zinc-400 font-light max-w-xl mx-auto text-base sm:text-lg">
                Conte para a gente o que você precisa. A primeira conversa já faz parte do projeto.
              </p>

              <div className="pt-6">
                <a
                  href="https://wa.me/5511994528307?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20o%20pr%C3%B3ximo%20projeto%20com%20a%20Croma%20Arquitetura."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white glass-button-green shadow-2xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar com a Croma pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
