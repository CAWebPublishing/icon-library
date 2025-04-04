import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_printer.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_printer'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 640h-64v256c0 35.328-28.672 64-64 64h-640c-35.328 0-64-28.672-64-64v-256h-64c-35.328 0-64-28.672-64-64v-320c0-35.328 28.672-64 64-64h64v-192c0-35.328 28.672-64 64-64h640c35.328 0 64 28.672 64 64v192h64c35.328 0 64 28.672 64 64v320c0 35.328-28.672 64-64 64zM192 320h640v-320h-640v320zM832 384h-640c-35.328 0-64-28.672-64-64v-64h-64v320h896v-320h-64v64c0 35.328-28.672 64-64 64zM192 896h640v-256h-640v256zM704 480c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM128 480c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM832 480c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM768 224c0 17.664-14.336 32-32 32h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32h448c17.664 0 32 14.336 32 32zM736 128h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32h448c17.664 0 32 14.336 32 32s-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 