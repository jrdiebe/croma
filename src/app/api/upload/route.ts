import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import path from "path";
import fs from "fs/promises";

export async function POST(req: NextRequest) {
  try {
    // Proteger upload com autenticação
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitizar nome e gerar nome único
    const timestamp = Date.now();
    const originalExt = path.extname(file.name) || ".jpg";
    const cleanBase = path
      .basename(file.name, originalExt)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 30);
    
    const fileName = `${timestamp}-${cleanBase}${originalExt}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");

    // Garantir que a pasta exista
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, fileName);
    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${fileName}`;

    return NextResponse.json({ url: publicUrl, success: true }, { status: 201 });
  } catch (error: any) {
    console.error("Erro no upload de imagem:", error);
    return NextResponse.json(
      { error: "Falha ao processar upload", details: error.message },
      { status: 500 }
    );
  }
}
