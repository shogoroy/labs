"use client"

import React from "react"
import { io } from "socket.io-client"
import { v4 as uuid } from "uuid"

import { Chat } from "../../domain/chat"

const socket = io()
const uid = uuid()

const SocketIoChatPage: React.VFC = () => {
  const [text, setText] = React.useState("")

  const [chats, setChats] = React.useState<Array<Chat>>([])

  const handleSubmit = () => {
    if (text) {
      const chat = { id: uuid(), userId: uid, message: text }
      socket.emit("chat message", chat)
      setText("")
    }
  }

  React.useEffect(() => {
    socket.on("chat message", function (chat) {
      setChats((prev) => [...prev, chat])
      window.scrollTo(0, document.body.scrollHeight)
    })
  }, [])

  return (
    <div>
      <div>
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>

      <div>
        {chats.map(({ userId, message }, idx) => (
          <div key={`${idx}-${userId}-${message}`}>
            {userId === uid ? "You" : userId}: {message}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocketIoChatPage
