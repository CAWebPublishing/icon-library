import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-check.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-check'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M828.8 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM835.2 631.466h-163.2c-38.4 0-57.6 16-57.6 57.6v166.4h-390.4c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v595.2zM681.6 407.466l-192-211.2c-6.4-9.6-19.2-12.8-28.8-12.8s-22.4 3.2-28.8 12.8l-92.8 96c-16 16-16 32 6.4 51.2 16 16 32 25.6 51.2 3.2l67.2-67.2 166.4 179.2c16 16 28.8 16 51.2-6.4 12.8-16 12.8-28.8 0-44.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 