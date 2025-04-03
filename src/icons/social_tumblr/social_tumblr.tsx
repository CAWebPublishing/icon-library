import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_tumblr.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_tumblr'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M329.472 181.248c0-46.784 4.928-82.56 14.72-107.2 9.856-24.64 27.392-47.936 52.864-69.824 25.344-21.76 56.064-38.72 92.032-50.56 36.032-11.776 63.552-17.664 110.4-17.664 41.216 0 79.552 4.16 115.072 12.416 35.456 8.32 73.6 20.352 117.312 40.896v153.984c-51.264-33.728-81.92-40.576-133.76-40.576-29.12 0-54.976 6.784-77.696 20.416-17.088 10.048-32.704 27.456-38.976 44.16-6.336 16.832-5.568 51.072-5.568 110.528l0.128 234.176h255.936v192h-255.936v256h-165.12c-6.528-52.8-18.56-96.384-35.904-130.496-17.344-34.24-40.384-63.488-69.12-87.936-28.544-24.384-73.536-43.136-113.728-56.192v-173.376h137.408v-330.752z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 