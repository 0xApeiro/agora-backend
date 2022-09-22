import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.listing.deleteMany();
  await prisma.considerationItem.deleteMany();
  await prisma.item.deleteMany();

  await prisma.listing.create({
    data: {
      offerer: '0x79092A805f1cf9B0F5bE3c5A296De6e51c1DEd34',
      zone: '0x0000000000000000000000000000000000000000',
      offer: {
        create: [
          {
            itemType: 2,
            token: '0x5d839715d9105db18032b65d1705ad603882064e',
            identifierOrCriteria: '4',
            startAmount: '1',
            endAmount: '1',
          },
        ],
      },
      consideration: {
        create: [
          {
            item: {
              create: {
                itemType: 0,
                token: '0x0000000000000000000000000000000000000000',
                identifierOrCriteria: '0',
                startAmount: '10000000000000000',
                endAmount: '10000000000000000',
              },
            },
            recipient: '0x79092A805f1cf9B0F5bE3c5A296De6e51c1DEd34',
          },
        ],
      },
      orderType: 0,
      startTime: '1663714021',
      endTime:
        '115792089237316195423570985008687907853269984665640564039457584007913129639935',
      zoneHash:
        '0x3000000000000000000000000000000000000000000000000000000000000000',
      salt: '0xd169d4cfe997d9adb6a38aaba56ccbfa',
      conduitKey:
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      counter: 0,
      signature:
        '0xbb150b475eae358491be5eaaa4f2fd29f94d01a4820ca91fbe04fc5f7cde5a51614bea62b9eeb9136b79cff80160314439c22ace7c8da82b4846a333dbcb1252',
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
