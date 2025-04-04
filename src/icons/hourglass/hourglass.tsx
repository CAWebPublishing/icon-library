import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './hourglass.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/hourglass'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M806.996 605.762v255.23h29.086c16.52 0 29.914 13.216 29.914 29.5s-13.394 29.5-29.914 29.5h-589.164c-16.52 0-29.914-13.216-29.914-29.5s13.394-29.5 29.914-29.5h29.086v-255.23c0-16.814 7.198-32.862 19.764-44.072l127.558-113.694-127.558-113.692c-12.568-11.21-19.764-27.258-19.764-44.072v-255.23h-29.086c-16.52 0-29.914-13.216-29.914-29.5s13.394-29.5 29.914-29.5h589.222c16.462 0 29.854 13.216 29.854 29.5s-13.394 29.5-29.914 29.5h-29.086v255.23c0 16.816-7.198 32.864-19.764 44.072l-127.558 113.692 127.558 113.692c12.568 11.21 19.764 27.258 19.764 44.072zM747.996 605.762l-176.996-157.762 176.996-157.764v-255.23h-412.996v255.23l176.996 157.764-176.996 157.764v255.23h412.996v-255.23zM688.996 691.192v51.802h-294.996v-51.802l147.5-131.452zM394 204.572v-110.566h294.996v110.566l-74.516 66.434h-145.966z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 