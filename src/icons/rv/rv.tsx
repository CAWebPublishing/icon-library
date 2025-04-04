import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './rv.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/rv'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M974.6 301.867h-163.6l34.4 57.4c17.2 28.6 26.2 61.4 26.2 94.8v184.2c0 24.2-19.6 43.8-43.8 43.8h-186.8l-18.2 36.2h-166.8l-18.2-36.2h-332.4c-20 0-37.4-13.6-42.4-33l-49.4-195c-1.8-7-1.8-14.2-0.2-21.2l32.8-134.2c4.8-19.6 22.4-33.4 42.6-33.4h192.6c8.2-35.4 40-61.8 77.8-61.8s69.6 26.4 77.8 61.8h32.4v-0.2l505.2 0.2v-59.8h36.6v125h-36.6v-28.6zM272 477.867v93.2h-27.4v-93.2h-91.2c-12 0-21.8 9.8-21.8 21.8v59.4c0 12 9.8 21.8 21.8 21.8h231.8v-103.2h-113.2zM359.2 240.067c-24 0-43.4 19.4-43.4 43.4 0 23.8 19.4 43.4 43.4 43.4 23.8 0 43.4-19.4 43.4-43.4-0.2-24-19.6-43.4-43.4-43.4zM594.2 458.467h-27.8v-20.4h27.8v-136.6h-109.4v266h109.4v-109zM807.2 499.667c0-12-9.8-21.8-21.8-21.8h-91.4v103.2h91.2c12 0 21.8-9.8 21.8-21.8v-59.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 