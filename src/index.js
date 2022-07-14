const Fastify = require('fastify')

const app = Fastify()

app.get('/hello/:name', async (req, reply) => {
  reply.send(`Hola, ${String(req.params.name)}!`)
})

app.get('/healthz', async (req, reply) => {
  reply.status(200).send({
    status: 'ready'
  })
})

const PORT = Number(process.env.PORT ?? 3000)

app.listen({
  port: PORT,
  host: '0.0.0.0',
}, (err, addr) => {
  if (err) throw err

  console.log(`Server running at ${addr}`)
})