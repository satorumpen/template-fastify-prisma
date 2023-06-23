import cors, { FastifyCorsOptions } from "@fastify/cors"
import fp from "fastify-plugin"

export default fp<FastifyCorsOptions>(async (fastify, opts) => {
  fastify.register(cors, {
    origin: fastify.config.CORS_ORIGIN,
  })
})
