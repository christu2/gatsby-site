import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Beasts Football League" />
    <h1>Beasts Football League Homepage</h1>
    <p>Founded 2008</p>
    <p>Commissioner: Nick Christus</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
    <Link to="/page-2/">Go to page 2</Link>
    <br></br>
    <Link to="/page-3/">Go to page 3</Link>
    </p>
  </Layout>
)

export default IndexPage
