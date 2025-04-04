import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './shopping-cart.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/shopping-cart'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M844.84 279.668c-49.734 0-91.816-34.428-107.12-80.34h-294.582c-11.476 38.258-42.082 72.688-84.164 80.338l-34.428 68.864c455.26 0 627.416 30.606 700.108 294.582h-818.7l-45.912 99.468h-149.204l30.606-76.516h61.21l175.986-409.35c-26.782-19.13-45.912-53.558-45.912-87.992 0-61.21 49.734-110.944 110.944-110.944 49.734 0 91.816 34.428 107.12 84.164h290.754c11.476-45.912 53.558-84.164 107.12-84.164 61.21 0 110.946 49.734 110.946 110.944-3.822 61.21-53.558 110.944-114.774 110.944zM764.496 578.074h76.516v-57.388h-76.516v57.388zM611.468 578.074h76.516v-57.388h-76.516v57.388zM611.468 467.13h76.516v-57.388h-76.516v57.388zM458.442 578.074h76.516v-57.388h-76.516v57.388zM458.442 467.13h76.516v-57.388h-76.516v57.388zM301.586 578.074h76.516v-57.388h-76.516v57.388zM301.586 467.13h76.516v-57.388h-76.516v57.388z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 