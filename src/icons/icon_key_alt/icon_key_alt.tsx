import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_key_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_key_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M352 160c0 19.008-4.096 37.376-12.16 54.464-20.992 44.672-66.496 73.536-115.84 73.536-70.592 0-128-57.408-128-128 0-12.608 2.368-24.512 5.76-36.032 21.44-35.328 50.88-64.768 86.208-86.208 11.52-3.392 23.424-5.76 36.032-5.76 70.592 0 128 57.408 128 128zM224 224c24.704 0 47.424-14.464 57.984-36.8 3.968-8.512 6.016-17.664 6.016-27.2 0-35.264-28.736-64-64-64s-64 28.736-64 64 28.736 64 64 64zM992 960h-138.496c-7.552 0-14.848-2.688-20.672-7.552l-453.12-382.656c-20.864 4.16-40.512 6.208-59.712 6.208-176.448 0-320-143.552-320-320s143.552-320 320-320 320 143.552 320 320c0 33.664-5.376 66.944-16 99.2l97.408 63.296c9.088 5.888 14.592 16 14.592 26.816v116.288l121.664 6.4c15.872 0.832 28.672 13.184 30.144 28.992l11.648 123.264 106.304 50.816c11.2 5.376 18.24 16.64 18.24 28.928v128c0 17.664-14.336 32-32 32zM960 820.16l-104.448-49.92c-10.112-4.864-17.024-14.656-18.048-25.856l-10.752-113.856-124.416-6.528c-17.024-0.96-30.336-14.976-30.336-32v-129.28l-104.448-67.904c-12.992-8.448-18.112-25.024-12.032-39.296 13.632-32.064 20.48-65.536 20.48-99.52 0-141.184-114.816-256-256-256-48.448 0-93.312 14.272-132.032 37.76-35.328 21.44-64.768 50.88-86.208 86.208-23.488 38.72-37.76 83.584-37.76 132.032 0 141.184 114.816 256 256 256 18.88 0 38.72-2.624 60.672-7.936 9.92-2.432 20.416 0 28.224 6.656l456.32 385.28h94.784v-75.84z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 