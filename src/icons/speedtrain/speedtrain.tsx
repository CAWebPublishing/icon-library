import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './speedtrain.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/speedtrain'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M972.2 352.067l-6.6 9.8-81.2 122.4-6.6 9.8c-37.6 56.8-123.6 102.8-191.6 102.8h-590.4l-38.4-130.6h90.8v-99.4h-98.4l-31-130.4h891.2c35.6 0 61.8 12.4 74 34.8 12 22.4 7.8 51-11.8 80.8zM571.6 466.467v-99.4h-118.2v99.4h118.2zM594.6 367.067v99.4h118.2v-99.4h-118.2zM430.4 466.467v-99.4h-118.2v99.4h118.2zM735.8 367.067v99.4h132.8l66-99.4h-198.8zM171.2 466.467h118.2v-99.4h-118.2v99.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 