import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_stop_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_stop_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512-229.248 512-512 512zM704 320c0-35.328-28.672-64-64-64h-256c-35.328 0-64 28.672-64 64v256c0 35.328 28.672 64 64 64h256c35.328 0 64-28.672 64-64v-256z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 