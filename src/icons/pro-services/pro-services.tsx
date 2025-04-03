import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pro-services.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pro-services'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M672 420.266c-22.4 16-48 25.6-80 25.6-163.2 0-195.2-224-201.6-291.2 0 0 83.2-64 201.6-64s188.8 64 188.8 64c-3.2 22.4-6.4 60.8-16 105.6-12.8 57.6-41.6 124.8-92.8 160zM595.2 471.466c64 0 118.4 54.4 118.4 118.4s-54.4 118.4-118.4 118.4c-64 0-118.4-54.4-118.4-118.4s51.2-118.4 118.4-118.4zM838.4 586.666c60.8 0 108.8 48 108.8 108.8s-48 108.8-108.8 108.8-108.8-48-108.8-108.8c0-60.8 48-108.8 108.8-108.8zM838.4 557.866c-89.6 0-128-64-147.2-105.6 28.8-19.2 92.8-73.6 121.6-227.2 3.2 0 9.6 0 22.4 0 108.8 0 176 60.8 176 60.8-3.2 60.8-28.8 272-172.8 272zM816 228.266v0 0zM121.6 455.466h275.2c9.6 0 19.2 9.6 19.2 19.2s-9.6 16-19.2 16h-275.2c-6.4 22.4-28.8 38.4-51.2 38.4-28.8 0-54.4-25.6-54.4-54.4s25.6-54.4 54.4-54.4c22.4-3.2 41.6 12.8 51.2 35.2zM121.6 769.066v-99.2c0-60.8 41.6-99.2 105.6-99.2h128c9.6 0 16 6.4 16 16s-6.4 16-16 16h-128c-28.8 0-73.6 9.6-73.6 67.2v99.2c22.4 9.6 38.4 28.8 38.4 54.4 0 28.8-25.6 54.4-54.4 54.4s-54.4-25.6-54.4-54.4c0-25.6 16-44.8 38.4-54.4zM358.4 375.466h-128c-64 0-105.6-38.4-105.6-99.2v-99.2c-22.4-6.4-38.4-28.8-38.4-51.2 0-28.8 25.6-54.4 54.4-54.4s51.2 22.4 51.2 51.2c0 25.6-16 44.8-38.4 51.2v99.2c0 60.8 44.8 67.2 73.6 67.2h128c9.6 0 16 6.4 16 16s-6.4 19.2-12.8 19.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 