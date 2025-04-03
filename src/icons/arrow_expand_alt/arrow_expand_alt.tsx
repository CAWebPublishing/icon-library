import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_expand_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_expand_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M160 448c-17.664 0-32-14.336-32-32v-320c0-0.064 0-0.064 0-0.128 0-4.16 0.832-8.256 2.432-12.096 1.536-3.776 3.84-7.168 6.656-10.048 0.128-0.128 0.128-0.256 0.256-0.384 0.064-0.064 0.192-0.064 0.256-0.192 2.88-2.816 6.336-5.184 10.112-6.72 3.968-1.6 8.128-2.432 12.288-2.432h320c17.664 0 32 14.336 32 32s-14.336 32-32 32h-242.752l594.752 594.752v-242.752c0-17.664 14.336-32 32-32s32 14.336 32 32v320c0 4.16-0.832 8.32-2.496 12.224-3.264 7.808-9.472 14.080-17.28 17.28-3.904 1.664-8.064 2.496-12.224 2.496h-320c-17.664 0-32-14.336-32-32s14.336-32 32-32h242.752l-594.752-594.752v242.752c0 17.664-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 