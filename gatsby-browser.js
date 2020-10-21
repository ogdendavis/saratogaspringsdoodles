import React from 'react';
import Theme from './src/components/theme';

export const wrapPageElement = ({ element, props }) => (
  <Theme {...props}>{element}</Theme>
);

export const onInitialClientRender = () => {
  const b = document.querySelector('body');
  window.setTimeout(() => {
    b.classList.add('visible');
  }, 250);
};
