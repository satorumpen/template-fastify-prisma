import { PrismaClient } from "@prisma/client"

export const example = async (prisma: PrismaClient) => {
  await prisma.$queryRawUnsafe("truncate table Example")
  await prisma.example.createMany({
    data: [
      {
        id: 1,
        name: "Alice",
      },
      {
        id: 2,
        name: "Bob",
      },
    ],
  })
}
