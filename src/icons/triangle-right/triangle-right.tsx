import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './triangle-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/triangle-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M444.608 200.768l244.864 224.512c13.696 12.48 13.696 32.768 0 45.248-0.384 0.32-0.896 0.448-1.28 0.768l-243.584 224c-13.696 12.48-35.968 12.48-49.664 0-0.064-0.128-0.128-0.32-0.256-0.448-6.528-5.76-10.688-13.824-10.688-22.848v-448c0-9.152 4.352-17.28 11.072-23.104l-0.128-0.128c13.76-12.544 35.968-12.544 49.664 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 