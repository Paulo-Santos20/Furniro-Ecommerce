import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed script...');
  // Criação de categorias
  const furnitureCategory = await prisma.category.upsert({
    where: { name: 'Furniture' },
    update: {},
    create: { name: 'Furniture' },
  });

  // Dados dos produtos
  const products = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: 'syltherineImage',
      images: ['syltherineImage2', 'syltherineImage3', 'syltherineImage4'],
      discount: '-30%',
      rating: 4.5,
      reviewCount: 5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 2500000,
      image: 'leviosaImage',
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: 'lolitoImage',
      discount: '-50%',
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 500000,
      image: 'respiraImage',
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      price: 1500000,
      image: 'grifoImage',
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 150000,
      image: 'muggoImage',
      discount: 'New',
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: 'pingkyImage',
      discount: '-50%',
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      price: 500000,
      image: 'pottyImage',
      discount: 'New',
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
  ];

  // Inserção dos produtos
  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product,
    });
  }

  console.log('Seed data inserted');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
