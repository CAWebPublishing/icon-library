import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './entertainment.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/entertainment'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M919.8 320.467c-104.4 30.6-291.2 103.2-382 177.6 34.4-43.6 90.4-145.6 212.8-215.6-0.8-32.8-37.4-73.8-76.8-73.8-41.4 0-76.6 33.6-76.6 75l-104.6 157-104.6-157c0-41.4-35.2-75-76.6-75-39.2 0-75.8 41-76.8 73.8 122.4 70 178.4 171.8 212.8 215.6-91-74.4-277.8-147-382-177.6-33-9.6-38.2-24.2-38.2-43 0-41.4 44.4-99.2 99.2-99.2 33 0 62 19.6 80 45 21.6-35 59.8-62.8 104.8-62.8 42 0 79.2 21.2 101.6 53.4 19.2-23.2 47.8-38 79.6-38 32 0 60.4 14.8 79.6 38 22.2-32.2 59.4-53.4 101.6-53.4 45 0 83.2 27.8 104.8 62.8 18-25.4 47.2-45 80-45 54.8 0 99.2 57.8 99.2 99.2 0.2 18.6-4.8 33.2-37.8 43zM704 610.067c0-31.2 0-55 0-68 139.4-37.8 267.8 32.6 316 68.4-39.4 0-145.6 12.8-226.6 34.6 3.8 29.8 2 56.4-7.2 80.2-41.2 18.8-155.6 33-238.6 20.4v61.8c0 1-0.8 2-2 2h-50.6c-1 0-2-0.8-2-2v-76.4c0 0-0.2 0-0.2-0.2v-134c50.6 23.6 142.2 23.2 211.2 13.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 