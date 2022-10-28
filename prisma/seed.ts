import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.collection.deleteMany();
  await prisma.collection.create({
    data: {
      name: 'Findenza',
      description:
        'Fidenza is by far my most versatile algorithm to date. Although the program stays focused on structured curves and blocks, the varieties of scale, organization, texture, and color usage it can employ create a wide array of generative possibilities.',
      token: '0x2237bd04400a644084a3faafa11bfd634a08a18e',
      bannerImage: 'https://agora-bucket-s3.s3.amazonaws.com/bg.jpg',
      profileImage: 'https://agora-bucket-s3.s3.amazonaws.com/bg.jpg',
      user: {
        connectOrCreate: {
          where: {
            address: '0x79092A805f1cf9B0F5bE3c5A296De6e51c1DEd34'.toLowerCase(),
          },
          create: {
            address: '0x79092A805f1cf9B0F5bE3c5A296De6e51c1DEd34'.toLowerCase(),
          },
        },
      },
    },
  });

  await prisma.collection.create({
    data: {
      name: 'LegacyWorks',
      description:
        'Fidenza is by far my most versatile algorithm to date. Although the program stays focused on structured curves and blocks, the varieties of scale, organization, texture, and color usage it can employ create a wide array of generative possibilities.',
      token: '0x5d839715d9105db18032b65d1705ad603882064e',
      bannerImage: 'https://agora-bucket-s3.s3.amazonaws.com/10.jpg',
      profileImage: 'https://agora-bucket-s3.s3.amazonaws.com/10.jpg',
      user: {
        connectOrCreate: {
          where: {
            address: '0x79092A805f1cf9B0F5bE3c5A296De6e51c1DEd34'.toLowerCase(),
          },
          create: {
            address: '0x79092A805f1cf9B0F5bE3c5A296De6e51c1DEd34'.toLowerCase(),
          },
        },
      },
    },
  });

  await prisma.user.update({
    where: {
      address: '0x79092A805f1cf9B0F5bE3c5A296De6e51c1DEd34'.toLowerCase(),
    },
    data: {
      name: 'zkSoju',
      address: '0x79092A805f1cf9B0F5bE3c5A296De6e51c1DEd34'.toLowerCase(),
      bio: "I'm a full stack developer and I love to create generative art.",
      profileImage: 'https://i.imgur.com/4ZQZ1Zu.png',
      bannerImage: 'https://i.imgur.com/4ZQZ1Zu.png',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
