import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const GalleryPage = ({ location }) => {
  console.log('Temp gallery page');

  return (
    <Layout location={location}>
      <SEO title="Puppy photo gallery" />
      <h1>Photo Gallery</h1>
      <p>This will be a photo gallery of puppies</p>
    </Layout>
  );
};

export default GalleryPage;
