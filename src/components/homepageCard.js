import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const CardContainer = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  margin: 1rem;
  text-align: center;
  box-shadow: 0px 2px 10px rgba(0, 64, 64, 0.25);

  a {
    color: white;
    text-decoration: none;
  }
`;

const CardInnards = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CardImage = styled(Img)`
  border-radius: ${props => props.theme.borderRadius} 0 0
    ${props => props.theme.borderRadius};
  width: 40%;
  object-fit: cover;

  @media only screen and (max-width: 799px) {
    border-radius: ${props => props.theme.borderRadius}
      ${props => props.theme.borderRadius} 0 0;
    width: 100%;
    max-height: 25vh;
  }

  @media only screen and (max-width: 400px) {
    max-height: 35vh;
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  color: ${props => props.theme.offBlack};
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 799px) {
    width: 100%;
  }
`;

const CardHeader = styled.h2`
  font-size: 3em;
`;

const CardCopy = styled.div`
  font-weight: 500;
  margin-bottom: 2em;
`;

const CardButton = styled.span`
  background: #f8f8f8;
  color: orange;
  border: 3px solid orange;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.2em;
  padding: 0.5em 1em;

  transition: all 0.3s ease-in-out;

  :hover {
    background: orange;
    color: white;
  }
`;

const HomeCard = ({
  img,
  title = '',
  copy = '',
  button = 'Do it!',
  to = '/',
  external = false,
}) => {
  const innards = (
    <CardInnards>
      <CardImage fluid={img} />
      <CardContent>
        <CardHeader>{title}</CardHeader>
        <CardCopy dangerouslySetInnerHTML={{ __html: copy }} />
        <CardButton>{button}</CardButton>
      </CardContent>
    </CardInnards>
  );

  return (
    <CardContainer>
      {external ? (
        <a href={to} target="_blank" rel="noopener noreferrer">
          {innards}
        </a>
      ) : (
        <Link to={to}>{innards}</Link>
      )}
    </CardContainer>
  );
};

export default HomeCard;
