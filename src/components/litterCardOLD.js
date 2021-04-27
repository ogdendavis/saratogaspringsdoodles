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
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;

  @media only screen and (max-width: 855px) {
    width: 100%;
    flex-flow: row nowrap;
    justify-content: center;
  }
`;

const ParentImg = styled.img`
  object-fit: cover;
  object-position: 50% 20%;
  overflow: hidden;

  /* Max Height */
  ${props =>
    props.sireCount === 2
      ? 'max-height: 25vh; &:first-child {max-height: 45vh;}'
      : props.sireCount === 1
      ? 'max-height: 45vh;'
      : 'min-height: 100%;'}

  /* Border Radius */
  ${props =>
    props.sireCount === 0
      ? 'border-radius: 5px 0 0 5px'
      : props.sireCount === 1
      ? 'border-radius: 5px 0 0 0; &:last-child {border-radius: 0 0 0 5px;}'
      : '&:first-child {border-radius: 5px 0 0 0;} &:last-child {border-radius: 0 0 0 5px;}'};

  @media only screen and (max-width: 855px) {
    width: ${props =>
      props.sireCount === 2
        ? '33.3333%'
        : props.sireCount === 1
        ? '50%'
        : '100%'};
    height: 100%;
    max-height: 50vh;

    /* Border Radius */
    ${props =>
      props.sireCount === 0
        ? 'border-radius: 5px 5px 0 0'
        : props.sireCount === 1
        ? 'border-radius: 5px 0 0 0; &:last-child {border-radius: 0 5px 0 0;}'
        : '&:first-child {border-radius: 5px 0 0 0;} &:last-child {border-radius: 0 5px 0 0;}'};
  }
`;

const LitterInfo = styled.div`
  box-size: border-box;
  margin: auto;
  padding: 1rem;
  width: 65%;

  p:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 855px) {
    width: 95%;
  }
`;

const LitterFrontmatter = styled.ul`
  list-style: none;
  margin: 0 0 1em;

  li {
    margin: 0;
  }
`;

const ReservationList = styled.div`
  h3 {
    margin: 1rem 0 0.5rem;
  }

  ol {
    margin: 0 0 1em 1em;
  }

  li {
    margin: 0;
  }
`;

const CallToAction = styled.p`
  margin-top: 0.5rem;
`;

const LitterCard = ({ litter, dogImagePaths }) => {
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

  // Get link to sire / dam profile, if in-house
  // First construct the ids used in dogCard
  const sireId = litter.frontmatter.sire.sire_name.includes(' ')
    ? litter.frontmatter.sire.sire_name.split(' ')[0]
    : litter.frontmatter.sire.sire_name;
  const damId = litter.frontmatter.dam.dam_name.includes(' ')
    ? litter.frontmatter.dam.dam_name.split(' ')[0]
    : litter.frontmatter.dam.dam_name;
  const dubSireId = !isDual
    ? null
    : litter.frontmatter.dub_sire.dub_sire_name.includes(' ')
    ? litter.frontmatter.dub_sire.dub_sire_name.split(' ')[0]
    : litter.frontmatter.dub_sire.dub_sire_name;

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
  const dubSire = !isDual ? null : litter.frontmatter.dub_sire
      .dub_sire_in_house ? (
    <Link to={`/meet-the-dogs#${dubSireId}`}>
      {litter.frontmatter.dub_sire.dub_sire_name}
    </Link>
  ) : (
    litter.frontmatter.dub_sire.dub_sire_name
  );

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

  // Format reservations
  const reservations = litter.frontmatter['reservation_list']
    ? litter.frontmatter['reservation_list'].map((item, index) => (
        <li key={`${dam}-${sire}-${index}`}>{item}</li>
      ))
    : [];

  // Title text changes if dual sire litter
  const title = isDual ? (
    <h2>
      {dam} with {sire} and {dubSire}
    </h2>
  ) : (
    <h2>
      {dam} and {sire}
    </h2>
  );

  return (
    <LitterContainer>
      <ParentContainer>
        {damImage}
        {sireImage}
        {isDual && dubSireImage}
      </ParentContainer>
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
        <div dangerouslySetInnerHTML={{ __html: litter.html }} />
        {litter.frontmatter['reservation_list'] && (
          <ReservationList>
            <h3>Reservation List</h3>
            <ol>{reservations}</ol>
          </ReservationList>
        )}
        <CallToAction>
          Interested in a puppy from this litter? Fill out our{' '}
          <Link to="/puppies/application">application</Link>.
        </CallToAction>
      </LitterInfo>
    </LitterContainer>
  );
};

export default LitterCard;