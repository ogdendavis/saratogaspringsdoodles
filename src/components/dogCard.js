import React from 'react';
import styled from 'styled-components';

const DogContainer = styled.section`
  margin: 0 auto 2rem;
  box-shadow: 0px 2px 10px rgba(0, 128, 128, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
`;

// Eventually make this a slideshow?
const DogImageWrapper = styled.div`
  width: 33%;
  min-width: 300px;
  img {
    display: block;
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
  }
`;

const DogInfo = styled.div`
  width: 67%;
  padding: 1rem;

  @media only screen and (max-width: 963px) {
    width: 90%;
  }

  h2 {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0 0 1rem;
    display: flex;
    flex-flow: row wrap;
    padding: 0 2rem;
    justify-content: center;

    @media only screen and (max-width: 400px) {
      flex-direction: column;
      align-items: center;
    }

    li {
      display: inline-block;
      margin: 0 1rem;
    }
  }

  p {
    font-style: italic;
  }
`;

const DogCard = ({ dog }) => {
  // Calculate age from birthday
  const now = new Date();
  const bday = new Date(dog.birthdate);
  const ms = Math.floor(now - bday);
  // 31557600000 milliseconds in a year
  const years = Math.floor(ms / 31557600000);
  // 2629800000 milliseconds in a month
  const months = Math.floor(ms / 2629800000);
  dog.displayAge =
    years > 0
      ? `${years} year${years > 1 ? 's' : ''}`
      : `${months} month${months > 1 ? 's' : ''}`;

  return (
    <DogContainer id={dog.title}>
      <DogImageWrapper>
        <img src={dog.image} alt={dog.title} />
      </DogImageWrapper>
      <DogInfo>
        <h2>{dog.title}</h2>
        <ul>
          <li>{dog.breed}</li>
          <li>{dog.color}</li>
          <li>{dog.sex === 'M' ? 'Male' : 'Female'}</li>
          <li>{dog.displayAge}</li>
        </ul>
        <p>{dog.bio}</p>
      </DogInfo>
    </DogContainer>
  );
};

export default DogCard;
