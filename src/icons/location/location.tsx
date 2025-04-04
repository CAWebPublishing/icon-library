import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './location.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/location'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M488.704-46.656c5.376-5.952 10.56-9.792 15.552-12.48 0.064-0.064 0.192-0.064 0.256-0.128 3.456-1.792 6.848-3.136 10.048-3.136s6.592 1.344 10.048 3.136c0.064 0.064 0.192 0.064 0.256 0.128 4.992 2.688 10.176 6.528 15.552 12.48 0 0 297.472 323.52 327.36 603.84 1.792 14.464 3.008 29.12 3.008 44.032 0 198.144-160.64 358.784-358.784 358.784s-358.784-160.64-358.784-358.784c0-15.168 1.216-29.952 3.072-44.608 30.656-280.192 332.416-603.264 332.416-603.264zM512 832c127.232 0 230.784-103.552 230.784-230.784s-103.552-230.784-230.784-230.784-230.784 103.552-230.784 230.784c0 127.232 103.552 230.784 230.784 230.784z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 