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
  display: flex;

  img {
    display: block;
    border-radius: 5px 0 0 5px;
    object-fit: cover;
  }

  @media only screen and (max-width: 855px) {
    width: auto;
    max-height: 40vh;

    img {
      border-radius: 5px 5px 0 0;
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
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  ul.dogInfo {
    list-style: none;
    margin: 0 0 1rem;

    @media only screen and (max-width: 400px) {
      flex-direction: column;
      align-items: center;
    }

    li {
      margin: 0;
      font-style: italic;
    }
  }
`;

const DogCard = ({ dog }) => {
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
        </ul>
        <div dangerouslySetInnerHTML={{ __html: dog.html }} />
      </DogInfo>
    </DogContainer>
  );
};

export default DogCard;
