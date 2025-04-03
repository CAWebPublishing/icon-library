import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_drive.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_drive'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 832c-3.968 62.656-57.28 128-128 128h-640c-70.72 0-124.032-65.344-128-128l-64-685.312c0-3.008 0.704-6.72 0.896-9.92-0.192-2.944-0.896-5.76-0.896-8.768v-64c0-70.72 57.28-128 128-128h768c70.72 0 128 57.28 128 128v64c0 3.008-0.704 5.824-0.896 8.704 0.192 3.264 0.896 6.976 0.896 9.984l-64 685.312zM64 64v64c0 35.264 28.736 64 64 64h768c35.264 0 64-28.736 64-64v-64c0-35.264-28.736-64-64-64h-768c-35.264 0-64 28.736-64 64zM127.872 827.904c1.984 31.488 30.464 68.096 64.128 68.096h640c33.664 0 62.144-36.608 64.256-69.952l54.4-582.784c-16.576 7.936-35.008 12.736-54.656 12.736h-768c-19.648 0-38.080-4.8-54.72-12.736l54.592 584.64zM832 96c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM704 96c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32zM160 64h448c17.664 0 32 14.336 32 32s-14.336 32-32 32h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 