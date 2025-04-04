import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './clock.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/clock'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 813.866c-214.4 0-387.2-172.8-387.2-387.2s172.8-387.2 387.2-387.2 387.2 172.8 387.2 387.2-172.8 387.2-387.2 387.2zM675.2 298.666c-6.4-6.4-19.2-9.6-28.8-3.2l-112 89.6c-6.4-3.2-12.8-6.4-22.4-6.4-25.6 0-48 22.4-48 48 0 19.2 12.8 35.2 28.8 41.6v243.2c0 9.6 9.6 19.2 19.2 19.2s19.2-9.6 19.2-19.2v-240c16-6.4 28.8-22.4 28.8-41.6 0-3.2 0-6.4 0-9.6l112-89.6c9.6-9.6 9.6-22.4 3.2-32zM528 426.666c0-8.836-7.164-16-16-16s-16 7.164-16 16c0 8.836 7.164 16 16 16s16-7.164 16-16z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 