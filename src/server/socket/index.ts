import { Server as HttpServer } from "http"
import { Server as SocketServer } from "socket.io"

import { Chat } from "../../domain/chat"

export const initSocketServer = (server: HttpServer) => {
  const socketio = new SocketServer(server)
  const io = socketio.listen(server)

  io.on("connection", (socket) => {
    console.log("a user connected")

    socket.on("disconnect", () => {
      console.log("user disconnected")
    })

    socket.on("chat message", (chat: Chat) => {
      console.log(`message: ${chat.message} by ${chat.userId}`)
      io.emit("chat message", chat)
    })
  })
}
