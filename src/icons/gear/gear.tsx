import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './gear.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/gear'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M841.9 543c-7.2 25.1-17 48.9-29.4 71.3l56.9 119.7c-21.1 26.3-45.1 50.3-71.4 71.4l-119.7-56.9c-22.3 12.4-46.3 22.2-71.3 29.4l-44.6 125.2c-16.5 1.8-33.3 2.9-50.4 2.9s-33.9-1.1-50.4-2.9l-44.6-125.2c-25-7.2-48.9-17.1-71.3-29.4l-119.7 56.9c-26.3-21.1-50.3-45.1-71.4-71.4l56.9-119.7c-12.4-22.3-22.2-46.3-29.4-71.3l-125.2-44.6c-1.8-16.5-2.9-33.3-2.9-50.4s1.1-33.9 2.9-50.4l125.2-44.6c7.2-25.1 17-48.9 29.4-71.3l-56.9-119.7c21.1-26.3 45.1-50.3 71.4-71.4l119.7 56.9c22.3-12.4 46.3-22.2 71.3-29.4l44.5-125.2c16.5-1.8 33.3-2.9 50.4-2.9s33.9 1.1 50.4 2.9l44.7 125.2c25.1 7.2 48.9 17 71.3 29.4l119.7-56.9c26.3 21.1 50.3 45.1 71.4 71.4l-56.9 119.7c12.4 22.3 22.2 46.3 29.4 71.3l125.2 44.5c1.8 16.5 2.9 33.3 2.9 50.4s-1.1 33.9-2.9 50.4l-125.2 44.7zM512 219c-126.5 0-229 102.5-229 229s102.5 229 229 229 229-102.5 229-229-102.5-229-229-229z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 