import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_compass.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_compass'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512-229.248 512-512 512zM763.136 655.040l-123.968-198.656c0.192-2.816 0.832-5.504 0.832-8.384 0-70.72-57.28-128-128-128-2.88 0-5.568 0.64-8.384 0.832l-198.656-123.968c-5.184-3.264-11.072-4.864-16.96-4.864-8.256 0-16.448 3.2-22.656 9.344-10.56 10.56-12.416 26.944-4.48 39.552l123.968 198.656c-0.192 2.88-0.832 5.568-0.832 8.448 0 70.72 57.28 128 128 128 2.88 0 5.568-0.64 8.384-0.832l198.656 123.968c12.416 7.872 28.992 6.016 39.552-4.544 10.624-10.496 12.48-26.88 4.544-39.552zM448 448c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 