"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Edit,
  Trash2,
  ExternalLink,
  Plus,
  Eye,
  EyeOff,
  Search,
  Filter,
} from "lucide-react";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  subCategory: string | null;
  coverImage: string;
  isPublished: boolean;
  client: string | null;
  year: string | null;
  createdAt: any;
}

export default function AdminProjectList({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      (project.client && project.client.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      filterCategory === "all" || project.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Tem certeza que deseja excluir o projeto "${title}"?`)) {
      return;
    }

    setIsDeleting(id);
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProjects(projects.filter((p) => p.id !== id));
      } else {
        alert("Erro ao excluir projeto.");
      }
    } catch (e) {
      alert("Erro ao excluir projeto. Verifique sua conexão.");
    } finally {
      setIsDeleting(null);
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !currentStatus }),
      });

      if (res.ok) {
        setProjects(
          projects.map((p) =>
            p.id === id ? { ...p, isPublished: !currentStatus } : p
          )
        );
      }
    } catch (e) {
      alert("Erro ao alterar visibilidade.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Controles de Busca, Filtro e Botão Novo Projeto */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          {/* Busca */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por título ou cliente..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#5a873c] transition-colors"
            />
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Filtro por Categoria */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 focus:outline-none focus:border-[#5a873c]"
          >
            <option value="all" className="bg-[#121212] text-white">Todas as categorias</option>
            <option value="stands" className="bg-[#121212] text-white">Stands e Eventos</option>
            <option value="comercial" className="bg-[#121212] text-white">Arquitetura Comercial</option>
          </select>
        </div>

        <Link
          href="/painel-de-controle/novo-projeto"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white glass-button-green whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Projeto</span>
        </Link>
      </div>

      {/* Tabela / Cards de Projetos */}
      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center text-zinc-500 text-sm">
            Nenhum projeto encontrado com os filtros atuais.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-zinc-400 uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Projeto</th>
                  <th className="py-4 px-6 font-semibold">Categoria</th>
                  <th className="py-4 px-6 font-semibold">Cliente</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 font-semibold text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProjects.map((p) => {
                  const isStands = p.category === "stands";
                  return (
                    <tr
                      key={p.id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Capa e Título */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-zinc-900 shrink-0 border border-white/10">
                            <Image
                              src={p.coverImage || "/projects/stand-01.webp"}
                              alt={p.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm">
                              {p.title}
                            </p>
                            <p className="text-zinc-500 text-[11px] font-mono">
                              /projeto/{p.slug}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Categoria */}
                      <td className="py-4 px-6">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                            isStands
                              ? "bg-[#1b5a2d]/30 text-[#7fc35a] border border-[#5a873c]/30"
                              : "bg-[#e63812]/30 text-[#ff9c54] border border-[#f47820]/30"
                          }`}
                        >
                          {isStands ? "Stands" : "Comercial"}
                        </span>
                      </td>

                      {/* Cliente */}
                      <td className="py-4 px-6 text-zinc-300">
                        {p.client || "—"}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6">
                        <button
                          onClick={() => togglePublish(p.id, p.isPublished)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors ${
                            p.isPublished
                              ? "bg-green-500/10 text-green-400 border border-green-500/20"
                              : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
                          }`}
                          title="Clique para alternar publicação"
                        >
                          {p.isPublished ? (
                            <>
                              <Eye className="w-3 h-3" />
                              <span>Publicado</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3 h-3" />
                              <span>Rascunho</span>
                            </>
                          )}
                        </button>
                      </td>

                      {/* Ações */}
                      <td className="py-4 px-6 text-right">
                        <div className="inline-flex items-center gap-2">
                          <Link
                            href={`/projeto/${p.slug}`}
                            target="_blank"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                            title="Ver no site"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            href={`/painel-de-controle/editar/${p.id}`}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                            title="Editar projeto"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </Link>

                          <button
                            onClick={() => handleDelete(p.id, p.title)}
                            disabled={isDeleting === p.id}
                            className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors disabled:opacity-50"
                            title="Excluir projeto"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
