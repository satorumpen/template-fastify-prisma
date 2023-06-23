import { config } from "dotenv"
import { beforeEach } from "vitest"
import { seed } from "~/prisma/seed"

config({ path: ".env.test" })

beforeEach(async () => {
  await seed()
})
