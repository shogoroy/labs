import Head from "next/head"
import React from "react"

interface Props {}

const NotFoundPage: React.FC<Props> = () => (
  <div>
    <Head>
      <title>Not found - Labs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>NOT FOUND</h1>
  </div>
)

export default NotFoundPage
