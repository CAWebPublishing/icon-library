import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_condense.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_condense'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M950.656 886.656c-12.48 12.48-32.768 12.48-45.248 0l-265.408-265.408v178.752c0 17.664-14.336 32-32 32s-32-14.336-32-32v-256c0-0.064 0-0.064 0-0.128 0-4.096 0.896-8.192 2.496-12.096 1.536-3.776 3.84-7.168 6.656-10.048 0.064-0.128 0.128-0.256 0.192-0.384 0.128-0.064 0.192-0.064 0.256-0.128 2.88-2.816 6.336-5.184 10.112-6.72 3.968-1.664 8.128-2.496 12.288-2.496h256c17.664 0 32 14.336 32 32s-14.336 32-32 32h-178.752l265.344 265.344c12.544 12.544 12.544 32.768 0.064 45.312zM73.344 9.344c12.48-12.48 32.768-12.48 45.248 0l265.408 265.408v-178.752c0-17.664 14.336-32 32-32s32 14.336 32 32v256c0 4.16-0.832 8.32-2.496 12.224-3.264 7.808-9.472 14.080-17.28 17.28-3.904 1.664-8.064 2.496-12.224 2.496h-256c-17.664 0-32-14.336-32-32s14.336-32 32-32h178.752l-265.344-265.344c-12.544-12.544-12.544-32.768-0.064-45.312z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 