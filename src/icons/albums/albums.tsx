import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './albums.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/albums'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M758.4 820.266c-57.6 0-432 0-492.8 0s-80-38.4-80-83.2c0-44.8 0-566.4 0-624s25.6-83.2 83.2-83.2 454.4 0 499.2 0c44.8 0 73.6 16 73.6 83.2 0 64 0 563.2 0 624-3.2 60.8-28.8 83.2-83.2 83.2zM758.4 116.266h-492.8v620.8h492.8v-620.8zM128 753.066v0c-12.8 0-25.6-9.6-25.6-25.6v-608c0-12.8 9.6-25.6 25.6-25.6v0c12.8 0 25.6 9.6 25.6 25.6v608c-3.2 16-12.8 25.6-25.6 25.6zM44.8 689.066v0c-12.8 0-25.6-12.8-25.6-25.6v-476.8c0-12.8 9.6-25.6 25.6-25.6v0c12.8 0 25.6 9.6 25.6 25.6v476.8c0 12.8-12.8 25.6-25.6 25.6zM896 753.066v0c-12.8 0-25.6-9.6-25.6-25.6v-608c0-12.8 9.6-25.6 25.6-25.6v0c12.8 0 25.6 9.6 25.6 25.6v608c0 16-9.6 25.6-25.6 25.6zM979.2 689.066v0c-12.8 0-25.6-9.6-25.6-25.6v-476.8c0-12.8 9.6-25.6 25.6-25.6v0c12.8 0 25.6 9.6 25.6 25.6v476.8c0 12.8-12.8 25.6-25.6 25.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 