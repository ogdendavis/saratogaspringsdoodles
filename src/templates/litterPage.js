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

const PuppyPhoto = styled.div`
  height: 20rem;
  margin: 0.5rem;
  position: relative;
  width: 15rem;

  &:hover {
    cursor: pointer;
  }

  img {
    border-radius: ${props => props.theme.borderRadius};
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  span {
    background: linear-gradient(rgba(20, 20, 20, 0.85), rgba(20, 20, 20, 0.85));
    border-radius: 0 0 5px 5px;
    color: #fff;
    font-weight: 600;
    padding: 0.25rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
`;

const ModalOuter = styled.div`
  display: flex;
  flex-flow: column nowrap;
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
  position: relative;
  height: 85vh;
  width: 85vw;
`;

const ModalCloser = styled.div`
  background: white;
  border-radius: 50%;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 2rem;
  height: 2rem;
`;

const ModalPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;

  img {
    border-radius: ${props => props.theme.borderRadius};
    display: block;
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
  span {
    background: linear-gradient(rgba(20, 20, 20, 0.85), rgba(20, 20, 20, 0.85));
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 auto;
    padding: 0.5rem 1.5rem;
  }
`;

const ModalArrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

const ModalArrow = styled.img`
  cursor: pointer;
  margin: 0 3rem;
  width: 2.5rem;
`;

const LitterPage = ({ location, pageContext }) => {
  // Content passed from gatsby-node.js lives in pageContext.content
  const { content } = pageContext;

  // We're doing a lot with puppy photos, so give easy access
  const photos = content.frontmatter.photos;

  // State to control modal open/close
  const [modalOpen, setModalOpen] = useState(false);

  // State to set index of photo in photos to display in modal
  const [modalPhotoIndex, setModalPhotoIndex] = useState(0);

  // Modal closer
  const closeModal = () => {
    setModalOpen(false);
  };

  // Modal opener
  const openModal = index => {
    // Set index to use for photo in modal
    setModalPhotoIndex(index);
    // Open the modal
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
        />
        <ReservationList list={content.frontmatter.reservation_list} />
      </InfoContainer>
      <Photos photos={photos} openModal={openModal} />
      {modalOpen && (
        <Modal
          closer={closeModal}
          photos={photos}
          index={modalPhotoIndex}
          setIndex={setModalPhotoIndex}
        />
      )}
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
  const pics = photos.map((p, i) => (
    <PuppyPhoto
      key={p.image}
      onClick={() => {
        openModal(i);
      }}
    >
      <img src={p.image} alt={p.caption} />
      {p.caption && <span>{p.caption}</span>}
    </PuppyPhoto>
  ));

  // return gallery of images
  return <PuppyGallery>{pics}</PuppyGallery>;
};

const Stats = ({ expectedDate, expectedColors, size }) => {
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

const Modal = ({ closer, photos, index, setIndex }) => {
  // Grab photo by index
  const photo = photos[index];

  // Get number of photos
  const numPhotos = photos.length;

  // Function to go to next photo
  const incrementIndex = () => {
    // Either go to next photo or back to start
    setIndex(index + 1 === numPhotos ? 0 : index + 1);
  };

  // Function to go to previous photo
  const decrementIndex = () => {
    // Either go to previous photo or to end
    setIndex(index === 0 ? numPhotos - 1 : index - 1);
  };

  return (
    <ModalOuter onClick={closer}>
      <ModalInner>
        <ModalCloser onClick={closer}>&times;</ModalCloser>
        <ModalPhoto>
          <img src={photo.image} alt={photo.caption} />
          {photo.caption && (
            <div>
              <span>{photo.caption}</span>
            </div>
          )}
        </ModalPhoto>
      </ModalInner>
      <ModalArrows>
        <ModalArrow
          src="/icons/chevron-left.png"
          alt="<"
          onClick={e => {
            e.stopPropagation();
            decrementIndex();
          }}
        />
        <ModalArrow
          src="/icons/chevron-right.png"
          alt=">"
          onClick={e => {
            e.stopPropagation();
            incrementIndex();
          }}
        />
      </ModalArrows>
    </ModalOuter>
  );
};

export default LitterPage;
