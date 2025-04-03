import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './fingerprint.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/fingerprint'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M764.8 381.866c-67.2 115.2-153.6 144-214.4 147.2-80 6.4-169.6-28.8-217.6-86.4-9.6-9.6-6.4-25.6 3.2-35.2s25.6-6.4 35.2 3.2c32 38.4 99.2 76.8 172.8 70.4 48-3.2 121.6-28.8 176-124.8 3.2-9.6 12.8-12.8 22.4-12.8 3.2 0 9.6 0 12.8 3.2 12.8 6.4 16 22.4 9.6 35.2zM876.8 365.866c-28.8 121.6-124.8 217.6-259.2 252.8-118.4 32-208 16-297.6-54.4-86.4-70.4-115.2-144-80-204.8 16-28.8 41.6-44.8 73.6-51.2 41.6-6.4 89.6 6.4 131.2 38.4 32 25.6 60.8 38.4 83.2 38.4 32 3.2 70.4-16 99.2-48 38.4-41.6 54.4-83.2 54.4-83.2 3.2-9.6 12.8-16 22.4-16 3.2 0 6.4 0 9.6 0 12.8 3.2 19.2 19.2 16 32 0 3.2-19.2 51.2-67.2 102.4-28.8 32-83.2 67.2-140.8 64-32-3.2-67.2-19.2-108.8-51.2-32-22.4-64-35.2-92.8-28.8-16 3.2-28.8 12.8-38.4 25.6-32 51.2 38.4 115.2 67.2 140.8 76.8 60.8 150.4 73.6 252.8 48 54.4-16 185.6-64 220.8-214.4 3.2-12.8 16-22.4 32-19.2 16 0 25.6 16 22.4 28.8zM252.8 583.466c6.4 0 12.8 3.2 16 6.4 0 0 86.4 76.8 188.8 92.8 12.8 3.2 22.4 16 22.4 28.8-3.2 12.8-16 22.4-28.8 22.4-118.4-16-211.2-102.4-214.4-105.6-12.8-9.6-12.8-25.6-3.2-35.2 6.4-6.4 12.8-9.6 19.2-9.6zM521.6 714.666c-3.2-12.8 6.4-25.6 19.2-28.8 102.4-19.2 198.4-73.6 272-150.4 6.4-6.4 12.8-9.6 19.2-9.6s12.8 3.2 16 6.4c9.6 9.6 9.6 25.6 0 35.2-76.8 83.2-185.6 144-297.6 163.2-12.8 9.6-25.6 0-28.8-16zM633.6 173.866c16 38.4 16 80-6.4 105.6-48 57.6-112 64-188.8 22.4-57.6-32-121.6-41.6-176-25.6-38.4 9.6-64 60.8-73.6 80-3.2 12.8-19.2 19.2-32 16s-19.2-19.2-16-32c0-3.2 35.2-92.8 105.6-112 67.2-19.2 147.2-6.4 214.4 32 70.4 38.4 102.4 19.2 124.8-9.6 6.4-9.6 12.8-28.8 0-54.4-9.6-22.4-57.6-99.2-246.4-112-12.8 0-25.6-12.8-22.4-25.6 0-12.8 12.8-22.4 25.6-22.4 0 0 0 0 3.2 0 208 9.6 272 99.2 288 137.6zM537.6 225.066c-9.6 9.6-25.6 12.8-35.2 3.2-22.4-19.2-160-86.4-278.4-38.4-12.8 6.4-28.8 0-32-12.8-6.4-12.8 0-28.8 12.8-32 38.4-16 73.6-22.4 112-22.4 102.4 0 195.2 48 217.6 67.2 12.8 9.6 12.8 25.6 3.2 35.2zM720 215.466c-12.8 0-25.6-9.6-28.8-22.4-3.2-28.8-28.8-89.6-105.6-131.2-12.8-6.4-16-22.4-9.6-35.2 3.2-9.6 12.8-12.8 22.4-12.8 3.2 0 6.4 0 12.8 3.2 96 51.2 128 131.2 131.2 169.6 0 16-9.6 25.6-22.4 28.8zM780.8 308.266c-12.8-3.2-22.4-16-19.2-32 0 0 16-57.6 6.4-112-3.2-12.8 6.4-25.6 22.4-28.8 0 0 3.2 0 3.2 0 12.8 0 22.4 9.6 25.6 22.4 9.6 64-6.4 128-6.4 131.2-3.2 12.8-19.2 22.4-32 19.2zM169.6 410.666c12.8 0 25.6 12.8 25.6 25.6 0 51.2 19.2 73.6 22.4 73.6 9.6 9.6 9.6 25.6 0 35.2s-25.6 9.6-35.2 0c-3.2-3.2-35.2-38.4-35.2-112-3.2-9.6 9.6-22.4 22.4-22.4zM259.2 708.266c6.4 0 9.6 3.2 16 6.4 80 60.8 246.4 140.8 454.4 9.6 12.8-6.4 28.8-3.2 35.2 6.4 6.4 12.8 3.2 28.8-6.4 35.2-172.8 108.8-361.6 102.4-515.2-12.8-9.6-6.4-12.8-22.4-3.2-35.2 3.2-6.4 12.8-9.6 19.2-9.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 