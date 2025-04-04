import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_lock_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_lock_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-176.704 0-320-145.472-320-324.928v-59.072h-64c-35.328 0-64-28.672-64-64v-512c0-35.328 28.672-64 64-64h768c35.328 0 64 28.672 64 64v512c0 35.328-28.672 64-64 64h-64v59.072c0 179.456-143.296 324.928-320 324.928zM256 635.072c0 143.872 114.816 260.928 256 260.928s256-117.056 256-260.928v-59.072h-512v59.072zM896 0h-768v512h768v-512zM640 256c0 70.72-57.28 128-128 128s-128-57.28-128-128 57.28-128 128-128 128 57.28 128 128zM512 192c-35.264 0-64 28.736-64 64s28.736 64 64 64 64-28.736 64-64-28.736-64-64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 