import express, { Request, Response } from "express"

export const initExpressServer = (
  handle: (req: Request, res: Response) => void
) => {
  const server = express()

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res)
  })

  return server
}
