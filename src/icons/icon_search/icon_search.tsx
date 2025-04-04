import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_search.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_search'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M64 0h576c35.328 0 64 28.672 64 64v86.4c13.632 6.528 26.368 14.336 38.336 23.36l196.416-196.416c6.272-6.272 14.464-9.344 22.656-9.344s16.384 3.136 22.656 9.344c12.48 12.48 12.48 32.768 0 45.248l-196.544 196.544c27.584 37.248 44.48 82.944 44.48 132.864 0 89.216-52.544 165.568-128 201.6v342.4c0 35.328-28.672 64-64 64h-576c-35.328 0-64-28.672-64-64v-832c0-35.328 28.672-64 64-64zM608 192c-88.192 0-160 71.808-160 160s71.808 160 160 160 160-71.808 160-160-71.808-160-160-160zM64 896h576v-320h-470.848c-22.72 0-41.152-14.336-41.152-32s18.432-32 41.152-32h282.432c-34.368-33.536-57.152-78.208-64.384-128h-227.2c-17.664 0-32-14.336-32-32s14.336-32 32-32h227.2c15.68-108.416 108.032-192 220.8-192 10.944 0 21.44 1.728 32 3.2v-67.2h-576v832zM160 704h384c17.664 0 32 14.336 32 32s-14.336 32-32 32h-384c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 