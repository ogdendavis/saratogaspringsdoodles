import React from 'react';

import Layout from './layout';
import SEO from './seo';

const LitterPage = ({ location, pageContext }) => {
  // Content passed from gatsby-node.js lives in pageContext.content
  const { content } = pageContext;
  // This comment is to force Netlify to deploy a preview for this branch
  console.log(content);
  return (
    <Layout location={location}>
      <SEO title={content.frontmatter.title} />
      <h1>{content.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
  );
};

export default LitterPage;
