import { app } from "@/app"
import Fastify, { FastifyPluginAsync } from "fastify"
import { afterAll, beforeAll } from "vitest"

export const server = () => {
  const fastify = Fastify()

  beforeAll(async () => {
    fastify.register(app)
    await fastify.ready()
  })

  afterAll(() => fastify.close())

  return fastify
}

export const register = (plugin: FastifyPluginAsync) => {
  const fastify = Fastify()

  beforeAll(async () => {
    fastify.register(plugin)
    await fastify.ready()
  })

  afterAll(() => fastify.close())

  return fastify
}
