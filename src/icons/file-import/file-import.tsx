import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './file-import.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/file-import'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M838.4 730.666l-115.2 115.2c-6.4 6.4-12.8 9.6-19.2 9.6h-19.2v-163.2h163.2v9.6c0 9.6-3.2 25.6-9.6 28.8zM844.8 625.066h-163.2c-38.4 0-64 22.4-64 64v166.4h-384c-35.2 0-35.2 0-35.2-41.6v-406.4h316.8l-67.2 64c-9.6 9.6-9.6 19.2-3.2 28.8 0 0 19.2 19.2 19.2 19.2 9.6 9.6 22.4 6.4 28.8-3.2l115.2-108.8c6.4-6.4 16-16 16-32s-9.6-25.6-16-32l-115.2-108.8c-6.4-6.4-22.4-9.6-28.8-3.2 0 0-19.2 19.2-19.2 19.2-6.4 6.4-9.6 19.2 3.2 28.8l67.2 64h-316.8v-307.2c0-41.6 0-41.6 41.6-41.6h563.2c44.8 0 41.6 0 41.6 41.6v588.8zM70.4 407.466c-16 0-25.6-9.6-32-25.6v0c0-3.2 0-3.2 0-6.4 0 0 0 0 0 0s0 0 0 0c0-3.2 0-3.2 0-6.4v0c3.2-12.8 16-25.6 32-25.6h128v64h-128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 