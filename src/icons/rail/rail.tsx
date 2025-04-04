import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './rail.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/rail'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M843.6-56.333l-46.8 317c20.8 14.8 34.4 39 34.4 66.4v519.4c0 45-36.8 81.6-81.6 81.6h-472.4c-45 0-81.6-36.8-81.6-81.6v-519.2c0-30.4 17-57.2 41.8-71.2l-46-312.2c-0.8-7.4 4.2-14.4 11.8-15.4 7.4-1 14.4 4 15.4 11.4l14.2 96.6h569.6l14.2-96.6c1-6.8 6.8-11.6 13.4-11.6 0.6 0 1.4 0 2 0.2 7.4 0.8 12.6 7.8 11.6 15.2zM263.8 247.467h507.4l10.2-69.2h-527.8l10.2 69.2zM299.2 388.267c0 35 28.4 63.6 63.6 63.6 35 0 63.6-28.4 63.6-63.6 0-35-28.4-63.6-63.6-63.6-35.2 0.2-63.6 28.6-63.6 63.6zM600.4 388.267c0 35 28.4 63.6 63.6 63.6 35 0 63.6-28.4 63.6-63.6 0-35-28.4-63.6-63.6-63.6-35.2 0.2-63.6 28.6-63.6 63.6zM267.4 824.667c0 15 12.2 27.2 27.2 27.2h437.4c15 0 27.2-12.2 27.2-27.2v-256.8c0-15-12.2-27.2-27.2-27.2h-437.2c-15 0-27.2 12.2-27.2 27.2v256.8zM236.8 63.467l12.8 87.4h535.8l12.8-87.4h-561.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 