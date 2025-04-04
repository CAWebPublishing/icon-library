import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './book.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/book'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M172.304-47.996h586.206c34.224 0 62 27.776 62 62v650.996c0 17.112-13.888 31-31 31 0 0 0 0 0 0h-525.508c-1.55 0-4.588-0.248-7.502-0.434l-84.196 0.434c-52.018 0-94.302 39.742-94.302 91.698 0 52.018 40.982 94.302 93 94.302h712.996v-712.996c0-17.112 12.4-31 29.574-31s32.426 13.888 32.426 31v743.996c0 17.112-15.314 31-32.426 31h-741.268c-85.56 0-154.814-68.758-156.054-154.008l-0.248 0.31v-681.996c0-86.304 69.998-156.3 156.3-156.3z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 