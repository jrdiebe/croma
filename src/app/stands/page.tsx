import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";
import StandsContent from "@/components/StandsContent";

export const revalidate = 0;

export default async function StandsPage() {
  const projects = await prisma.project.findMany({
    where: {
      category: "stands",
      isPublished: true,
    },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <>
      <Header variant="stands" />
      <StandsContent projects={projects} />
      <Footer />
    </>
  );
}
