import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ParentsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 50vh;
  min-height: 300px;
`;

const OneParent = styled.div`
  height: 100%;
`;

const ParentImage = styled.img`
  height: 90%;
`;

const LitterPage = ({ location, pageContext }) => {
  // Content passed from gatsby-node.js lives in pageContext.content
  const { content } = pageContext;

  return (
    <Layout location={location}>
      <SEO title={content.frontmatter.title} />
      <h1>{content.frontmatter.title}</h1>
      <Parents
        dam={content.frontmatter.dam}
        sire={content.frontmatter.sire}
        dub_sire={content.frontmatter.dub_sire}
      />
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Layout>
  );
};

// Helper components only for this page
const Parents = ({ dam, sire, dub_sire }) => {
  // Put parents in array for easy looping & counting
  // Only include parents with image
  const parents = [dam, sire, dub_sire].filter(dog => {
    // strip out any that are null
    if (!dog) return null;
    // Get image key
    const imageKey = Object.keys(dog).find(k => k.includes('_image'));
    // Make sure that there's an image!
    return dog[imageKey] ? true : false;
  });

  const parentsRendered = parents.map(dog => {
    // Get values from object
    const image = dog[Object.keys(dog).find(k => k.includes('_image'))];
    const name = dog[Object.keys(dog).find(k => k.includes('_name'))];
    const inHouse = dog[Object.keys(dog).find(k => k.includes('_in_house'))];

    // Generate id that matches that used on dogs page
    const inHouseId = name.includes(' ') ? name.split(' ')[0] : name;

    // Render styled parent name with or without link
    const styledName = inHouse ? (
      <Link to={`/meet-the-dogs#${inHouseId}`}>{name}</Link>
    ) : (
      <span>{name}</span>
    );

    return (
      <OneParent>
        <ParentImage key={`pi-${name}`} src={image} alt={name} />
        <div>{styledName}</div>
      </OneParent>
    );
  });
  console.log(parents);

  return <ParentsContainer>{parentsRendered}</ParentsContainer>;
};

export default LitterPage;
