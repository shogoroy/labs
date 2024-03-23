import { Metadata } from "next"
import React from "react"

interface Props {}

export const metadata: Metadata = {
  title: "Not found - Labs",
  icons: "/favicon.ico",
}

const NotFoundPage: React.FC<Props> = () => (
  <div>
    <h1>NOT FOUND</h1>
  </div>
)

export default NotFoundPage
