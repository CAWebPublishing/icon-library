import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './slider.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/slider'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M729.344 665.024c0-49.167-39.857-89.024-89.024-89.024s-89.024 39.857-89.024 89.024c0 49.167 39.857 89.024 89.024 89.024s89.024-39.857 89.024-89.024zM448 576l-192-128v-192h512v256l-128-64zM960 832h-64c0 35.328-28.672 64-64 64h-640c-35.328 0-64-28.672-64-64h-64c-35.328 0-64-28.672-64-64v-512c0-35.328 28.672-64 64-64h64c0-35.328 28.672-64 64-64h640c35.328 0 64 28.672 64 64h64c35.328 0 64 28.672 64 64v512c0 35.328-28.672 64-64 64zM64 256v512h64v-512h-64zM832 192h-640v640h640v-640zM960 256h-64v512h64v-512zM544 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 17.673 14.327 32 32 32s32-14.327 32-32zM672 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 17.673 14.327 32 32 32s32-14.327 32-32zM416 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 17.673 14.327 32 32 32s32-14.327 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 