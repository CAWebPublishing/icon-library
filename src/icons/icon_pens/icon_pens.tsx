import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_pens.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_pens'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128 768v-512l128-320 128 320-0.32 0.128c0.192 0.192 0.128 0.512 0.32 0.704v575.168c0 70.72-57.28 128-128 128s-128-57.28-128-128v-64zM192 832c0 35.264 28.736 64 64 64s64-28.736 64-64v-64h-128v64zM256 108.352l-46.72 116.736 46.72 23.36 46.72-23.36-0.96-2.432-12.8-32-32.96-82.304zM320 288l-64 32-64-32v416h128v-416zM805.888 769.344l-61.312 158.656-0.576-0.192c-4.48 18.304-20.288 32.192-40 32.192-21.184 0-37.888-15.872-40.832-36.224l-1.152 0.256-59.904-154.688-26.112-65.344v-640c0-70.72 57.28-128 128-128s128 57.28 128 128c35.328 0 64 28.672 64 64v192c0 35.328-28.672 64-64 64v320l-26.112 65.344zM768 320v-256c0-35.264-28.736-64-64-64s-64 28.736-64 64v640h128v-384zM737.472 768h-66.944l33.472 83.648 33.472-83.648z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 