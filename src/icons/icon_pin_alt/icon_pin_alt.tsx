import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_pin_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_pin_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M518.784 434.432c91.968 0 166.784 74.816 166.784 166.784s-74.816 166.784-166.784 166.784-166.784-74.816-166.784-166.784c0-91.968 74.816-166.784 166.784-166.784zM518.784 704c56.64 0 102.784-46.080 102.784-102.784s-46.080-102.784-102.784-102.784-102.784 46.144-102.784 102.784 46.080 102.784 102.784 102.784zM495.488-46.656c5.376-5.952 10.56-9.792 15.552-12.48 0.064-0.064 0.192-0.064 0.256-0.128 3.456-1.792 6.848-3.136 10.048-3.136s6.592 1.344 10.048 3.136c0.064 0.064 0.192 0.064 0.256 0.128 4.992 2.688 10.176 6.528 15.552 12.48 0 0 297.472 323.52 327.36 603.84 1.792 14.464 3.008 29.12 3.008 44.032 0 198.144-160.64 358.784-358.784 358.784s-358.784-160.64-358.784-358.784c0-15.168 1.216-29.952 3.072-44.608 30.656-280.192 332.416-603.264 332.416-603.264zM518.784 896c162.56 0 294.784-132.224 294.784-294.784 0-10.816-0.768-22.336-2.624-37.248-22.912-214.784-224.576-466.816-289.536-543.488-66.624 76.8-271.168 328.192-294.848 544-1.728 14.144-2.56 25.792-2.56 36.736 0 162.56 132.224 294.784 294.784 294.784z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 