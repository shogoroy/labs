import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Header from "./header"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, &nbsp;
          <a href="https://github.com/shogoroy/labs">shogoroy</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
