import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './roadways.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/roadways'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M310.334 474.89h60.5l13.444 50.418h-50.418zM407.806 599.25h-40.332l-20.166-43.694h47.056zM817.86 165.668l-53.778 110.916h-84.028l23.528-80.668h-121l-47.056 544.5h43.694l366.36-524.332c36.972 70.584 57.14 147.89 57.14 231.914 0 275.612-221.832 500.806-490.72 500.806s-490.72-225.194-490.72-500.806c0-77.306 16.808-147.89 47.056-215.11l356.276 507.526h43.694l-57.14-584.832h-137.806l36.974 124.36h-77.306l-36.974-84.028h-107.554c84.028-147.89 242.002-248.722 423.498-248.722 168.054 0 315.944 87.388 403.332 218.474h-97.472zM680.054 468.166l-20.166 50.418h-50.418l13.446-50.418zM733.832 347.168l-33.61 77.304h-63.86l23.528-77.306zM259.916 353.888h73.942l23.528 77.304h-63.86zM585.942 595.89l13.446-43.694h47.056l-20.166 43.694z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 