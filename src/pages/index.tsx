import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const IndexPage: React.FC<Props> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Labs</h1>
  </Layout>
)

export default IndexPage
