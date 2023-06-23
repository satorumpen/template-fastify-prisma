import env, { FastifyEnvOptions } from "@fastify/env"
import fp from "fastify-plugin"

export default fp<FastifyEnvOptions>(async (fastify, opts) => {
  fastify.register(env, {
    dotenv: true,
    schema: {
      type: "object",
      required: ["CORS_ORIGIN", "DATABASE_URL"],
      properties: {
        CORS_ORIGIN: { type: "string" },
        DATABASE_URL: { type: "string" },
      },
    },
  })
})
