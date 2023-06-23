/// <reference types="vite/client" />

import { PrismaClient } from "@prisma/client"

declare module "fastify" {
  interface FastifyInstance {
    config: {
      CORS_ORIGIN: string
      DATABASE_URL: string
    }
    prisma: PrismaClient
  }
}
