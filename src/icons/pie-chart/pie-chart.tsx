import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pie-chart.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pie-chart'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512-56.006c162.52 0 306.636 77.274 398.774 196.582l-398.774 307.424v504.006c-278.384 0-504.006-225.622-504.006-504.006s225.622-504.006 504.006-504.006zM449 884.572v-436.572c0-19.49 9.056-37.996 24.512-49.908l345.322-266.274c-81.806-79.932-190.674-124.822-306.834-124.822-243.144 0-441.002 197.86-441.002 441.004 0 221.784 164.588 405.86 378.002 436.572zM598.626 943.538v-450.748l359.892-277.4c36.52 69.596 57.49 148.542 57.49 232.61 0 248.754-180.438 454.392-417.378 495.538v0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 