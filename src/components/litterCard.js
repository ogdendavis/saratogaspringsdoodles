import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/saratogaspringsdoodles.webp';

const LitterContainer = styled(Link)`
  background: #fff;
  box-shadow: 0px 2px 10px rgba(0, 64, 64, 0.15);
  box-sizing: border-box;
  border-radius: 5px;
  color: hsla(0, 0%, 0%, 0.8);
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto 2rem;
  overflow: hidden;
  text-decoration: none;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 2px 15px orange;

    span {
      background: orange;
      color: white;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-flow: row wrap;
    justify-content: center;
  }
`;

const ParentImg = styled.img`
  object-fit: cover;
  object-position: 50% 20%;
  overflow: hidden;
  width: 12rem;

  @media only screen and (max-width: 768px) {
    height: 40vh;
    width: 50%;
  }
`;

const LitterInfo = styled.div`
  flex-grow: 1;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const LitterFrontmatter = styled.ul`
  list-style: none;
  margin: 0 0 1em;

  li {
    margin: 0;
  }
`;

const CardButton = styled.span`
  background: #fff;
  border: 3px solid orange;
  border-radius: 5px;
  color: orange;
  display: inline-block;
  font-weight: 700;
  font-size: 1.2em;
  margin-top: 1rem;
  padding: 0.5em 1em;
  transition: all 0.5s ease;
`;

const LitterCard = ({ litter, dogImagePaths }) => {
  // Create slug for link to litter page, same as in gatsby-node
  const slug =
    '/litters/' +
    `${litter.frontmatter.title} ${litter.frontmatter.date}`
      .toLowerCase() // convert to all lowercase
      .replace(/[^A-Za-z0-9 ]/g, '') // strip non-word characters
      .replace('invalid date', 'coming soon') // remove invalid date from tbd litters
      .replace(/ +(?= )/g, '') // Strip out multiple spaces
      .split(' ') // create array of words
      .join('-'); // join words with dashes

  // Check for presence of sire and dual sire -- affects text & styling
  const hasSire = !(
    !litter.frontmatter.sire['sire_image'] &&
    litter.frontmatter.sire['sire_name'] === 'TBD'
  );
  const isDual =
    litter.frontmatter.dub_sire && litter.frontmatter.dub_sire.dub_sire_name
      ? true
      : false;
  const sireCount = isDual && hasSire ? 2 : hasSire ? 1 : 0;

  // Get path to sire / dam image: attached to litter, attached to in-house dog, or default img
  const damImage = litter.frontmatter.dam.dam_image ? (
    <ParentImg
      sireCount={sireCount}
      src={litter.frontmatter.dam.dam_image}
      alt={litter.frontmatter.dam.dam_name}
    />
  ) : litter.frontmatter.dam.dam_in_house ? (
    <ParentImg
      sireCount={sireCount}
      src={dogImagePaths[litter.frontmatter.dam.dam_name]}
      alt={litter.frontmatter.dam.dam_name}
    />
  ) : (
    <ParentImg sireCount={sireCount} src={logo} alt="dog face" />
  );
  const sireImage = !hasSire ? null : litter.frontmatter.sire.sire_image ? (
    <ParentImg
      sireCount={sireCount}
      src={litter.frontmatter.sire.sire_image}
      alt={litter.frontmatter.sire.sire_name}
    />
  ) : litter.frontmatter.sire.sire_in_house ? (
    <ParentImg
      sireCount={sireCount}
      src={dogImagePaths[litter.frontmatter.sire.sire_name]}
      alt={litter.frontmatter.sire.sire_name}
    />
  ) : (
    <ParentImg sireCount={sireCount} src={logo} alt="dog face" />
  );
  const dubSireImage = !isDual ? null : litter.frontmatter.dub_sire
      .dub_sire_image ? (
    <ParentImg
      sireCount={sireCount}
      src={litter.frontmatter.dub_sire.dub_sire_image}
      alt={litter.frontmatter.dub_sire.dub_sire_name}
    />
  ) : litter.frontmatter.dub_sire.dub_sire_in_house ? (
    <ParentImg
      sireCount={sireCount}
      src={dogImagePaths[litter.frontmatter.dub_sire.dub_sire_name]}
      alt={litter.frontmatter.dub_sire.dub_sire_name}
    />
  ) : (
    <ParentImg sireCount={sireCount} src={logo} alt="dog face" />
  );

  // Title text changes if dual sire litter
  const title = isDual ? (
    <h2>
      {litter.frontmatter.dam.dam_name} with {litter.frontmatter.sire.sire_name}{' '}
      and {litter.frontmatter.dub_sire.dub_sire_name}
    </h2>
  ) : (
    <h2>
      {litter.frontmatter.dam.dam_name} and {litter.frontmatter.sire.sire_name}
    </h2>
  );

  return (
    <LitterContainer to={slug}>
      {damImage}
      {sireImage}
      {isDual && dubSireImage}
      <LitterInfo>
        {title}
        <LitterFrontmatter>
          {litter.frontmatter.date.length > 1 &&
            litter.frontmatter.date !== 'Invalid date' && (
              <li>
                <b>Expected:</b> {litter.frontmatter.date}
              </li>
            )}
          {litter.frontmatter.count > 0 && (
            <li>
              <b>Puppy count:</b> {litter.frontmatter.count}
            </li>
          )}
          {litter.frontmatter.size.min < litter.frontmatter.size.max && (
            <li>
              <b>Full-grown size:</b> {litter.frontmatter.size.min} to{' '}
              {litter.frontmatter.size.max} pounds
            </li>
          )}
          {litter.frontmatter.colors.length > 1 && (
            <li>
              <b>Possible colors: </b>
              {litter.frontmatter.colors}
            </li>
          )}
        </LitterFrontmatter>
        <CardButton>Learn More</CardButton>
      </LitterInfo>
    </LitterContainer>
  );
};

export default LitterCard;
