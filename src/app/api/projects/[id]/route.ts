import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET /api/projects/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const project = await prisma.project.findFirst({
      where: {
        OR: [{ id: id }, { slug: id }],
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Projeto não encontrado" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Erro ao buscar projeto" },
      { status: 500 }
    );
  }
}

// PUT /api/projects/[id] (Atualizar projeto - protegido)
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { id } = params;
    const body = await req.json();

    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      return NextResponse.json({ error: "Projeto não encontrado" }, { status: 404 });
    }

    const {
      title,
      category,
      subCategory,
      description,
      coverImage,
      galleryImages,
      client,
      location,
      year,
      area,
      isPublished,
      isFeatured,
      order,
    } = body;

    const updated = await prisma.project.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(category && { category: category.toLowerCase() }),
        subCategory: subCategory !== undefined ? subCategory : existingProject.subCategory,
        ...(description && { description }),
        ...(coverImage && { coverImage }),
        galleryImages:
          typeof galleryImages === "string"
            ? galleryImages
            : galleryImages
            ? JSON.stringify(galleryImages)
            : existingProject.galleryImages,
        client: client !== undefined ? client : existingProject.client,
        location: location !== undefined ? location : existingProject.location,
        year: year !== undefined ? year : existingProject.year,
        area: area !== undefined ? area : existingProject.area,
        isPublished: isPublished !== undefined ? isPublished : existingProject.isPublished,
        isFeatured: isFeatured !== undefined ? isFeatured : existingProject.isFeatured,
        order: order !== undefined ? Number(order) : existingProject.order,
      },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error("Erro ao atualizar projeto:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar projeto" },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id] (Remover projeto - protegido)
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { id } = params;
    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Projeto excluído com sucesso" });
  } catch (error: any) {
    console.error("Erro ao excluir projeto:", error);
    return NextResponse.json(
      { error: "Erro ao excluir projeto" },
      { status: 500 }
    );
  }
}
