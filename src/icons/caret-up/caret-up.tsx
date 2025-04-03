import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-up.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-up'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M358.976 313.6l185.024 185.024 185.024-185.024c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-207.552 207.552c-6.272 6.272-14.464 9.344-22.72 9.344s-16.448-3.072-22.72-9.344l-207.552-207.552c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 