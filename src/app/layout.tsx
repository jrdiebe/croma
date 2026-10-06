import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cromarquitetura.com.br"),
  title: "Croma Arquitetura | Conectar. Projetar. Transformar.",
  description:
    "Há mais de 30 anos criando espaços para stands, eventos e arquitetura comercial que conectam marcas, negócios e pessoas.",
  keywords: [
    "Croma Arquitetura",
    "Stands",
    "Cenografia",
    "Arquitetura Comercial",
    "Feiras e Eventos",
    "Projetos Corporativos",
    "São Paulo",
  ],
  authors: [{ name: "Croma Arquitetura" }],
  openGraph: {
    title: "Croma Arquitetura | Conectar. Projetar. Transformar.",
    description:
      "Stands e Eventos | Arquitetura Comercial. Da concepção à entrega com mais de 30 anos de história.",
    url: "https://cromarquitetura.com.br",
    siteName: "Croma Arquitetura",
    images: [
      {
        url: "/logos/logo-principal.png",
        width: 800,
        height: 600,
        alt: "Croma Arquitetura",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className="bg-[#0a0a0a] text-[#ededed] antialiased selection:bg-[#5a873c] selection:text-white">
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
