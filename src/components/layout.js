import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ title, children }) => {

  const header = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 20
      }}
    >
      <h1
        style={{
          margin: 0,
        }}
      >
        <Link
          style={{
            color: `inherit`,
            margin: 0,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    </div>
  )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a target="_blank" rel="noreferrer" href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
