import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './medical-doctor.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/medical-doctor'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M816 449.066c-44.8 0-80-35.2-80-80 0-35.2 25.6-67.2 57.6-76.8v-76.8c0-128-73.6-230.4-166.4-230.4s-166.4 102.4-166.4 230.4v131.2c38.4 6.4 73.6 32 96 67.2l153.6 268.8c25.6 41.6 25.6 92.8 0 137.6-22.4 38.4-57.6 60.8-102.4 67.2-9.6 16-25.6 25.6-41.6 25.6-25.6 0-48-22.4-48-48s22.4-48 48-48c16 0 32 9.6 41.6 22.4 25.6-3.2 48-19.2 60.8-41.6 16-28.8 16-60.8 0-89.6l-156.8-268.8c-16-28.8-44.8-44.8-76.8-44.8s-60.8 16-76.8 44.8l-153.6 265.6c-16 28.8-16 60.8 0 89.6 12.8 22.4 35.2 38.4 60.8 41.6 9.6-12.8 22.4-22.4 41.6-22.4 25.6 0 48 22.4 48 48s-22.4 48-48 48c-19.2 0-35.2-9.6-41.6-25.6-41.6-3.2-80-28.8-102.4-64-25.6-44.8-25.6-96 0-137.6l156.8-268.8c19.2-35.2 54.4-60.8 96-67.2v-131.2c0-153.6 96-278.4 214.4-278.4s214.4 124.8 214.4 278.4v80c28.8 9.6 51.2 38.4 51.2 73.6 0 44.8-35.2 80-80 80zM816 330.666c-19.2 0-38.4 16-38.4 38.4s16 38.4 38.4 38.4 38.4-16 38.4-38.4-16-38.4-38.4-38.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 