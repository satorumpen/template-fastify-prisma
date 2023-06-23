import { describe, expect, test } from "vitest"
import { server } from "~/test/helper"

const fastify = server()

describe("get", () => {
  test("success", async () => {
    const res = await fastify.inject().get("/example/1")
    expect(res.statusCode).toEqual(200)
    expect(res.json()).toEqual({ id: 1, name: "Alice" })
  })
  test("error", async () => {
    const res = await fastify.inject().get("/example/10")
    expect(res.statusCode).toEqual(404)
    expect(res.json()).toEqual({ message: "Not Found" })
  })
})

describe("post", () => {
  test("success", async () => {
    const res = await fastify.inject().post("/example").body({ name: "Taro" })
    expect(res.statusCode).toEqual(200)
    expect(res.json()).toEqual({ id: 3, name: "Taro" })
  })
})

describe("put", () => {
  test("success", async () => {
    const res = await fastify.inject().put("/example/1").body({ name: "Aliss" })
    expect(res.statusCode).toEqual(200)
    expect(res.json()).toEqual({ id: 1, name: "Aliss" })
  })
  test("error", async () => {
    const res = await fastify.inject().put("/example/10").body({ name: "Aliss" })
    expect(res.statusCode).toEqual(404)
    expect(res.json()).toEqual({ message: "Not Found" })
  })
})

describe("delete", () => {
  test("success", async () => {
    const res = await fastify.inject().delete("/example/1")
    expect(res.statusCode).toEqual(200)
    expect(res.json()).toEqual({ id: 1, name: "Alice" })
  })
  test("error", async () => {
    const res = await fastify.inject().delete("/example/10")
    expect(res.statusCode).toEqual(404)
    expect(res.json()).toEqual({ message: "Not Found" })
  })
})
