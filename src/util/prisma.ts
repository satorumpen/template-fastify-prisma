import { Prisma } from "@prisma/client"

export const notFound = (e: unknown, hook: () => void) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    if (e.code === "P2025") {
      hook()
    }
  }
}
