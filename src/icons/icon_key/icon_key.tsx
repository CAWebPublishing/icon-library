import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_key.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_key'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M992 960h-128c-7.744 0-15.232-2.816-21.12-7.936l-441.728-387.264c-22.848 4.8-58.176 11.2-81.152 11.2-176.448 0-320-143.552-320-320s143.552-320 320-320 320 143.552 320 320c0 52.416-9.984 87.552-21.312 116.736l108.928 36.992c13.248 4.48 22.016 17.088 21.696 31.040l-2.688 121.472 122.24 8.512c16.384 1.152 29.248 14.528 29.76 30.912l4.544 145.856 95.744 21.248c14.656 3.2 25.088 16.256 25.088 31.232v128c0 17.664-14.336 32-32 32zM224 256c38.4 0 71.552-22.592 86.912-55.168 5.824-12.416 9.088-26.24 9.088-40.832 0-52.992-43.008-96-96-96s-96 43.008-96 96 43.008 96 96 96z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 