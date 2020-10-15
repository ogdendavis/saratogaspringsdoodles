import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../images/saratogaspringsdoodles.webp';

const LitterContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;

  margin: 0 auto 2rem;
  box-shadow: 0px 2px 10px rgba(0, 64, 64, 0.15);
  border-radius: 5px;
  box-sizing: border-box;
  background: #fff;

  h2 {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: teal;
    transition: all 0.3s ease-in-out;
    position: relative;
  }
  a:hover {
    color: orange;
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -3px;
    width: 0px;
    height: 3px;
    margin: 3px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background-color: orange;
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }
`;

const ParentContainer = styled.div`
  width: 35%;
  min-width: 280px;

  @media only screen and (max-width: 855px) {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }
`;

const ParentImg = styled.img`
  display: block;
  width: 100%;
  min-height: 40%;
  max-height: 60%;
  object-fit: cover;

  /* Border for 2nd image */
  border-radius: 0 0 5px 5px;

  &:first-child {
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #888;
  }

  @media only screen and (max-width: 855px) {
    width: 50%;
    max-height: 100%;
    /* 2nd image */
    border-radius: 0 5px 5px 0;
    &:first-child {
      border-radius: 5px 0 0 5px;
      border-bottom: 0;
    }
  }
`;

const LitterInfo = styled.div`
  box-size: border-box;
  margin: auto;
  padding: 1rem;
  width: 65%;

  ul {
    list-style: none;
    margin: 0 0 2em;
  }

  li {
    margin: 0;
  }

  @media only screen and (max-width: 855px) {
    width: 95%;
  }
`;

const LitterCard = ({ litter, dogImagePaths }) => {
  // Get link to sire / dam profile, if in-house
  // First construct the ids used in dogCard
  const sireId = litter.frontmatter.sire.sire_name.includes(' ')
    ? litter.frontmatter.sire.sire_name.split(' ')[0]
    : litter.frontmatter.sire.sire_name;
  const damId = litter.frontmatter.dam.dam_name.includes(' ')
    ? litter.frontmatter.dam.dam_name.split(' ')[0]
    : litter.frontmatter.dam.dam_name;

  const sire = litter.frontmatter.sire.sire_in_house ? (
    <Link to={`/meet-the-dogs#${sireId}`}>
      {litter.frontmatter.sire.sire_name}
    </Link>
  ) : (
    litter.frontmatter.sire.sire_name
  );
  const dam = litter.frontmatter.dam.dam_in_house ? (
    <Link to={`/meet-the-dogs#${damId}`}>
      {litter.frontmatter.dam.dam_name}
    </Link>
  ) : (
    litter.frontmatter.dam.dam_name
  );

  // Get path to sire / dam image: attached to litter, attached to in-house dog, or default img
  const damImage = litter.frontmatter.dam.dam_image ? (
    <ParentImg
      src={litter.frontmatter.dam.dam_image}
      alt={litter.frontmatter.dam.dam_name}
    />
  ) : litter.frontmatter.dam.dam_in_house ? (
    <ParentImg
      src={dogImagePaths[litter.frontmatter.dam.dam_name]}
      alt={litter.frontmatter.dam.dam_name}
    />
  ) : (
    <ParentImg src={logo} alt="dog face" />
  );
  const sireImage = litter.frontmatter.sire.sire_image ? (
    <ParentImg
      src={litter.frontmatter.sire.sire_image}
      alt={litter.frontmatter.dam.dam_name}
    />
  ) : litter.frontmatter.sire.sire_in_house ? (
    <ParentImg
      src={dogImagePaths[litter.frontmatter.sire.sire_name]}
      alt={litter.frontmatter.sire.sire_name}
    />
  ) : (
    <ParentImg src={logo} alt="dog face" />
  );

  return (
    <LitterContainer>
      <ParentContainer>
        {damImage}
        {sireImage}
      </ParentContainer>
      <LitterInfo>
        <h2>
          {sire} and {dam}
        </h2>
        <ul>
          {litter.frontmatter.date.length > 1 && (
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
        </ul>
        <div dangerouslySetInnerHTML={{ __html: litter.html }} />
        <p>
          <Link to="/contact">Contact us</Link> about this litter
        </p>
      </LitterInfo>
    </LitterContainer>
  );
};

export default LitterCard;
