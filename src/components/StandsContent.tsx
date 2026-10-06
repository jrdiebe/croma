"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Instagram,
  LayoutGrid,
  Sparkles,
  Target,
  Compass,
} from "lucide-react";

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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

interface StandsContentProps {
  projects: any[];
}

export default function StandsContent({ projects }: StandsContentProps) {
  const methodologySteps = [
    {
      num: "01",
      title: "ENTENDER",
      desc: "Começamos pela conversa. Objetivos, público, marca, evento, necessidades e desafios entram na mesma mesa.",
    },
    {
      num: "02",
      title: "CONECTAR",
      desc: "Transformamos informações em uma direção criativa e arquitetônica coerente com a marca e com o propósito do evento.",
    },
    {
      num: "03",
      title: "PROJETAR",
      desc: "Desenvolvemos o espaço pensando em circulação, experiência, comunicação, funcionalidade e impacto visual.",
    },
    {
      num: "04",
      title: "REALIZAR",
      desc: "Acompanhamos a evolução do projeto para que a ideia saia do papel com qualidade, cuidado e consistência.",
    },
    {
      num: "05",
      title: "ENTREGAR RESULTADO",
      desc: "Porque um espaço bonito é apenas o começo. O projeto precisa funcionar para a marca, para as pessoas e para o objetivo do evento.",
    },
  ];

  const workTypes = [
    {
      title: "STANDS",
      desc: "Projetos sob medida para feiras, congressos e eventos, desenvolvidos para gerar presença, experiência e conexão.",
      icon: LayoutGrid,
    },
    {
      title: "CENOGRAFIAS E EXPERIÊNCIAS",
      desc: "Ambientes imersivos que dão forma a conceitos, narrativas e experiências memoráveis de marca.",
      icon: Sparkles,
    },
    {
      title: "ESPAÇOS PROMOCIONAIS",
      desc: "Soluções arquitetônicas estratégicas para aproximar marcas de seus públicos em diferentes formatos e contextos.",
      icon: Target,
    },
    {
      title: "PROJETOS ESPECIAIS",
      desc: "Projetos personalizados para desafios únicos que pedem uma solução própria, do conceito inicial à montagem final.",
      icon: Compass,
    },
  ];

  return (
    <main className="relative flex-1 overflow-hidden">
      {/* =========================================================================
          1. HERO DA ÁREA DE STANDS (Radial Green sutil)
      ========================================================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-20 px-6 md:px-12 bg-radial-green">
        {/* Subtle Green Glow Sphere */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1b5a2d]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b5a2d]/30 border border-[#5a873c]/40 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-[#7fc35a]"
          >
            <span>Croma Stands & Eventos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-title font-bold text-white tracking-tight uppercase leading-[1.05]"
          >
            ESPAÇOS QUE CONECTAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7fc35a] via-[#5a873c] to-white">
              MARCAS E PESSOAS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Criamos stands e espaços para eventos que transformam presença em experiência, aproximam marcas de seus públicos e fazem cada encontro ser lembrado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://wa.me/5511994528307?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20stand%20com%20a%20Croma."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white glass-button-green"
            >
              <span>Falar com a Croma</span>
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all"
            >
              <span>Ver Portfólio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          2. ABERTURA CONCEITUAL
      ========================================================================= */}
      <section className="relative py-24 px-6 md:px-12 border-t border-white/5 bg-[#090909]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <span className="text-xs uppercase tracking-widest text-[#5a873c] font-semibold">
            Conceito de Atuação
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-title font-bold text-white leading-snug">
            Um stand é mais do que uma estrutura em um pavilhão. <br className="hidden sm:inline" />
            É um ponto de encontro entre uma marca, suas pessoas e as oportunidades que acontecem ao redor dela.
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Por isso, cada projeto começa entendendo o objetivo do evento, o posicionamento da marca e a experiência que precisa ser criada. A partir daí, estratégia, arquitetura, comunicação e execução trabalham juntas para transformar espaço em conexão.
          </p>
        </motion.div>
      </section>

      {/* =========================================================================
          3. METODOLOGIA DE TRABALHO (1 a 5)
      ========================================================================= */}
      <section className="relative py-28 px-6 md:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20 space-y-3"
          >
            <span className="text-xs uppercase tracking-widest text-[#5a873c] font-semibold">
              Processo Estruturado
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white uppercase">
              DO PRIMEIRO BRIEFING AO ÚLTIMO DETALHE, AO SEU LADO.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {methodologySteps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                className="glass-card p-6 md:p-8 flex flex-col justify-between hover:border-[#5a873c]/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <span className="text-3xl font-title font-bold text-[#5a873c]/60 group-hover:text-[#7fc35a] transition-colors">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-title font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 mt-4">
                  <div className="w-6 h-0.5 bg-[#5a873c] group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          4. TIPOS DE TRABALHO (COM ÍCONES PERSONALIZADOS PARA CADA TÓPICO)
      ========================================================================= */}
      <section className="relative py-28 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#5a873c] font-semibold">
                Especialidades
              </span>
              <h2 className="text-3xl sm:text-4xl font-title font-bold text-white mt-2">
                SOLUÇÕES PARA CADA MOMENTO DA MARCA
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md font-light">
              Do pavilhão de feiras aos espaços corporativos e cenográficos, desenvolvemos projetos com precisão técnica.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {workTypes.map((type, idx) => {
              const IconComp = type.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#5a873c]/50 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1b5a2d]/30 border border-[#5a873c]/40 flex items-center justify-center text-[#7fc35a] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-title font-bold text-white group-hover:text-[#7fc35a] transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          5. GRID DINÂMICO DE PORTFÓLIO (STANDS)
      ========================================================================= */}
      <section id="portfolio" className="relative py-28 px-6 md:px-12 bg-black/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <span className="text-xs uppercase tracking-widest text-[#5a873c] font-semibold">
              Portfólio de Stands
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white uppercase">
              CADA PROJETO É UM NOVO ENCONTRO.
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
              Cada evento tem um objetivo. Cada marca, uma história. Cada espaço, uma oportunidade de criar uma experiência diferente. Conheça alguns projetos desenvolvidos pela Croma.
            </p>
          </motion.div>

          {projects.length === 0 ? (
            <div className="text-center py-16 text-zinc-500">
              <p>Nenhum projeto de stands publicado no momento.</p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Link
                    href={`/projeto/${project.slug}`}
                    className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:border-[#5a873c]/50 transition-all duration-300 h-full"
                  >
                    {/* Imagem de Capa */}
                    <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={project.coverImage || "/projects/stand-01.webp"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Tag de categoria / área */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white">
                          {project.subCategory || "Stands & Eventos"}
                        </span>
                      </div>

                      {project.area && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#1b5a2d]/70 backdrop-blur-md border border-[#5a873c]/50 text-white">
                            {project.area}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Detalhes do Projeto */}
                    <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                      <div>
                        {project.client && (
                          <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-1">
                            {project.client}
                          </p>
                        )}
                        <h3 className="text-lg font-title font-bold text-white group-hover:text-[#7fc35a] transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-light mt-2 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white">
                        <span className="group-hover:text-[#7fc35a] transition-colors">
                          Ver Projeto
                        </span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#5a873c]" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* =========================================================================
          6. INSTAGRAM
      ========================================================================= */}
      <section className="relative py-24 px-6 md:px-12 border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto glass-card p-10 md:p-14 text-center space-y-6"
        >
          <span className="text-xs uppercase tracking-widest text-[#5a873c] font-semibold">
            Bastidores e Novidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-title font-bold text-white">
            MAIS PROJETOS, MAIS CONEXÕES.
          </h2>
          <p className="text-zinc-400 font-light max-w-xl mx-auto text-sm sm:text-base">
            Acompanhe projetos, bastidores, montagens de stands e novidades da Croma no Instagram.
          </p>
          <div className="pt-2">
            <a
              href="https://instagram.com/cromarquitetura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4 text-[#7fc35a]" />
              <span>@CROMARQUITETURA</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          7. CTA FINAL (WhatsApp Real +5511994528307)
      ========================================================================= */}
      <section className="relative py-24 px-6 md:px-12 border-t border-white/10 bg-gradient-to-b from-transparent to-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <span className="text-xs uppercase tracking-widest text-[#5a873c] font-semibold">
            Comece Agora
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white">
            SEU PRÓXIMO EVENTO COMEÇA AQUI.
          </h2>
          <p className="text-zinc-400 font-light max-w-lg mx-auto text-base">
            Vamos conversar sobre o espaço que sua marca precisa ocupar.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/5511994528307?text=Ol%C3%A1%2C%20vamos%20conversar%20sobre%20o%20stand%20do%20nosso%20pr%C3%B3ximo%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white glass-button-green shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
