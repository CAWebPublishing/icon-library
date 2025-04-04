import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pushpin.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pushpin'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M256 335.552c0-49.088 123.52-75.136 256.064-78.784 0-0.256-0.064-0.512-0.064-0.768v-192c0-35.328 14.336-128 32-128s32 92.672 32 128v192c0 0.256-0.064 0.512-0.064 0.768 132.544 3.648 256.064 29.696 256.064 78.784 0 52.096-47.168 90.112-128 110.592v331.456c80.832 27.392 128 71.488 128 102.848 0 106.048-576 106.048-576 0 0-34.496 47.168-77.632 128-104v-330.304c-80.832-20.544-128-58.496-128-110.592z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 