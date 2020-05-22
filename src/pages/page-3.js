import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image2 from "../components/image2"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to page 3</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image2 />
    </div>
    <p>
    <Link to="/">Go back home</Link>
    <br></br>
    <Link to="/page-3/">Go to page 3</Link>
    </p>
  </Layout>
)

export default IndexPage
