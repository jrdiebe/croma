import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import prisma from "@/lib/prisma";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Maximize2,
  Building,
  MessageCircle,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 0;

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    return { title: "Projeto não encontrado | Croma Arquitetura" };
  }

  return {
    title: `${project.title} | Croma Arquitetura`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    notFound();
  }

  const isStands = project.category === "stands";
  const headerVariant = isStands ? "stands" : "comercial";
  const accentColor = isStands ? "#5a873c" : "#f47820";
  const ctaClass = isStands ? "glass-button-green" : "glass-button-orange";

  let galleryImages: string[] = [];
  try {
    galleryImages = JSON.parse(project.galleryImages);
  } catch (e) {
    galleryImages = [project.coverImage];
  }
  if (!galleryImages || galleryImages.length === 0) {
    galleryImages = [project.coverImage];
  }

  return (
    <>
      <Header variant={headerVariant} />

      <main className="relative flex-1 overflow-hidden pt-32 pb-24 px-6 md:px-12">
        {/* Subtle Background Glow */}
        <div
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20`}
          style={{ backgroundColor: accentColor }}
        />

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* Breadcrumb / Back button */}
          <div>
            <Link
              href={isStands ? "/stands" : "/comercial"}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para {isStands ? "Stands e Eventos" : "Arquitetura Comercial"}</span>
            </Link>
          </div>

          {/* Project Header Info */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white"
                style={{
                  backgroundColor: isStands ? "rgba(27, 90, 45, 0.4)" : "rgba(230, 56, 18, 0.4)",
                  border: `1px solid ${accentColor}40`,
                }}
              >
                {isStands ? "Stands & Eventos" : "Arquitetura Comercial"}
              </span>

              {project.subCategory && (
                <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider text-zinc-400 bg-white/5 border border-white/10">
                  {project.subCategory}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-title font-bold text-white tracking-tight uppercase leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-white/10">
            {project.client && (
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                  Cliente / Marca
                </span>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-zinc-400" />
                  {project.client}
                </p>
              </div>
            )}

            {project.year && (
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                  Ano
                </span>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  {project.year}
                </p>
              </div>
            )}

            {project.location && (
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                  Localização
                </span>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {project.location}
                </p>
              </div>
            )}

            {project.area && (
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                  Área do Projeto
                </span>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-zinc-400" />
                  {project.area}
                </p>
              </div>
            )}
          </div>

          {/* Gallery Mosaico com Lightbox */}
          <div className="space-y-6">
            <h3 className="text-xl font-title font-bold text-white tracking-wide uppercase">
              Galeria do Projeto
            </h3>
            <ProjectGallery images={galleryImages} title={project.title} />
          </div>

          {/* CTA Seção do Projeto */}
          <section className="glass-card p-10 md:p-14 text-center rounded-3xl space-y-6 relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-title font-bold text-white uppercase">
              GOSTOU DESTE PROJETO? VAMOS CONVERSAR SOBRE O SEU.
            </h2>
            <p className="text-zinc-400 font-light max-w-xl mx-auto text-sm sm:text-base">
              Conte para a gente as necessidades da sua marca. Construímos soluções sob medida com atendimento próximo e acompanhamento completo.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/5511994528307?text=Ol%C3%A1%2C%20vi%20o%20projeto%20"${encodeURIComponent(
                  project.title
                )}"%20e%20gostaria%20de%20conversar%20sobre%20o%20meu.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${ctaClass} shadow-xl hover:scale-105 transition-all`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar com a Croma pelo WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/cromarquitetura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>@CROMARQUITETURA</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
