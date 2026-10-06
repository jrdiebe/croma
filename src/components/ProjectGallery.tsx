"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <>
      {/* Mosaico Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((imgUrl, index) => {
          // Cria dinâmica visual para o primeiro item ocupar 2 colunas se houver mais de 2 fotos
          const isLarge = index === 0 && images.length > 2;

          return (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer glass-card border border-white/10 hover:border-white/30 transition-all duration-300 ${
                isLarge ? "md:col-span-2 md:h-[480px] h-80" : "h-80"
              }`}
            >
              <Image
                src={imgUrl}
                alt={`${title} - Foto ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                <div className="p-3 rounded-full bg-black/60 border border-white/20 text-white transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 select-none animate-in fade-in duration-200"
        >
          {/* Botão Fechar */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all z-50"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navegação Anterior */}
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all z-50"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* Imagem Central */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={images[selectedIndex]}
                alt={`${title} - Ampliada`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-xs tracking-widest uppercase text-zinc-400">
              <span>{selectedIndex + 1}</span> / <span>{images.length}</span> • {title}
            </div>
          </div>

          {/* Navegação Próxima */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all z-50"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
