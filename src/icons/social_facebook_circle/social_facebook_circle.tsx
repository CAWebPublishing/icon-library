import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_facebook_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_facebook_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM644.352 448.064l-83.904-0.064-0.064-307.2h-115.136v307.2h-76.8v105.856l76.8 0.064-0.128 62.336c0 86.4 23.424 138.944 125.12 138.944h84.736v-105.92h-52.992c-39.616 0-41.536-14.784-41.536-42.368l-0.128-52.992h95.232l-11.2-105.856z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 