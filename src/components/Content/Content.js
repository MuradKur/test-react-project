import React from 'react';
import { Slides } from '../Slides/Slides';
import './style.scss';

export const Content = ({ slide }) => {
  return <Slides slide={slide} />;
}
