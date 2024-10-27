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
      image:
        'https://lh3.googleusercontent.com/pw/AP1GczOkpSAvzv700YGQd6LviOsE-hNE9USyA3ZlhgkgvuRM-QQ_mOnM92JXPo52ouNT9X5YeP_nPSX6LfJ80oYGN4Mc03Ba8dxPkLk8lma0HHHAmAYsl161EDQokcKH_cLuGdA4gW2wHKHqGCGKogzOvFU=w620-h928-s-no-gm?authuser=0',
      images: [
        'https://lh3.googleusercontent.com/pw/AP1GczOkpSAvzv700YGQd6LviOsE-hNE9USyA3ZlhgkgvuRM-QQ_mOnM92JXPo52ouNT9X5YeP_nPSX6LfJ80oYGN4Mc03Ba8dxPkLk8lma0HHHAmAYsl161EDQokcKH_cLuGdA4gW2wHKHqGCGKogzOvFU=w620-h928-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMFofEUhmq_WdzQFGwrkLWCaqtQs0V8Dd7RjZ7rKYuBxC5wJg6HMDgN8ivN2TQ1HJMfdfz8LuALgScfLhjgiWX_UHqfjy00D5t7hWDMSdegOklJrf_0BAu0veERyMtALN8JrIsPJ_fimocNDFnkirs=w618-h928-s-no-gm?authuser=0'
      ],
      is_new: false,
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
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMFofEUhmq_WdzQFGwrkLWCaqtQs0V8Dd7RjZ7rKYuBxC5wJg6HMDgN8ivN2TQ1HJMfdfz8LuALgScfLhjgiWX_UHqfjy00D5t7hWDMSdegOklJrf_0BAu0veERyMtALN8JrIsPJ_fimocNDFnkirs=w618-h928-s-no-gm?authuser=0',
      is_new: false,
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
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNFOxJ0pV3hXTpIKJg5KLagO4y4p22-V15707Cscwr_-w7F0tXkQIlNppWdCCawh1Nqz_hrXnSN8_Y18x4fNh3dVnmN8UUS8yQ3g9F27brMWIxwKJK_Ehlw8nHnBlIQE5uTA8BklAyjZmxsqCUZ-WQ=w1408-h928-s-no-gm?authuser=0',
      is_new: false,
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
      image: 'https://lh3.googleusercontent.com/pw/AP1GczPFFnDzFGU6i5fu7UblrnaEigrSHDRi8riNzF3PUefIppnrvyGV3ydBNLotlhpAZe1zVWVy1UeV9nuiT84R7QunJAPcs2Osx9f4XE-hewByds3nXn74kIX8cDnpy9KO58HTTH8SeVCVEV0AS8ANxz_d=w1403-h928-s-no-gm?authuser=0',
      is_new: true,
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      price: 1500000,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczPFFnDzFGU6i5fu7UblrnaEigrSHDRi8riNzF3PUefIppnrvyGV3ydBNLotlhpAZe1zVWVy1UeV9nuiT84R7QunJAPcs2Osx9f4XE-hewByds3nXn74kIX8cDnpy9KO58HTTH8SeVCVEV0AS8ANxz_d=w1403-h928-s-no-gm?authuser=0',
      is_new: false,
      rating: 4.5,
      additionalInfo:
        'Color: Brown\nMaterial: Leather\nDimensions: 84" W x 39" D x 33" H\nWeight: 160 lbs',
      categoryId: furnitureCategory.id,
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      price: 150000,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNCPS-DJUE2wmkKt_WCby6ErRquz_3Jy5MlErG3d10q4bH7v4X1rxQ_CXrCXoQ0XHuBb1L6PmBcnFzFnkjkwjUQCfGjGc3ovg0Hhy1I3fHkZLRabEN_ru4hfqLhgm60ys--qdI5LkbGuiIGnitTq-ic=w800-h534-s-no-gm?authuser=0',
      is_new: true,
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
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMwuTBMQMQrZf7SM9jMLugJn_aXmpCOwPaindrKW7eCFhWhGA0OIwQ4xBjRFPGg9Prsfh1Bh4VCcclM6VTKeFmkvnnzGUW1MQElwOfSPtMlq6IPcfFWSa4cu0YQYcFBCIfQFvSP6NDsIH-bvz393xhQ=w1390-h928-s-no-gm?authuser=0',
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
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMlP3ZWSVbwWIKOJ9ktka4RiT0XWrMYe3bw81wnPpbaLQKEvVwBsZv4T9tcK06vZxLSvrf7RC1aFqq4udxfhRvUtsRiRCWxJf2EyjX3FKZasAcBRzH3HQyVDqB5bIc0UAmkTL_OMh5zUZ9krkpF_w6M=w1237-h928-s-no-gm?authuser=0',
      is_new: true,
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
