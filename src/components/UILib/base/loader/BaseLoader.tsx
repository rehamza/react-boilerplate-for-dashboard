'use client';
import Lottie from 'lottie-react';
import { BoxComponent } from '../box/Box';
// const LoaderAnimation = require('./assets/mainLoader.json');
import * as LoaderAnimation from './assets/mainLoader.json';
//TODO: Change this 'require' import to regular import

export function BaseLoader({ ...otherProps }) {
  return (
    <BoxComponent
      sx={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <BoxComponent {...otherProps}>
        <Lottie animationData={LoaderAnimation} loop={true} />
      </BoxComponent>
    </BoxComponent>
  );
}
