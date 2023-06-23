import cors from "@/plugins/cors"
import env from "@/plugins/env"
import prisma from "@/plugins/prisma"
import sensible from "@/plugins/sensible"
import example from "@/routes/example"
import fp from "fastify-plugin"

export const app = fp(async (fastify, opts) => {
  // plugin
  await fastify.register(env)
  fastify.register(cors)
  fastify.register(prisma)
  fastify.register(sensible)

  // route
  void fastify.register(example)
})
