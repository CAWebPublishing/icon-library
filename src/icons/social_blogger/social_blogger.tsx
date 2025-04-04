import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_blogger.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_blogger'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M957.824 576h-57.408c-35.136 0-65.984 29.76-68.416 64 0 182.656-147.264 320-331.2 320h-167.808c-183.808 0-332.864-148.032-332.992-330.688v-362.816c0-182.592 149.184-330.496 332.992-330.496h358.4c183.936 0 332.608 147.904 332.608 330.56v234.368c0 36.48-29.44 75.072-66.176 75.072zM320 704h192c35.2 0 64-28.8 64-64s-28.8-64-64-64h-192c-35.2 0-64 28.8-64 64s28.8 64 64 64zM704 192h-384c-35.2 0-64 28.8-64 64s28.8 64 64 64h384c35.2 0 64-28.8 64-64s-28.8-64-64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 