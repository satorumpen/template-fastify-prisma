import { Error404, Example } from "@/routes/types"
import { notFound } from "@/util/prisma"
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox"
import { Type } from "@sinclair/typebox"

const response = {
  200: Example,
  404: Error404,
}

const route: FastifyPluginAsyncTypebox = async (fastify): Promise<void> => {
  fastify.get(
    "/example/:id",
    {
      schema: {
        params: Type.Pick(Example, ["id"]),
        response,
      },
    },
    async (request, reply) => {
      const example = await fastify.prisma.example.findFirst({ where: { id: request.params.id } })
      if (!example) throw reply.notFound()

      reply.status(200).send({ ...example })
    }
  )

  fastify.post(
    "/example",
    {
      schema: {
        body: Type.Pick(Example, ["name"]),
        response: { 200: Example },
      },
    },
    async (request, reply) => {
      const example = await fastify.prisma.example.create({
        data: { name: request.body.name },
      })

      reply.status(200).send(example)
    }
  )

  fastify.put(
    "/example/:id",
    {
      schema: {
        params: Type.Pick(Example, ["id"]),
        body: Type.Pick(Example, ["name"]),
        response,
      },
    },
    async (request, reply) => {
      const example = await fastify.prisma.example
        .update({
          data: { name: request.body.name },
          where: { id: request.params.id },
        })
        .catch((e) => {
          notFound(e, () => {
            throw reply.notFound()
          })
          throw e
        })

      reply.status(200).send(example)
    }
  )

  fastify.delete(
    "/example/:id",
    {
      schema: {
        params: Type.Pick(Example, ["id"]),
        response,
      },
    },
    async (request, reply) => {
      const example = await fastify.prisma.example
        .delete({
          where: { id: request.params.id },
        })
        .catch((e) => {
          notFound(e, () => {
            throw reply.notFound()
          })
          throw e
        })

      reply.status(200).send(example)
    }
  )
}

export default route
