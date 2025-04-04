import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './directions.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/directions'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M583.8 499.267v165h84c8.2 0 11.2 5.6 6.4 12.4l-153.4 219.6c-4.8 6.8-12.4 6.8-17.2 0l-153.4-219.6c-4.8-6.8-1.8-12.4 6.4-12.4h78.6v-165c27.2-13.8 52.2-31.2 74.2-51.6 22.2 20.4 47.2 37.8 74.4 51.6zM286.6 503.067h-10.6v81.4c0 8.2-5.6 11.2-12.4 6.4l-219.4-153.2c-6.8-4.8-6.8-12.4 0-17.2l219.4-153.4c6.8-4.8 12.4-1.8 12.4 6.4v81h10.6c53.2 0 100-28.2 126.2-70.2 13 53.2 39 101.2 74.4 140.8-53 48.4-123.4 78-200.6 78zM974.8 437.667l-219.4 153.4c-6.8 4.8-12.4 1.8-12.4-6.4v-81.4h-10.6c-163.8 0-297.2-133.4-297.2-297.2v-253.8h148.6v253.6c0 82 66.6 148.6 148.6 148.6h10.6v-81c0-8.2 5.6-11.2 12.4-6.4l219.4 153.4c6.8 4.6 6.8 12.4 0 17.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 