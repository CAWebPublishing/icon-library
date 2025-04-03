import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_vol-mute_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_vol-mute_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M64 183.872h146.624c11.584-11.52 278.464-236.16 278.464-236.16 13.888-8.448 25.984-11.712 36.544-11.712 1.6 0 3.2 0.064 4.736 0.192 23.68 2.24 40.576 22.080 45.632 43.008v937.536c-4.992 20.992-21.952 40.832-45.632 43.072-1.536 0.128-3.072 0.192-4.736 0.192-10.56 0-22.656-3.264-36.544-11.648 0 0-266.88-232.832-278.464-244.352h-146.624c-35.328 0-64-28.672-64-64v-392.128c0-35.392 28.672-64 64-64zM64 256v384h146.624c16.384 0 32.768 6.848 44.608 18.112 11.648 11.072 156.288 137.6 256.768 225.28v-871.36c-99.84 84.096-244.48 206.272-256.256 217.152-11.968 11.968-28.224 18.624-45.184 18.624h-146.56v8.192zM1012.544 613.696c-15.232 15.232-40 15.232-55.232 0l-110.464-110.464-110.464 110.464c-15.232 15.232-40 15.232-55.232 0s-15.232-40 0-55.232l110.464-110.464-110.464-110.464c-15.232-15.232-15.232-40 0-55.232s40-15.232 55.232 0l110.464 110.464 110.464-110.464c15.232-15.232 40-15.232 55.232 0s15.232 40 0 55.232l-110.464 110.464 110.464 110.464c15.296 15.232 15.296 40 0 55.232z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 