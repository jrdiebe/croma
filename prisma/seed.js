const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('--- Iniciando Seed do Banco de Dados Croma Arquitetura ---');

  // 1. Criar usuário administrador
  const adminEmail = 'admin@cromarquitetura.com.br';
  const existingUser = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash('croma2025!', 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Sandra Martins',
        password: hashedPassword,
        role: 'ADMIN',
      },
    });
    console.log('✅ Usuário administrador criado: ' + adminEmail);
  } else {
    console.log('ℹ️ Usuário administrador já existe.');
  }

  // 2. Projetos Iniciais para Portfólio (Stands e Comercial)
  const initialProjects = [
    {
      title: 'Stand Inovação & Tecnologia - Future Fair',
      slug: 'stand-inovacao-tecnologia-future-fair',
      category: 'stands',
      subCategory: 'Feiras e Congressos',
      client: 'TechGlobal Connect',
      year: '2024',
      location: 'São Paulo Expo, SP',
      area: '280 m²',
      description:
        'Desenvolvido para transformar a presença da marca em uma experiência imersiva e memorável. O espaço integrou áreas de networking privativas, telões interativos em curva, iluminação cênica de alta temperatura de cor e circulação fluida para acomodar grande fluxo de visitantes durante os 4 dias de congresso.',
      coverImage: '/projects/stand-01.webp',
      galleryImages: JSON.stringify([
        '/projects/stand-01.webp',
        '/projects/stand-02.webp',
        '/projects/stand-03.webp',
      ]),
      isPublished: true,
      isFeatured: true,
      order: 1,
    },
    {
      title: 'Espaço Experiência & Marca - ExpoConstruir',
      slug: 'espaco-experiencia-marca-expoconstruir',
      category: 'stands',
      subCategory: 'Cenografias e Experiências',
      client: 'Aliança Construtora',
      year: '2024',
      location: 'Transamerica Expo Center, SP',
      area: '340 m²',
      description:
        'Concepção arquitetônica focada na apresentação de novos materiais de engenharia e sustentabilidade. Com linhas escultóricas e pé-direito duplo, o stand atraiu reconhecimento no setor e gerou alta taxa de permanência média por visitante.',
      coverImage: '/projects/stand-02.webp',
      galleryImages: JSON.stringify([
        '/projects/stand-02.webp',
        '/projects/stand-01.webp',
        '/projects/stand-03.webp',
      ]),
      isPublished: true,
      isFeatured: true,
      order: 2,
    },
    {
      title: 'Pavilhão Institucional - AgroForum Internacional',
      slug: 'pavilhao-institucional-agroforum',
      category: 'stands',
      subCategory: 'Espaços Promocionais',
      client: 'BioAgro Solutions',
      year: '2023',
      location: 'Ribeirão Preto, SP',
      area: '450 m²',
      description:
        'Projeto de grande escala com integração de materiais naturais, madeira certificada, climatização estratégica e auditório interno para 50 pessoas. Um marco em engenharia e design para eventos do setor agrícola.',
      coverImage: '/projects/stand-03.webp',
      galleryImages: JSON.stringify([
        '/projects/stand-03.webp',
        '/projects/stand-01.webp',
      ]),
      isPublished: true,
      isFeatured: false,
      order: 3,
    },
    {
      title: 'Sede Corporativa & Hub de Negócios',
      slug: 'sede-corporativa-hub-negocios',
      category: 'comercial',
      subCategory: 'Espaços Corporativos',
      client: 'Nexus Capital Group',
      year: '2024',
      location: 'Faria Lima, São Paulo',
      area: '620 m²',
      description:
        'Arquitetura de interiores corporativa pensada para acolher o modelo de trabalho híbrido com máxima sofisticação, conforto acústico e iluminação biofílica. Ambientes que expressam solidez, modernidade e cuidado com as relações humanas.',
      coverImage: '/projects/comercial-01.webp',
      galleryImages: JSON.stringify([
        '/projects/comercial-01.webp',
        '/projects/comercial-02.webp',
        '/projects/comercial-03.webp',
      ]),
      isPublished: true,
      isFeatured: true,
      order: 1,
    },
    {
      title: 'Flagship Store & Showroom de Design',
      slug: 'flagship-store-showroom-design',
      category: 'comercial',
      subCategory: 'Lojas e Showrooms',
      client: 'Vértice Iluminação & Design',
      year: '2023',
      location: 'Jardins, São Paulo',
      area: '380 m²',
      description:
        'Projeto comercial de varejo de alto padrão que conecta a narrativa dos produtos à jornada do consumidor. Criação de cenários de luz controlada, acabamentos em microcimento e serralheria minimalista.',
      coverImage: '/projects/comercial-02.webp',
      galleryImages: JSON.stringify([
        '/projects/comercial-02.webp',
        '/projects/comercial-01.webp',
        '/projects/comercial-03.webp',
      ]),
      isPublished: true,
      isFeatured: true,
      order: 2,
    },
    {
      title: 'Clínica Médica & Bem-Estar',
      slug: 'clinica-medica-bem-estar',
      category: 'comercial',
      subCategory: 'Arquitetura Comercial',
      client: 'Instituto Vitae',
      year: '2023',
      location: 'Vila Olímpia, São Paulo',
      area: '290 m²',
      description:
        'Ambiente humanizado que desmistifica a frieza dos consultórios tradicionais. Texturas suaves, madeira clara, painéis ripados e iluminação indireta proporcionam acolhimento imediato desde a recepção até as salas de atendimento.',
      coverImage: '/projects/comercial-03.webp',
      galleryImages: JSON.stringify([
        '/projects/comercial-03.webp',
        '/projects/comercial-02.webp',
      ]),
      isPublished: true,
      isFeatured: false,
      order: 3,
    },
  ];

  for (const project of initialProjects) {
    const exists = await prisma.project.findUnique({
      where: { slug: project.slug },
    });
    if (!exists) {
      await prisma.project.create({ data: project });
      console.log(`✅ Projeto criado: ${project.title} (${project.category})`);
    }
  }

  console.log('--- Seed finalizado com sucesso! ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
