import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PrimaryPageTemplate from '../../templates/primary';

const CareAndFeedingPage = ({ location }) => {
  console.log(location);

  return (
    <Layout location={location}>
      <SEO title="Care and Feeding" />
      <PrimaryPageTemplate
        title="Care and Feeding"
        section="care"
        intro="<p>This page isn't specified in the outline, but probably makes sense tohave a landing page that links to nutrition, training, and enrichment pages (and probably also directly to affiliate links?)</p>"
      />
    </Layout>
  );
};

export default CareAndFeedingPage;
