import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CardContainer = styled.div`
  border-radius: 5px;
  width: 300px;
  width: 20%;
  min-width: 300px;
  margin: 1rem;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  box-shadow: 0px 2px 10px rgba(0, 64, 64, 0.15);

  a {
    color: white;
    text-decoration: none;
  }
`;

const CardHeader = styled.h2`
  text-shadow: 0px 2px 5px rgba(34, 34, 34, 0.7);
`;

const CardCopy = styled.p`
  text-shadow: 0px 2px 3px rgba(34, 34, 34, 0.7);
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 3em;
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
  img = false,
  style,
  title = '',
  copy = '',
  button = 'Do it!',
  to = '/',
  external = false,
}) => {
  const bgString =
    'linear-gradient(rgba(0, 64, 64, 0.4),rgba(0, 64, 64, 0.4)), ' +
    (img ? `center / cover no-repeat url(${img})` : '');
  console.log(to);
  return (
    <CardContainer
      style={{
        background: bgString,
        ...style,
      }}
    >
      {external ? (
        <a href={to} target="_blank" rel="noopener noreferrer">
          <CardHeader>{title}</CardHeader>
          <CardCopy>{copy}</CardCopy>
          <CardButton>{button}</CardButton>
        </a>
      ) : (
        <Link to={to}>
          <CardHeader>{title}</CardHeader>
          <CardCopy>{copy}</CardCopy>
          <CardButton>{button}</CardButton>
        </Link>
      )}
    </CardContainer>
  );
};

export default HomeCard;
