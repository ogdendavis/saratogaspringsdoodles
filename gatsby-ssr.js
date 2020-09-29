import React from 'react';
import Theme from './src/components/theme';

export const wrapPageElement = ({ element, props }) => (
  <Theme {...props}>{element}</Theme>
);
