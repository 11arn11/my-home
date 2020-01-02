import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/app/programmazione">Go to Programmazione</Link>
    <br />
    <Link to="/app/">Go to app</Link>
    <br />
    <Link to="/app/dispensa">Go to Dispensa</Link>
    <br />
    <Link to="/app/pasti">Go to Pasti</Link>
  </Layout>
)

export default IndexPage
