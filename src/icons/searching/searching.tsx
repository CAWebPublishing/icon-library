import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './searching.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/searching'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M64 0h576c35.328 0 64 28.672 64 64v86.4c13.632 6.528 26.368 14.336 38.336 23.36l196.416-196.416c6.272-6.272 14.464-9.344 22.656-9.344s16.384 3.136 22.656 9.344c12.48 12.48 12.48 32.768 0 45.248l-196.544 196.544c27.584 37.248 44.48 82.944 44.48 132.864 0 89.216-52.544 165.568-128 201.6v342.4c0 35.328-28.672 64-64 64h-576c-35.328 0-64-28.672-64-64v-832c0-35.328 28.672-64 64-64zM608 192c-88.192 0-160 71.808-160 160s71.808 160 160 160 160-71.808 160-160-71.808-160-160-160zM544 704h-384c-17.664 0-32 14.336-32 32s14.336 32 32 32h384c17.664 0 32-14.336 32-32s-14.336-32-32-32zM160 576h384c6.208 0 11.648-2.24 16.512-5.248-41.856-9.088-79.36-29.824-108.928-58.752h-291.584c-17.664 0-32 14.336-32 32s14.336 32 32 32zM160 384h227.2c-1.472-10.56-3.2-21.056-3.2-32s1.728-21.44 3.2-32h-227.2c-17.664 0-32 14.336-32 32s14.336 32 32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 