import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET /api/projects?category=stands&publishedOnly=true
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const publishedOnly = searchParams.get("publishedOnly") === "true";

    const where: any = {};
    if (category) {
      where.category = category.toLowerCase();
    }
    if (publishedOnly) {
      where.isPublished = true;
    }

    const projects = await prisma.project.findMany({
      where,
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });

    return NextResponse.json(projects);
  } catch (error: any) {
    console.error("Erro ao listar projetos:", error);
    return NextResponse.json(
      { error: "Erro ao carregar projetos" },
      { status: 500 }
    );
  }
}

// POST /api/projects (Criar projeto - protegido)
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await req.json();
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

    if (!title || !category || !description || !coverImage) {
      return NextResponse.json(
        { error: "Título, categoria, descrição e imagem de capa são obrigatórios" },
        { status: 400 }
      );
    }

    // Gerar slug único
    let baseSlug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    let slug = baseSlug;
    let count = 1;
    while (await prisma.project.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

    const newProject = await prisma.project.create({
      data: {
        title,
        slug,
        category: category.toLowerCase(),
        subCategory: subCategory || null,
        description,
        coverImage,
        galleryImages:
          typeof galleryImages === "string"
            ? galleryImages
            : JSON.stringify(galleryImages || []),
        client: client || null,
        location: location || null,
        year: year || null,
        area: area || null,
        isPublished: isPublished !== undefined ? isPublished : true,
        isFeatured: isFeatured !== undefined ? isFeatured : false,
        order: Number(order) || 0,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error: any) {
    console.error("Erro ao criar projeto:", error);
    return NextResponse.json(
      { error: "Erro ao criar projeto", details: error.message },
      { status: 500 }
    );
  }
}
