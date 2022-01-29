import http from "http"
import next from "next"

import { initExpressServer } from "./express"
import { initSocketServer } from "./socket"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = Number(process.env.PORT) || 3000

export const run = () =>
  app.prepare().then(() => {
    const expressServer = initExpressServer(handle)
    const httpServer = http.createServer(expressServer)
    initSocketServer(httpServer)

    httpServer.listen(port, (err?: any) => {
      if (err) throw err
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
    })

    return httpServer
  })
