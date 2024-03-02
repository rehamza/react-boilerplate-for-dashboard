'use client';
import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  settings: object | any; // Define the type of the settings object
  children?: React.ReactNode | any; // Allow any React nodes as children
}

export const SliderComponent: React.FC<SliderProps> = ({ settings, children }) => {
  return <Slider {...settings}>{children}</Slider>;
};
