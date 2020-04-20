import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => {
  const { markdownRemark } = data;
  
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML = {{
        __html: markdownRemark.html,
      }} />
    </Layout>
  );
}

export default Page

export const query = graphql`
query PageQuery($slug: String!) {
  markdownRemark(frontmatter: {
    slug: {
      eq: $slug
    }
  }) {
    frontmatter {
      slug
      title
    }
    html
  }
}
`;
