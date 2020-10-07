import React from 'react';
import styled from 'styled-components';

import SidebarCard from './sidebarCard';

// Images for cards
import i1 from '../../static/img/puppy-blanket.jpg';
import i2 from '../../static/img/lolipop-2.jpg';
import i3 from '../../static/img/puppy-in-hand-2.jpg';

const SidebarContainer = styled.aside`
  width: 280px;

  @media only screen and (max-width: 1130px) {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;

const puppyContent = [
  {
    img: i1,
    to: '/puppies/application',
    title: 'Join the Family',
    copy:
      'Ready to add a furry friend to your family? Apply online to be matched with a puppy.',
    button: 'Go to Application',
  },
  {
    img: i3,
    to: '/puppies/gallery',
    title: 'Look at the puppies!',
    copy: 'Our puppies are super cute. You should see them.',
    button: 'Click for Cuteness',
  },
  {
    img: i2,
    to: '/puppies/guardians',
    title: 'Guardian Program',
    copy:
      'All of our breeding dogs are also much-loved pets, living in guardian homes.',
    button: 'Learn More',
  },
  {
    img: i1,
    to: '/puppies/policies-and-pricing',
    title: 'Policies & Pricing',
    copy:
      "We want you and your puppy to be happy and healthy together, so we have policies and procedures in place to make sure you're matched with the best companion.",
    button: 'View Our Policies',
  },
];

const mamaContent = [
  {
    img: i2,
    to: '/meet-our-mama/genetic-testing',
    title: 'Genetic Testing',
    copy:
      'We test all of our breeding dogs for health markers to ensure happy, healthy puppies.',
    button: 'Learn More',
  },
  {
    img: i1,
    to: '/puppies/application',
    title: 'Join the Family',
    copy:
      'Ready to add a furry friend to your family? Apply online to be matched with a puppy.',
    button: 'Go to Application',
  },
  {
    img: i3,
    to: '/puppies/gallery',
    title: 'Look at the puppies!',
    copy: 'Our puppies are super cute. You should see them.',
    button: 'Click for Cuteness',
  },
];

const careContent = [
  {
    img: i1,
    to: '/care-and-feeding/nutrition',
    title: 'Eating Well',
    copy: 'We feed and recommend pawTree products.',
    button: 'Learn More',
  },
  {
    img: i2,
    to: '/care-and-feeding/enrichment',
    title: 'Staying Active',
    copy:
      'Your puppy needs mental and physical stimulation in order to be his or her best.',
    button: 'Learn More',
  },
  {
    img: i3,
    to: '/care-and-feeding/training',
    title: 'Lifelong Learning',
    copy:
      'Training your dog is an enjoyable bonding activity, and starting as a puppy makes for a calm, happy adult',
    button: 'Learn More',
  },
  {
    img: i1,
    to: '/puppies/application',
    title: 'Join the Family',
    copy:
      'Ready to add a furry friend to your family? Apply online to be matched with a puppy.',
    button: 'Go to Application',
  },
];

const Sidebar = ({ section }) => {
  const useContent =
    section === 'puppies'
      ? puppyContent
      : section === 'mama'
      ? mamaContent
      : section === 'care'
      ? careContent
      : puppyContent;

  const cards = useContent.map(item => (
    <SidebarCard
      to={item.to}
      img={item.img}
      title={item.title}
      copy={item.copy}
      button={item.button}
      key={`sidebar-${section}-${item.to}`}
    />
  ));
  return <SidebarContainer>{cards}</SidebarContainer>;
};

export default Sidebar;
