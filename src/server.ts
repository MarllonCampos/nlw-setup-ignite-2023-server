import { PrismaClient } from "@prisma/client"
import Fastify from "fastify"

const app = Fastify()
const prismaClient = new PrismaClient()
app.get("/", async () => {
  const habits = await prismaClient.habit.findMany({
    where: {
      title: {
        startsWith: ""
      }
    }
  })



  return `hello nlw, ${JSON.stringify(habits)}`
})

app.listen({
  port: 3333
}).then(() => {
  console.log("Fastify server running")
})