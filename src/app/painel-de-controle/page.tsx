import React from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import AdminProjectList from "@/components/AdminProjectList";
import AdminLogoutButton from "@/components/AdminLogoutButton";
import {
  FolderKanban,
  CheckCircle,
  Clock,
  Sparkles,
  Info,
  Layers,
  Store,
} from "lucide-react";

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/painel-de-controle/login");
  }

  // Buscar todos os projetos
  const projects = await prisma.project.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  const totalProjects = projects.length;
  const standsProjects = projects.filter((p) => p.category === "stands").length;
  const comercialProjects = projects.filter((p) => p.category === "comercial").length;
  const publishedCount = projects.filter((p) => p.isPublished).length;

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="relative h-9 w-36">
              <Image
                src="/logos/logo-principal.png"
                alt="Croma Arquitetura"
                fill
                className="object-contain object-left"
              />
            </Link>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-zinc-500 font-semibold border-l border-white/10 pl-4">
              CMS • Gestão de Portfólio
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-semibold text-white">
                {session.user?.name || "Sandra Martins"}
              </p>
              <p className="text-[10px] text-zinc-500">
                {session.user?.email || "admin@cromarquitetura.com.br"}
              </p>
            </div>
            <AdminLogoutButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-10 space-y-10">
        {/* Welcome Banner com Instruções Claras para os Arquitetos */}
        <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b5a2d]/30 border border-[#5a873c]/30 text-xs font-semibold uppercase tracking-wider text-[#7fc35a]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Painel do Arquiteto</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-title font-bold text-white">
              Bem-vindo ao painel da Croma Arquitetura.
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Aqui você pode adicionar novos projetos com fotos de alta qualidade, gerenciar os já existentes, definir destaque e manter o portfólio do site sempre atualizado e impactante. As alterações aparecem imediatamente no site oficial.
            </p>
          </div>
        </div>

        {/* Métricas do Painel */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <FolderKanban className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-title font-bold text-white">{totalProjects}</p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Total de Projetos
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b5a2d]/30 border border-[#5a873c]/40 flex items-center justify-center text-[#7fc35a]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-title font-bold text-white">{standsProjects}</p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Stands e Eventos
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e63812]/30 border border-[#f47820]/40 flex items-center justify-center text-[#ff9c54]">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-title font-bold text-white">{comercialProjects}</p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Comercial
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-title font-bold text-white">{publishedCount}</p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                Publicados no Site
              </p>
            </div>
          </div>
        </div>

        {/* Gerenciamento de Projetos */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-title font-bold text-white uppercase tracking-wide">
              Gerenciar Portfólio
            </h2>
          </div>

          <AdminProjectList initialProjects={projects} />
        </div>
      </main>
    </div>
  );
}
