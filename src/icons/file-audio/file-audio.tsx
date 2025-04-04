import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-audio.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-audio'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M828.8 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM835.2 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6 0 0 0 588.8 0 588.8zM483.2 212.266c0-19.2-16-22.4-28.8-9.6l-76.8 64h-44.8c-19.2 0-19.2 0-19.2 19.2v92.8c0 19.2 0 19.2 19.2 19.2h44.8l76.8 67.2c12.8 12.8 28.8 6.4 28.8-9.6v-243.2zM729.6 330.666c0 0 0-3.2 0 0v0c-3.2-99.2-67.2-182.4-160-214.4 0 0-3.2 0-6.4 0-6.4 0-12.8 3.2-16 9.6-3.2 9.6 3.2 16 9.6 19.2 80 25.6 134.4 99.2 137.6 185.6 0 86.4-54.4 160-137.6 185.6-9.6 3.2-12.8 12.8-9.6 19.2s9.6 9.6 16 9.6c0 0 3.2 0 6.4 0 92.8-28.8 156.8-112 160-211.2v0-3.2c0 3.2 0 3.2 0 0 0 3.2 0 0 0 0zM556.8 407.466c-6.4 6.4-9.6 16-3.2 22.4s16 9.6 22.4 3.2c32-22.4 51.2-57.6 54.4-96v0-12.8c-3.2-38.4-22.4-73.6-54.4-96-6.4-6.4-16-3.2-22.4 3.2s-3.2 16 3.2 22.4c25.6 16 38.4 44.8 38.4 73.6 0 35.2-12.8 64-38.4 80z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 