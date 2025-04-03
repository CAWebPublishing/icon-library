import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './justice-legal.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/justice-legal'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M791.196 288.462c97.9 0 177.674 79.774 174.048 181.294l-163.166 326.332-10.88 18.128c-3.626 3.628-10.88 3.628-18.128 3.628l-206.676-21.754v32.636c18.128 10.882 32.636 32.636 32.636 54.392 0 36.256-29.010 65.264-65.264 65.264s-65.264-29.010-65.264-65.264c0-21.756 14.5-47.138 32.636-54.392v-47.136l-199.43-21.754c-3.628 0-10.88-3.628-14.5-10.88l-7.254-18.128-163.166-326.332c3.626-94.274 83.4-174.048 181.294-174.048s177.674 76.146 181.294 174.048l-163.166 326.332v7.254l195.802 21.754v-649.044h-155.912c-14.5 0-21.754-10.88-21.754-21.754 0-3.626 0-3.626 0-10.88h-54.392c-14.5 0-29.010-14.5-29.010-32.636v-18.128c0-18.128 14.5-32.636 29.010-32.636h529.388c14.5 0 29.010 14.5 29.010 32.636v18.128c0 18.128-14.5 32.636-29.010 32.636h-54.39c0 3.626 0 3.626 0 10.88 0 14.5-10.88 21.754-21.754 21.754h-155.912v659.918l195.802 21.754-159.538-326.332c0-97.9 79.774-177.674 177.674-177.674zM439.48 411.744h-282.822l137.784 319.084 145.038-319.084zM783.948 788.84l145.038-326.332h-282.822l137.784 326.332z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 