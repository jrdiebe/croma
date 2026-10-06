"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  UploadCloud,
  X,
  Plus,
  Loader2,
  Check,
  AlertCircle,
  ArrowLeft,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";

interface ProjectFormProps {
  initialData?: {
    id?: string;
    title: string;
    category: string;
    subCategory?: string | null;
    client?: string | null;
    year?: string | null;
    location?: string | null;
    area?: string | null;
    description: string;
    coverImage: string;
    galleryImages: string[] | string;
    isPublished: boolean;
    isFeatured: boolean;
    order: number;
  };
  isEditing?: boolean;
}

export default function ProjectForm({ initialData, isEditing = false }: ProjectFormProps) {
  const router = useRouter();

  // Parsing initial gallery
  let initialGalleryList: string[] = [];
  if (initialData?.galleryImages) {
    if (Array.isArray(initialData.galleryImages)) {
      initialGalleryList = initialData.galleryImages;
    } else {
      try {
        initialGalleryList = JSON.parse(initialData.galleryImages);
      } catch (e) {
        initialGalleryList = [];
      }
    }
  }

  const [title, setTitle] = useState(initialData?.title || "");
  const [category, setCategory] = useState(initialData?.category || "stands");
  const [subCategory, setSubCategory] = useState(initialData?.subCategory || "");
  const [client, setClient] = useState(initialData?.client || "");
  const [year, setYear] = useState(initialData?.year || new Date().getFullYear().toString());
  const [location, setLocation] = useState(initialData?.location || "São Paulo / SP");
  const [area, setArea] = useState(initialData?.area || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [coverImage, setCoverImage] = useState(initialData?.coverImage || "");
  const [galleryImages, setGalleryImages] = useState<string[]>(initialGalleryList);
  const [isPublished, setIsPublished] = useState(initialData?.isPublished ?? true);
  const [isFeatured, setIsFeatured] = useState(initialData?.isFeatured ?? false);
  const [order, setOrder] = useState(initialData?.order ?? 0);

  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Upload de Imagem de Capa
  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingCover(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setCoverImage(data.url);
      } else {
        setError(data.error || "Falha no upload da capa");
      }
    } catch (err: any) {
      setError("Erro no envio do arquivo.");
    } finally {
      setIsUploadingCover(false);
    }
  };

  // Upload de Imagens da Galeria
  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploadingGallery(true);
    setError("");

    try {
      const newUrls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append("file", files[i]);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (res.ok && data.url) {
          newUrls.push(data.url);
        }
      }

      setGalleryImages((prev) => [...prev, ...newUrls]);
    } catch (err: any) {
      setError("Erro no upload de fotos para a galeria.");
    } finally {
      setIsUploadingGallery(false);
    }
  };

  const removeGalleryImage = (indexToRemove: number) => {
    setGalleryImages(galleryImages.filter((_, idx) => idx !== indexToRemove));
  };

  // Submissão do Formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title.trim()) {
      setError("Informe o título do projeto.");
      return;
    }
    if (!description.trim()) {
      setError("Escreva uma descrição para o projeto.");
      return;
    }
    if (!coverImage) {
      setError("Faça o upload da imagem de capa.");
      return;
    }

    setIsSaving(true);

    const payload = {
      title,
      category,
      subCategory,
      client,
      year,
      location,
      area,
      description,
      coverImage,
      galleryImages,
      isPublished,
      isFeatured,
      order: Number(order),
    };

    try {
      const endpoint = isEditing
        ? `/api/projects/${initialData?.id}`
        : "/api/projects";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao salvar o projeto.");
        setIsSaving(false);
        return;
      }

      setSuccess("Projeto salvo com sucesso!");
      setTimeout(() => {
        router.push("/painel-de-controle");
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setError("Erro na conexão ao salvar o projeto.");
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl mx-auto">
      {/* Botão Voltar e Título */}
      <div className="flex items-center justify-between">
        <Link
          href="/painel-de-controle"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Painel</span>
        </Link>

        <h1 className="text-xl font-title font-bold text-white uppercase">
          {isEditing ? "Editar Projeto" : "Cadastrar Novo Projeto"}
        </h1>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3 text-green-400 text-xs">
          <Check className="w-4 h-4 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Grid Principal do Formulário */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Coluna Esquerda: Informações Gerais */}
        <div className="md:col-span-7 space-y-6">
          <div className="glass-card p-6 md:p-8 rounded-2xl space-y-5 border border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 border-b border-white/5 pb-3">
              1. Identificação do Projeto
            </h3>

            {/* Título */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Título do Projeto *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Stand Inovação & Tecnologia - Future Fair"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#5a873c] transition-colors"
              />
            </div>

            {/* Categoria & Subcategoria */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Categoria Principal *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#5a873c]"
                >
                  <option value="stands" className="bg-[#121212]">Stands e Eventos</option>
                  <option value="comercial" className="bg-[#121212]">Arquitetura Comercial</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Subcategoria
                </label>
                <input
                  type="text"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  placeholder="Ex: Feiras e Congressos, Cenografia..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#5a873c]"
                />
              </div>
            </div>

            {/* Cliente & Ano */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Cliente / Marca
                </label>
                <input
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  placeholder="Ex: Samsung, Vale, TechGlobal..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#5a873c]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Ano de Execução
                </label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="Ex: 2024"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#5a873c]"
                />
              </div>
            </div>

            {/* Localização & Área */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Localização
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ex: São Paulo Expo, SP"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#5a873c]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  Área Construída
                </label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Ex: 350 m²"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#5a873c]"
                />
              </div>
            </div>

            {/* Descrição Detalhada */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Descrição do Desafio & Solução *
              </label>
              <textarea
                required
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva o contexto do projeto, objetivo da marca, diferenciais arquitetônicos e os resultados obtidos..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#5a873c] leading-relaxed resize-y"
              />
              <p className="text-[11px] text-zinc-500">
                Texto de apoio para a página dedicada do projeto.
              </p>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Imagens & Publicação */}
        <div className="md:col-span-5 space-y-6">
          {/* Imagem de Capa */}
          <div className="glass-card p-6 rounded-2xl space-y-4 border border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 border-b border-white/5 pb-3">
              2. Imagem de Capa *
            </h3>

            {coverImage ? (
              <div className="relative h-48 w-full rounded-xl overflow-hidden border border-white/15 group">
                <Image
                  src={coverImage}
                  alt="Capa do Projeto"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setCoverImage("")}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 hover:bg-red-600 text-white transition-colors"
                  title="Remover capa"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="border-2 border-dashed border-white/15 hover:border-[#5a873c] rounded-xl h-44 flex flex-col items-center justify-center cursor-pointer transition-colors p-4 text-center group">
                {isUploadingCover ? (
                  <div className="flex flex-col items-center gap-2 text-zinc-400">
                    <Loader2 className="w-6 h-6 animate-spin text-[#5a873c]" />
                    <span className="text-xs">Enviando imagem...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <UploadCloud className="w-8 h-8 text-zinc-400 group-hover:text-[#5a873c] transition-colors" />
                    <span className="text-xs font-semibold text-zinc-300">
                      Clique para fazer upload da Capa
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      PNG, JPG ou WEBP (Recomendado 1920x1080)
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverUpload}
                  disabled={isUploadingCover}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Galeria de Fotos Adicionais */}
          <div className="glass-card p-6 rounded-2xl space-y-4 border border-white/10">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                3. Galeria do Projeto ({galleryImages.length})
              </h3>
              <label className="cursor-pointer text-[11px] font-semibold uppercase tracking-wider text-[#7fc35a] hover:underline flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleGalleryUpload}
                  disabled={isUploadingGallery}
                  className="hidden"
                />
              </label>
            </div>

            {isUploadingGallery && (
              <div className="p-3 rounded-lg bg-white/5 flex items-center justify-center gap-2 text-xs text-zinc-400">
                <Loader2 className="w-4 h-4 animate-spin text-[#5a873c]" />
                <span>Enviando fotos da galeria...</span>
              </div>
            )}

            {galleryImages.length === 0 ? (
              <p className="text-xs text-zinc-500 text-center py-4">
                Nenhuma foto adicional adicionada na galeria.
              </p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative h-20 rounded-lg overflow-hidden border border-white/10 group"
                  >
                    <Image
                      src={imgUrl}
                      alt={`Foto ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(idx)}
                      className="absolute top-1 right-1 p-1 rounded-full bg-black/70 hover:bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Configurações de Publicação */}
          <div className="glass-card p-6 rounded-2xl space-y-4 border border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 border-b border-white/5 pb-3">
              4. Configurações de Visibilidade
            </h3>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Publicar no Site</p>
                <p className="text-[10px] text-zinc-500">Exibir o projeto para visitantes</p>
              </div>
              <input
                type="checkbox"
                checked={isPublished}
                onChange={(e) => setIsPublished(e.target.checked)}
                className="w-5 h-5 rounded accent-[#1b5a2d] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5">
              <div>
                <p className="text-xs font-semibold text-white">Projeto em Destaque</p>
                <p className="text-[10px] text-zinc-500">Priorizar na ordem de exibição</p>
              </div>
              <input
                type="checkbox"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="w-5 h-5 rounded accent-[#1b5a2d] cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-white/5 space-y-1">
              <label className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                Ordem de Exibição
              </label>
              <input
                type="number"
                value={order}
                onChange={(e) => setOrder(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs"
              />
            </div>
          </div>

          {/* Botão de Salvar */}
          <button
            type="submit"
            disabled={isSaving}
            className="w-full py-4 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs text-white glass-button-green flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 shadow-2xl"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Gravando Projeto...</span>
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                <span>{isEditing ? "Atualizar Projeto" : "Publicar Projeto"}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
