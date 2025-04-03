import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './car-alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/car-alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M989.6 583.267v-21.6c0-15.4-12.6-28-28-28h-37.6c-2 0-4 0.2-6 0.6l-5.8-27.2 33.2-46.8c9.6-13.6 14.4-30 13.6-46.6l-9-193c-0.6-11.4-8-21-18-24.8v-71.4c0-15-12.2-27.2-27.2-27.2h-48.2c-15 0-27.2 12.2-27.2 27.2v64c-206.2-10.8-412.4-10.8-618.6 0v-64c0-15-12.2-27.2-27.2-27.2h-48c-15 0-27.2 12.2-27.2 27.2v71.4c-10.2 3.8-17.6 13.4-18 24.8l-9.2 193.2c-0.8 16.6 4 33 13.6 46.6l33.2 46.8-5.8 27.2c-2-0.4-4-0.6-6-0.6h-37.4c-15.4 0-28 12.6-28 28v21.6c0 15.4 12.6 28 28 28h37.6c15.4 0 28-12.6 28-28v-21.6c0-5.6-1.8-11-4.6-15.4l3.8-17.6 16 22.4 86 210.4c4.2 10.6 14.6 17.4 25.8 17.4h498c11.4 0 21.6-6.8 25.8-17.4l86-210.4 16-22.4 3.8 17.6c-2.8 4.4-4.6 9.6-4.6 15.4v21.6c0 15.4 12.6 28 28 28h37.6c15-0.2 27.6-12.6 27.6-28.2zM822.8 534.867l-76.2 180c-0.4 1-1.2 1.6-2.4 1.6h-448c-1 0-2-0.6-2.4-1.8l-76.2-179.8h605.2zM174.6 341.467c27.6 0 50 22.4 50 50s-22.4 50-50 50c-27.6 0-50-22.4-50-50-0.2-27.4 22.2-50 50-50zM418 235.867c-79.6 1.4-159.2 4.8-238.6 9.8 0-6.8 0-13.4 0-20.2 79.4-5 159-8.2 238.6-9.8 0 6.8 0 13.4 0 20.2zM683.2 294.067c1.8 0 3.8 0.6 5.2 1.6 29.2 19.2 50 48 61.4 87.4 1.8 6-2.8 12-9 12h-441.2c-6.2 0-10.6-6-9-12 11.2-39.4 32-68.2 61.4-87.4 1.6-1 3.4-1.6 5.2-1.6h326zM728.4 375.467h-416.4v-9.8h416.6v9.8zM709.6 347.267h-378.8v-9.4h378.6v9.4zM690.6 319.067h-340.8v-8.8h340.8v8.8zM860.8 245.667c-79.4-5-159-8.2-238.6-9.8 0-6.8 0-13.4 0-20.2 79.6 1.4 159.2 4.8 238.6 9.8 0 6.6 0 13.4 0 20.2zM865.8 441.667c-27.6 0-50-22.4-50-50s22.4-50 50-50c27.6 0 50 22.4 50 50 0.2 27.6-22.2 50-50 50z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 