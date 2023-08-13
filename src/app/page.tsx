import Head from "next/head"
import React from "react"

interface Props {}

const IndexPage: React.FC<Props> = () => (
  <div>
    <Head>
      <title>Labs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Labs</h1>
  </div>
)

export default IndexPage
