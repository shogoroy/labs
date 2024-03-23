import { Metadata } from "next"
import React from "react"

interface Props {}

export const metadata: Metadata = {
  title: "Labs",
  icons: "/favicon.ico",
}

const IndexPage: React.FC<Props> = () => (
  <div>
    <h1>Labs</h1>
  </div>
)

export default IndexPage
