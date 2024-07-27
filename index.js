import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
  .get('/', () => {
    return c.text('OK')
  })

const server = serve({
  fetch: app.fetch,
  port: Number(process.env.PORT ?? 8096),
})

server.on('listening', () => {
  console.log('Listening on port', process.env.PORT ?? 8096)
})
