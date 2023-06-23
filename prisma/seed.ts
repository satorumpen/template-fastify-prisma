import { PrismaClient } from "@prisma/client"
import { example } from "./seeds/example"

export const seed = async () => {
  const prisma = new PrismaClient()
  try {
    await example(prisma)
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

const exec = process.argv[2] == "exec"
if (exec) seed()
