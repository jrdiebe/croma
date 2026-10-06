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
  Store,
  Briefcase,
  Building,
  Sparkles,
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

interface ComercialContentProps {
  projects: any[];
}

export default function ComercialContent({ projects }: ComercialContentProps) {
  const methodologySteps = [
    {
      num: "01",
      title: "ENTENDER",
      desc: "Mapeamos o negócio, o espaço, o público e os objetivos antes de começar a desenhar.",
    },
    {
      num: "02",
      title: "CONECTAR",
      desc: "Aproximamos estratégia, identidade e arquitetura para encontrar uma direção que represente o negócio.",
    },
    {
      num: "03",
      title: "PROJETAR",
      desc: "Desenvolvemos soluções equilibrando estética, funcionalidade, experiência e viabilidade construtiva.",
    },
    {
      num: "04",
      title: "REALIZAR",
      desc: "Acompanhamos o projeto com atenção aos detalhes para preservar a intenção original na execução.",
    },
    {
      num: "05",
      title: "ENTREGAR RESULTADO",
      desc: "Porque um bom espaço precisa ser bonito, funcional e relevante para o crescimento do negócio.",
    },
  ];

  const workTypes = [
    {
      title: "ARQUITETURA COMERCIAL",
      desc: "Projetos que alinham identidade, experiência do cliente e necessidades operacionais do negócio.",
      icon: Store,
    },
    {
      title: "ESPAÇOS CORPORATIVOS",
      desc: "Ambientes pensados para representar a cultura da empresa e melhorar a experiência e produtividade das equipes.",
      icon: Briefcase,
    },
    {
      title: "LOJAS E SHOWROOMS",
      desc: "Espaços cenográficos e de varejo que transformam a relação sensorial entre marca, produto e público.",
      icon: Sparkles,
    },
    {
      title: "PROJETOS ESPECIAIS",
      desc: "Soluções sob medida para necessidades específicas, sempre conectando conceito, funcionalidade e execução.",
      icon: Building,
    },
  ];

  return (
    <main className="relative flex-1 overflow-hidden">
      {/* =========================================================================
          1. HERO DA ÁREA COMERCIAL (Radial Orange sutil)
      ========================================================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-32 pb-20 px-6 md:px-12 bg-radial-orange">
        {/* Subtle Orange Glow Sphere */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e63812]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e63812]/30 border border-[#f47820]/40 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-[#ff9c54]"
          >
            <span>Croma Arquitetura Comercial</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-title font-bold text-white tracking-tight uppercase leading-[1.05]"
          >
            ESPAÇOS QUE VALORIZAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9c54] via-[#f47820] to-white">
              MARCAS E NEGÓCIOS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Projetamos ambientes comerciais que traduzem posicionamento, melhoram experiências e criam espaços preparados para o presente e para o futuro do negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://wa.me/5511994528307?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20comercial%20com%20a%20Croma."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white glass-button-orange"
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
          <span className="text-xs uppercase tracking-widest text-[#f47820] font-semibold">
            Arquitetura Estratégica
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-title font-bold text-white leading-snug">
            Um espaço comercial não existe apenas para ser visto. <br className="hidden sm:inline" />
            Ele precisa funcionar, comunicar e criar uma experiência coerente com a marca e com as pessoas que vão ocupá-lo.
          </h2>
          <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            A Croma conecta arquitetura, identidade e estratégia para transformar necessidades de negócio em ambientes que fazem sentido, do primeiro conceito à entrega final.
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
            <span className="text-xs uppercase tracking-widest text-[#f47820] font-semibold">
              Nossa Abordagem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white uppercase">
              ARQUITETURA TAMBÉM É UMA CONVERSA.
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
                className="glass-card p-6 md:p-8 flex flex-col justify-between hover:border-[#f47820]/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <span className="text-3xl font-title font-bold text-[#f47820]/60 group-hover:text-[#ff9c54] transition-colors">
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
                  <div className="w-6 h-0.5 bg-[#f47820] group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          4. TIPOS DE TRABALHO
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
              <span className="text-xs uppercase tracking-widest text-[#f47820] font-semibold">
                Segmentos Comerciais
              </span>
              <h2 className="text-3xl sm:text-4xl font-title font-bold text-white mt-2">
                SOLUÇÕES PARA MARCAS QUE CRESCEM
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md font-light">
              Do layout corporativo aos pontos de venda e showrooms, conectamos a marca à jornada das pessoas.
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
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#f47820]/50 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e63812]/30 border border-[#f47820]/40 flex items-center justify-center text-[#ff9c54] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-title font-bold text-white group-hover:text-[#ff9c54] transition-colors">
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
          5. GRID DINÂMICO DE PORTFÓLIO (COMERCIAL)
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
            <span className="text-xs uppercase tracking-widest text-[#f47820] font-semibold">
              Portfólio Comercial
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white uppercase">
              CADA ESPAÇO TEM UMA HISTÓRIA PARA CONTAR.
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
              Do conceito aos detalhes, cada projeto nasce de uma necessidade diferente. Conheça alguns dos espaços que desenvolvemos para transformar marcas e negócios.
            </p>
          </motion.div>

          {projects.length === 0 ? (
            <div className="text-center py-16 text-zinc-500">
              <p>Nenhum projeto comercial publicado no momento.</p>
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
                    className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:border-[#f47820]/50 transition-all duration-300 h-full"
                  >
                    {/* Imagem de Capa */}
                    <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={project.coverImage || "/projects/comercial-01.webp"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Tag de categoria / área */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white">
                          {project.subCategory || "Arquitetura Comercial"}
                        </span>
                      </div>

                      {project.area && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#e63812]/70 backdrop-blur-md border border-[#f47820]/50 text-white">
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
                        <h3 className="text-lg font-title font-bold text-white group-hover:text-[#ff9c54] transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-light mt-2 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white">
                        <span className="group-hover:text-[#ff9c54] transition-colors">
                          Ver Projeto
                        </span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#f47820]" />
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
          <span className="text-xs uppercase tracking-widest text-[#f47820] font-semibold">
            Bastidores e Referências
          </span>
          <h2 className="text-3xl sm:text-4xl font-title font-bold text-white">
            A ARQUITETURA ACONTECE TODOS OS DIAS.
          </h2>
          <p className="text-zinc-400 font-light max-w-xl mx-auto text-sm sm:text-base">
            Veja projetos, referências e bastidores do trabalho da Croma no Instagram.
          </p>
          <div className="pt-2">
            <a
              href="https://instagram.com/cromarquitetura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4 text-[#ff9c54]" />
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
          <span className="text-xs uppercase tracking-widest text-[#f47820] font-semibold">
            Próximo Passo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-white">
            VAMOS DAR FORMA AO SEU PRÓXIMO ESPAÇO?
          </h2>
          <p className="text-zinc-400 font-light max-w-lg mx-auto text-base">
            Conte para a gente o que você está planejando para a sua empresa ou ponto comercial.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/5511994528307?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20novo%20projeto%20comercial%20com%20a%20Croma."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white glass-button-orange shadow-xl hover:scale-105 transition-all"
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
