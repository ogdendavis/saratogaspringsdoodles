import React from 'react';
import styled from 'styled-components';

const DogContainer = styled.section`
  margin: 0 auto 2rem;
  box-shadow: 0px 2px 10px rgba(0, 64, 64, 0.15);
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  background: #fff;
`;

// Eventually make this a slideshow?
const DogImageWrapper = styled.div`
  width: 35%;
  img {
    display: block;
    border-radius: 5px;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 855px) {
    width: auto;
    max-height: 40vh;

    img {
      width: 100%;
    }
  }
`;

const DogInfo = styled.div`
  width: 65%;
  padding: 1rem;

  @media only screen and (max-width: 855px) {
    width: 95%;
  }

  h2.dogTitle {
    text-align: center;
  }

  ul.dogInfo {
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
      margin: 0 0.75em;
      font-style: italic;
    }
  }
`;

const DogCard = ({ dog }) => {
  console.log(dog);
  // Calculate age from birthday
  const now = new Date();
  const bday = new Date(dog.frontmatter.birthdate);
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
    <DogContainer id={dog.frontmatter.title}>
      <DogImageWrapper>
        <img src={dog.frontmatter.image} alt={dog.frontmatter.title} />
      </DogImageWrapper>
      <DogInfo>
        <h2 className="dogTitle">{dog.frontmatter.title}</h2>
        <ul className="dogInfo">
          <li>{dog.frontmatter.breed}</li>
          <li>{dog.frontmatter.color}</li>
          <li>{dog.frontmatter.gender === 'm' ? 'Male' : 'Female'}</li>
          <li>{dog.displayAge}</li>
        </ul>
        <div dangerouslySetInnerHTML={{ __html: dog.html }} />
      </DogInfo>
    </DogContainer>
  );
};

export default DogCard;
