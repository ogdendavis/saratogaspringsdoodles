import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ParentsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;

  a,
  .parent__name {
    color: black;
    font-family: Dancing Script, cursive;
    font-size: 2rem;
    position: relative;
    text-decoration: none;
    transition: all 0.4s ease-in-out;
  }
  a:hover {
    color: orange;
  }
  a::before {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 0px;
    height: 2px;
    margin: 1px 0 0;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    background-color: ${props => props.theme.linkColorHover};
  }
  a:hover::before {
    width: 100%;
    opacity: 1;
    left: 0;
  }
`;

const OneParent = styled.div`
  margin: 0 2rem 1rem;
`;

const ParentImage = styled.img`
  border-radius: ${props => props.theme.borderRadius};
  height: 20rem;
  object-fit: cover;
  width: 15rem;
`;

const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 1rem auto;
  max-width: 50rem;
`;

const Description = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const StatsContainer = styled.div`
  text-align: center;
`;

const StatsLabel = styled.span`
  font-weight: 700;
`;

const ResListContainer = styled.div`
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

const PuppyGallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const PuppyPhoto = styled.img`
  border-radius: ${props => props.theme.borderRadius};
  height: 20rem;
  margin: 0.5rem;
  object-fit: cover;
  width: 15rem;

  &:hover {
    cursor: pointer;
  }
`;

const ModalOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(20, 20, 20, 0.85), rgba(20, 20, 20, 0.85));
  z-index: 999;
`;

const ModalInner = styled.div`
  padding: 3rem;
`;

const ModalPhoto = styled.img`
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  max-height: 90vh;
  max-width: 90vw;
`;

const LitterPage = ({ location, pageContext }) => {
  // Content passed from gatsby-node.js lives in pageContext.content
  const { content } = pageContext;

  // State to control modal open/close
  const [modalOpen, setModalOpen] = useState(false);

  // State to photo currently displayed in modal
  const [modalPhoto, setModalPhoto] = useState({ image: '', caption: '' });

  // Modal closer
  const closeModal = () => {
    setModalOpen(false);
  };

  // Modal opener
  const openModal = photo => {
    setModalPhoto({ image: photo.image, caption: photo.caption });
    setModalOpen(true);
  };

  return (
    <Layout location={location}>
      <SEO title={content.frontmatter.title} />
      <h1>{content.frontmatter.title}</h1>
      <Parents
        dam={content.frontmatter.dam}
        sire={content.frontmatter.sire}
        dub_sire={content.frontmatter.dub_sire}
      />
      <InfoContainer>
        <Description dangerouslySetInnerHTML={{ __html: content.html }} />
        <Stats
          expectedDate={content.frontmatter.date}
          expectedColors={content.frontmatter.colors}
          size={content.frontmatter.size}
          count={content.frontmatter.count}
        />
        <ReservationList list={content.frontmatter.reservation_list} />
      </InfoContainer>
      <Photos photos={content.frontmatter.photos} openModal={openModal} />
      {modalOpen && <Modal closer={closeModal} photo={modalPhoto} />}
    </Layout>
  );
};

// Helper components only for this page
const Parents = ({ dam, sire, dub_sire }) => {
  // Put parents in array for easy looping & counting
  // Only include parents with image
  const parents = [dam, sire, dub_sire].filter(dog => {
    // strip out any that are null
    if (!dog) return null;
    // Get image key
    const imageKey = Object.keys(dog).find(k => k.includes('_image'));
    // Make sure that there's an image!
    return dog[imageKey] ? true : false;
  });

  const parentsRendered = parents.map(dog => {
    // Get values from object
    const image = dog[Object.keys(dog).find(k => k.includes('_image'))];
    const name = dog[Object.keys(dog).find(k => k.includes('_name'))];
    const inHouse = dog[Object.keys(dog).find(k => k.includes('_in_house'))];

    // Generate id that matches that used on dogs page
    const inHouseId = name.includes(' ') ? name.split(' ')[0] : name;

    // Render styled parent name with or without link
    const styledName = inHouse ? (
      <Link to={`/meet-the-dogs#${inHouseId}`}>{name}</Link>
    ) : (
      <span className="parent__name">{name}</span>
    );

    return (
      <OneParent key={`op-${name}`}>
        <ParentImage src={image} alt={name} />
        <div>{styledName}</div>
      </OneParent>
    );
  });

  return <ParentsContainer>{parentsRendered}</ParentsContainer>;
};

const Photos = ({ photos, openModal }) => {
  // Early check for if photos exist, return null if not
  if (!photos || Object.keys(photos).length === 0) return null;

  // Generate individual images
  const pics = photos.map(p => (
    <PuppyPhoto
      key={p.image}
      src={p.image}
      alt={p.caption}
      onClick={() => {
        openModal(p);
      }}
    />
  ));

  // return gallery of images
  return <PuppyGallery>{pics}</PuppyGallery>;
};

const Stats = ({ expectedDate, expectedColors, size, count }) => {
  return (
    <StatsContainer>
      {expectedDate &&
        expectedDate.length > 1 &&
        expectedDate !== 'Invalid date' && (
          <div>
            <StatsLabel>Expected Date:</StatsLabel> {expectedDate}
          </div>
        )}
      {expectedColors && expectedColors.length > 1 && (
        <div>
          <StatsLabel>Expected Colors:</StatsLabel> {expectedColors}
        </div>
      )}
      {size &&
        Object.hasOwnProperty.call(size, 'min') &&
        Object.hasOwnProperty.call(size, 'max') &&
        size.min < size.max && (
          <div>
            <StatsLabel>Adult Size:</StatsLabel> {size.min} - {size.max} lbs
          </div>
        )}
      {count && <div>Expecting {count} puppies</div>}
    </StatsContainer>
  );
};

const ReservationList = ({ list }) => {
  // Early check for if list exists, don't render if not
  if (!list) return null;

  // Generate li's with reservation info
  const reservations = list.map((item, index) => (
    <li key={`reslist-${index}`}>{item}</li>
  ));

  // Return section containing reservation list
  return (
    <ResListContainer>
      <h3>Reservation List</h3>
      <ol>{reservations}</ol>
    </ResListContainer>
  );
};

const Modal = ({ closer, photo }) => {
  return (
    <ModalOuter onClick={closer}>
      <ModalInner>
        <ModalPhoto src={photo.image} alt={photo.caption} />
      </ModalInner>
    </ModalOuter>
  );
};

export default LitterPage;
