import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './medical-heart.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/medical-heart'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M816 557.866c0 6.4-3.2 9.6-6.4 12.8s-9.6 6.4-12.8 6.4h-112c-6.4 0-9.6-3.2-12.8-6.4s-6.4-9.6-6.4-12.8v-131.2h-131.2c-6.4 0-9.6-3.2-12.8-6.4s-6.4-9.6-6.4-12.8v-108.8c0-6.4 3.2-9.6 6.4-12.8 3.2-6.4 9.6-6.4 12.8-6.4h131.2v-131.2c0-3.2 0-9.6 3.2-12.8v0c0 0 0 0 0 0 3.2-3.2 9.6-6.4 12.8-6.4h112c6.4 0 9.6 3.2 12.8 6.4s6.4 9.6 6.4 12.8v131.2h131.2c6.4 0 9.6 3.2 12.8 6.4s6.4 9.6 6.4 12.8v112c0 6.4-3.2 9.6-6.4 12.8s-6.4 3.2-12.8 3.2h-128v131.2zM633.6 151.466v92.8h-92.8c-16 0-32 6.4-41.6 19.2-9.6 9.6-12.8 22.4-12.8 35.2v112c0 16 6.4 28.8 16 38.4s22.4 16 38.4 16h92.8v92.8c0 16 6.4 28.8 16 38.4s22.4 16 38.4 16h112c16 0 28.8-6.4 38.4-16s16-22.4 16-38.4v-96h86.4l16 19.2c25.6 41.6 41.6 92.8 41.6 144 0 147.2-121.6 268.8-268.8 268.8-89.6 0-169.6-44.8-217.6-112-48 67.2-128 112-217.6 112-150.4 3.2-272-115.2-272-265.6 0-64 22.4-124.8 60.8-169.6l428.8-518.4 115.2 137.6 25.6 32c0 0 0 0-3.2 3.2-12.8 9.6-16 22.4-16 38.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 