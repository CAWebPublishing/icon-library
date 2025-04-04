import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './check-mark.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/check-mark'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M442.82 148.132c1.25-1 2.002-2.376 3.314-3.316 1.878-1.25 4.002-1.5 6.004-2.376 2.378-1.126 4.69-2.188 7.192-2.876 2.44-0.626 4.816-0.938 7.318-1.126 3.564-0.376 7.006-0.376 10.51 0.126 1.44 0.25 2.814 0.626 4.252 1 4.316 1.062 8.32 2.752 12.26 5.13 0.688 0.438 1.25 0.938 1.94 1.376 2.564 1.75 5.318 3.066 7.506 5.442 1.564 1.688 2.252 3.878 3.502 5.754 0.062 0.062 0.188 0.126 0.188 0.188l372.74 597.422c13.26 20.204 7.568 47.35-12.698 60.612s-47.35 7.57-60.612-12.698l-344.278-551.76-190.404 185.212c-17.764 16.452-45.412 15.388-61.862-2.376-16.388-17.764-15.324-45.474 2.438-61.864l229.062-222.868c0.438-0.438 1.062-0.562 1.626-1z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 