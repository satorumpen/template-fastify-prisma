import { app } from "@/app"
import Fastify from "fastify"

export const fastify = Fastify({
  logger: true,
})

void fastify.register(app)

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeFullReload", () => {
    fastify.close()
  })
}

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})
