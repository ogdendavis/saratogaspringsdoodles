import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import DogImage from "../components/dogImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, dog lovers</h1>
    <p>Welcome to the first Midwoofery template.</p>
    <p>We're figuring things out, so bear with us.</p>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <DogImage />
    </div>
  </Layout>
)

export default IndexPage
