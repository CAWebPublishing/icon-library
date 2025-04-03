import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_ribbon.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_ribbon'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128 768v-768c0-25.856 15.616-49.216 39.488-59.136 7.936-3.264 16.256-4.864 24.512-4.864 16.64 0 33.024 6.528 45.248 18.752l274.752 274.752 274.752-274.752c12.224-12.224 28.608-18.752 45.248-18.752 8.256 0 16.576 1.6 24.448 4.864 23.936 9.92 39.552 33.28 39.552 59.136v768h-768zM896 832v64c0 35.328-28.672 64-64 64h-640c-35.328 0-64-28.672-64-64v-64h768z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 