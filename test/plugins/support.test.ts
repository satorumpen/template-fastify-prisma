import plugin from "@/plugins/support"
import { expect, test } from "vitest"
import { register } from "~/test/helper"

const fastify = register(plugin)

test("support works standalone", async () => {
  expect(fastify.someSupport()).toBe("hugs")
})
