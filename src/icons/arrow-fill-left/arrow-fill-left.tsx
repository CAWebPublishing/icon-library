import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-fill-left.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-fill-left'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM896 416c0-17.664-14.336-32-32-32h-498.752l137.344-137.344c12.48-12.48 12.48-32.768 0-45.248s-32.768-12.48-45.248 0l-192 192c-0.064 0.064-0.128 0.192-0.192 0.32-2.816 2.88-5.12 6.272-6.656 10.048-1.6 3.904-2.496 8-2.496 12.096 0 0.064 0 0.064 0 0.128v0c0 4.16 0.832 8.32 2.496 12.224 1.536 3.776 3.84 7.168 6.656 10.048 0.128 0.128 0.128 0.256 0.256 0.384l192 192c12.48 12.48 32.768 12.48 45.248 0s12.48-32.768 0-45.248l-137.408-137.408h498.752c17.664 0 32-14.336 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 