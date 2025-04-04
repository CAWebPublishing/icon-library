import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './smartphone.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/smartphone'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M695.25 936.672h-370.322c-38.18 0-68.72-34.36-68.72-76.36v-836.092c0-42 30.54-76.36 68.72-76.36h370.322c38.18 0 68.72 34.36 68.72 76.36v836.092c0 42-30.54 76.36-68.72 76.36zM443.28 845.052h129.8c11.45 0 19.090-7.64 19.090-19.090s-7.64-19.090-19.090-19.090h-129.8c-11.45 0-19.090 7.64-19.090 19.090s7.64 19.090 19.090 19.090zM508.18-10.13c-26.72 0-49.63 22.91-49.63 49.63s22.91 49.63 49.63 49.63c26.72 0 49.63-22.91 49.63-49.63s-22.91-49.63-49.63-49.63zM706.71 123.49h-397.050v641.382h397.050v-641.382z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 