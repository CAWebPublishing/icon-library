import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './linkedin.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/linkedin'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M320.56 783.020c0-55.062-44.638-99.71-99.71-99.71s-99.71 44.638-99.71 99.71c0 55.062 44.638 99.71 99.71 99.71s99.71-44.638 99.71-99.71zM137.1 611.52h167.51v-538.428h-167.51v538.428zM731.36 627.48c-79.77 0-135.6-43.87-155.55-87.74v75.78h-167.51v-538.428h167.51v267.22c0 67.8 11.97 135.6 99.71 135.6s87.74-79.77 87.74-143.58v-263.23h167.51v295.14c0 143.58-31.91 259.24-199.42 259.24z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 