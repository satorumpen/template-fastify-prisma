import { Type } from "@sinclair/typebox"

export const Example = Type.Object({
  id: Type.Number(),
  name: Type.String(),
})

export const Error404 = Type.Object({
  message: Type.String(),
})
