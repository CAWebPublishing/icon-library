import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_pens_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_pens_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M128 832v-576l128-320 128 320-0.32 0.128c0.192 0.192 0.128 0.512 0.32 0.704v575.168c0 70.72-57.28 128-128 128s-128-57.28-128-128zM192 832c0 35.264 28.736 64 64 64s64-28.736 64-64v-64h-128v64zM256 108.352l-46.72 116.736 46.72 23.36 46.72-23.36-0.96-2.432-12.8-32-32.96-82.304zM805.888 769.344l-60.48 154.688-0.576-0.128c-3.008 20.288-19.712 36.096-40.832 36.096-20.864 0-37.952-16.064-41.344-36.16l-0.64 0.128-59.904-154.624-26.112-65.344v-640c0-70.72 57.28-128 128-128s128 57.28 128 128c35.328 0 64 28.672 64 64v192c0 35.328-28.672 64-64 64v320l-26.112 65.344zM746.432 745.536l16.64-41.536h-118.144l16.64 41.536 8.96 22.464 33.472 83.648 33.472-83.648 8.96-22.464z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 