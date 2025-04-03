import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './check-line.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/check-line'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M514.688 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512-229.248 512-512 512zM514.688 0c-247.040 0-448 200.96-448 448s200.96 448 448 448 448-200.96 448-448-201.024-448-448-448zM738.944 651.648c-20.672 13.568-48.448 7.744-62.016-12.992l-216.064-330.176-103.296 95.616c-18.176 16.768-46.528 15.68-63.36-2.496s-15.68-46.464 2.496-63.296l142.784-132.096c0.512-0.448 1.152-0.576 1.664-1.024 1.28-1.024 2.048-2.432 3.392-3.392 1.92-1.28 4.096-1.536 6.144-2.432 2.432-1.152 4.8-2.24 7.36-2.944 2.496-0.64 4.928-0.96 7.488-1.152 3.648-0.384 7.168-0.384 10.752 0.128 1.472 0.256 2.88 0.64 4.352 1.024 4.416 1.088 8.512 2.816 12.544 5.248 0.704 0.448 1.28 0.96 1.984 1.408 2.624 1.792 5.44 3.136 7.68 5.568 1.6 1.728 2.304 3.968 3.584 5.888 0.064 0.064 0.192 0.128 0.192 0.192l245.248 374.848c13.568 20.736 7.744 48.512-12.928 62.080z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 