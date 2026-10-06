import React from "react";
import { redirect, notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import ProjectForm from "@/components/ProjectForm";
import AdminLogoutButton from "@/components/AdminLogoutButton";
import Link from "next/link";
import Image from "next/image";

interface EditProjectPageProps {
  params: {
    id: string;
  };
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/painel-de-controle/login");
  }

  const project = await prisma.project.findUnique({
    where: { id: params.id },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col">
      <header className="sticky top-0 z-40 bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/painel-de-controle" className="relative h-9 w-36">
            <Image
              src="/logos/logo-principal.png"
              alt="Croma Arquitetura"
              fill
              className="object-contain object-left"
            />
          </Link>
          <AdminLogoutButton />
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-10">
        <ProjectForm initialData={project} isEditing={true} />
      </main>
    </div>
  );
}
