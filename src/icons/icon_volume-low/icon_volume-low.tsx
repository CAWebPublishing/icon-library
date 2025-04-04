import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_volume-low.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_volume-low'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M658.688 959.808c-11.648 1.088-25.28-1.728-41.344-11.456 0 0-266.88-232.832-278.464-244.352h-146.88c-35.328 0-64-28.672-64-64v-392.128c0-35.328 28.672-64 64-64h146.88c11.584-11.52 278.464-236.16 278.464-236.16 16.064-9.728 29.696-12.544 41.344-11.456 23.68 2.24 40.32 22.080 45.376 43.008 0.32 2.048 0.32 935.488 0 937.472-5.056 20.992-21.76 40.832-45.376 43.072zM802.624 336.192c-15.808-8-22.144-27.2-14.208-43.008 5.632-11.136 16.896-17.6 28.544-17.6 4.864 0 9.728 1.088 14.4 3.392 64.704 32.64 104.896 97.344 104.896 169.024s-40.192 136.384-104.896 169.024c-15.808 8-35.008 1.6-42.944-14.208s-1.6-35.008 14.208-43.008c42.944-21.632 69.632-64.448 69.632-111.808s-26.688-90.176-69.632-111.808z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 