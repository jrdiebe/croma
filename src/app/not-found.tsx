import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header variant="default" />
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <div className="glass-card p-10 md:p-14 rounded-3xl max-w-lg space-y-6">
          <span className="text-6xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7fc35a] to-[#ff9c54]">
            404
          </span>
          <h1 className="text-2xl font-title font-bold text-white uppercase">
            Página não encontrada
          </h1>
          <p className="text-sm text-zinc-400 font-light">
            O espaço ou projeto que você procura não foi encontrado ou mudou de endereço.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white glass-button-green"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para o Início</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
