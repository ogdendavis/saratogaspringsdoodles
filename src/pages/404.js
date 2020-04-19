import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Ut-oh! We couldn't fetch that page for you. (Get it? Fetch?!)</p>
    <p>Think there should be something at this URL? <Link to="contact">Let us know!</Link></p>
  </Layout>
)

export default NotFoundPage
