import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 64c17.664 0 32 14.336 32 32v626.752l137.344-137.344c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-192 192c-2.944 2.944-6.464 5.248-10.368 6.848-7.808 3.264-16.64 3.264-24.448 0-3.84-1.536-7.232-3.84-10.176-6.72-0.064-0.064-0.128-0.064-0.256-0.128l-192-192c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l137.408 137.344v-626.752c0-17.664 14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 