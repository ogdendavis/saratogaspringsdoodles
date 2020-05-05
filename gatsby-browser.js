import React from 'react';
import Transition from './src/components/transition';

export const wrapPageElement = ({ element, props }) => (
  <Transition {...props}>{element}</Transition>
);
