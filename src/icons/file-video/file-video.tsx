import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-video.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-video'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M828.8 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM835.2 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-777.6c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v588.8zM710.4 330.666c0 0 0 0 0 0 0-9.6 0-76.8 0-99.2 0-12.8-9.6-16-28.8-6.4-12.8 6.4-99.2 54.4-118.4 67.2v-25.6c0-32-25.6-54.4-54.4-54.4h-128c-32 0-54.4 25.6-54.4 54.4v128c0 32 25.6 54.4 54.4 54.4h128c32 0 54.4-25.6 54.4-54.4v-28.8c19.2 12.8 102.4 57.6 118.4 67.2s28.8 12.8 28.8-6.4c0-19.2 0-86.4 0-96z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 