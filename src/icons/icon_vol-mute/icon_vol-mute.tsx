import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_vol-mute.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_vol-mute'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M64 183.872h146.88c11.584-11.52 278.464-236.16 278.464-236.16 16.064-9.728 29.696-12.544 41.344-11.456 23.68 2.24 40.32 22.080 45.376 43.008 0.256 2.048 0.256 935.424-0.064 937.472-4.992 20.992-21.696 40.832-45.312 43.072-11.648 1.088-25.28-1.728-41.344-11.456 0 0-266.88-232.832-278.464-244.352h-146.88c-35.328 0-64-28.672-64-64v-392.128c0-35.392 28.672-64 64-64zM1012.544 613.696c-15.232 15.232-40 15.232-55.232 0l-110.464-110.464-110.464 110.464c-15.232 15.232-40 15.232-55.232 0s-15.232-40 0-55.232l110.464-110.464-110.464-110.464c-15.232-15.232-15.232-40 0-55.232s40-15.232 55.232 0l110.464 110.464 110.464-110.464c15.232-15.232 40-15.232 55.232 0s15.232 40 0 55.232l-110.464 110.464 110.464 110.464c15.296 15.232 15.296 40 0 55.232z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 