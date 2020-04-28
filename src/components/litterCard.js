import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import dogFace from '../images/dog5.png';

const LitterContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;

  margin: 0 auto 2rem;
  box-shadow: 0px 2px 10px rgba(0, 128, 128, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.25em;

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
  width: 25%;
  min-width: 250px;

  caption {
    display: block;
    margin: auto;
    font-size: 0.75rem;
    font-style: italic;
  }
`;

const ParentImg = styled.img`
  display: block;
  width: 100%;
  min-height: 40%;
  max-height: 200px;
  object-fit: cover;

  /* Border for 2nd image */
  border-radius: 0 0 5px 5px;

  &:first-child {
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #888;
  }
`;

const LitterInfo = styled.div`
  margin: auto;
  ul {
    list-style: none;
    margin: 0 0 2em;
  }
`;

const LitterCard = ({ litter, dogImagePaths }) => {
  // Get link to sire / dam profile, if in-house
  const sire = litter.sire.sire_in_house ? (
    <Link to={`/dogs#${litter.sire.sire_name}`}>{litter.sire.sire_name}</Link>
  ) : (
    litter.sire.sire_name
  );
  const dam = litter.dam.dam_in_house ? (
    <Link to={`/dogs#${litter.dam.dam_name}`}>{litter.dam.dam_name}</Link>
  ) : (
    litter.dam.dam_name
  );

  // Get path to sire / dam image: attached to litter, attached to in-house dog, or default img
  const damImage = litter.dam.dam_image ? (
    <ParentImg src={litter.dam.dam_image} alt={litter.dam.dam_name} />
  ) : litter.dam.dam_in_house ? (
    <ParentImg
      src={dogImagePaths[litter.dam.dam_name]}
      alt={litter.dam.dam_name}
    />
  ) : (
    <ParentImg src={dogFace} alt="dog face" />
  );
  const sireImage = litter.sire.sire_image ? (
    <ParentImg src={litter.sire.sire_image} alt={litter.dam.dam_name} />
  ) : litter.sire.sire_in_house ? (
    <ParentImg
      src={dogImagePaths[litter.sire.sire_name]}
      alt={litter.sire.sire_name}
    />
  ) : (
    <ParentImg src={dogFace} alt="dog face" />
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
          <li>
            <b>Expected:</b> {litter.date}
          </li>
          {litter.count && (
            <li>
              <b>Puppy count:</b> {litter.count}
            </li>
          )}
          {litter.size && (
            <li>
              <b>Full-grown size:</b> {litter.size.min} to {litter.size.max}{' '}
              pounds
            </li>
          )}
          {litter.colors && (
            <li>
              <b>Possible colors: </b>
              {litter.colors}
            </li>
          )}
        </ul>
        <p>
          <Link to="/contact">Contact us</Link> about this litter
        </p>
      </LitterInfo>
    </LitterContainer>
  );
};

export default LitterCard;
