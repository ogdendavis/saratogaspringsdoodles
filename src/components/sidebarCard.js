import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const CardContainer = styled.section`
  border-radius: 5px;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  box-shadow: 0px 2px 10px rgba(0, 64, 64, 0.15);
  margin-bottom: 1em;

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
  font-weight: 600;
  margin-bottom: 3em;
`;

const CardButton = styled.span`
  background: #fff;
  color: ${props => props.theme.linkColorHover};
  border: 3px solid ${props => props.theme.linkColorHover};
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.2em;
  padding: 0.5em 1em;

  transition: all 0.3s ease-in-out;

  :hover {
    background: ${props => props.theme.linkColorHover};
    color: #fff;
  }
`;

const CareCard = ({
  img = false,
  style,
  title = '',
  copy,
  button = 'Click Here',
  to = '/',
}) => {
  const bgString =
    'linear-gradient(rgba(0, 64, 64, 0.4),rgba(0, 64, 64, 0.4)), ' +
    (img ? `center / cover no-repeat url(${img})` : '');
  const useCopy = copy ? copy : `Learn more about ${title.toLowerCase()}`;

  return (
    <CardContainer
      style={{
        background: bgString,
        ...style,
      }}
    >
      <Link to={to}>
        <CardHeader>{title}</CardHeader>
        <CardCopy>{useCopy}</CardCopy>
        <CardButton>{button}</CardButton>
      </Link>
    </CardContainer>
  );
};

export default CareCard;
