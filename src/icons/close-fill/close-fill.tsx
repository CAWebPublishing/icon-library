import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './close-fill.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/close-fill'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M543.466 888.532c-260.668 0-471.998-211.33-471.998-471.998s211.33-471.998 471.998-471.998 471.998 211.328 471.998 471.998-211.328 471.998-471.998 471.998zM762.158 590.732l-175.394-175.394 155.192-173.002c12.272-12.272 12.272-32.222 0-44.494s-32.222-12.272-44.494 0l-155.192 173.004-173.002-173.002c-12.272-12.272-32.222-12.272-44.494 0s-12.272 32.222 0 44.494l175.394 175.394-155.192 173.004c-12.272 12.272-12.272 32.222 0 44.494s32.222 12.272 44.494 0l155.192-173.002 173.002 173.002c12.272 12.272 32.222 12.272 44.494 0s12.272-32.222 0-44.494z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 