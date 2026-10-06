import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";
import ComercialContent from "@/components/ComercialContent";

export const revalidate = 0;

export default async function ComercialPage() {
  const projects = await prisma.project.findMany({
    where: {
      category: "comercial",
      isPublished: true,
    },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <>
      <Header variant="comercial" />
      <ComercialContent projects={projects} />
      <Footer />
    </>
  );
}
