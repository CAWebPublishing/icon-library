import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './bowling.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/bowling'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 895.267c-258.8 0-468.6-209.8-468.6-468.6s209.8-468.6 468.6-468.6c258.8 0 468.6 209.8 468.6 468.6s-209.8 468.6-468.6 468.6zM281.4 683.867c-1.4-1.2-131.4-134.2-95.4-310.6 3-14.2-6.2-28.2-20.6-31.2-1.8-0.4-3.6-0.6-5.4-0.6-12.2 0-23.2 8.6-25.8 21-42 204.8 103.6 352.4 109.8 358.6 10.4 10.2 27 10.2 37.2-0.2 10.6-10 10.4-26.6 0.2-37zM642.4 485.067c-20.4-20.4-58-16.2-84 9.8-25.8 26-30.2 63.4-9.8 83.8 20.4 20.6 58 16.2 84-9.8 25.8-25.6 30.2-63.2 9.8-83.8zM661.2 647.067c-20.4-20.4-58-16.2-83.8 9.8-25.8 25.8-30.2 63.4-9.8 84 20.4 20.4 58 16.2 83.8-9.8 26-26 30.4-63.6 9.8-84zM816 526.467c-20.4-20.4-58-16.2-84 9.8-25.8 25.8-30.2 63.4-9.8 83.8s58 16.2 84-9.8c25.8-25.8 30.2-63.2 9.8-83.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 