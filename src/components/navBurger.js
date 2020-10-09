import React, { useState } from 'react';
import styled from 'styled-components';

import NavMenu from './navMenu';

const NavWrapper = styled.div`
  position: relative;

  /* button targets Burger element */
  button {
    display: none;
    visibility: hidden;
  }

  @media only screen and (max-width: 820px) {
    position: fixed;
    top: 2rem;
    right: 1rem;

    button {
      display: flex;
      visibility: visible;
    }
  }
`;

const Burger = styled.button`
  position: absolute;
  top: -1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.75rem;
  height: 1.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.75rem;
    height: 0.25rem;
    background: orange;
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      background: ${({ open }) => (open ? '#987' : '')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
      background: ${({ open }) => (open ? '#987' : '')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      background: ${({ open }) => (open ? '#987' : '')};
    }
  }
`;

const NavBurger = ({ athome }) => {
  const [open, setOpen] = useState(false);

  return (
    <NavWrapper
      onClick={() => {
        setOpen(!open);
      }}
    >
      <Burger open={open}>
        <div />
        <div />
        <div />
      </Burger>
      <NavMenu open={open} athome={athome} />
    </NavWrapper>
  );
};

export default NavBurger;
