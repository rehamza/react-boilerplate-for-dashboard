import { RefObject } from 'react';

export interface IRefData {
  id: number | number[];
  ref: RefObject<HTMLElement>;
  threshold: number;
}
