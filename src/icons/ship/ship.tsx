import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './ship.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/ship'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M505.4-68.933h-130.4l-151.6 374.8v4.8l282 84.4v-464zM809.2 310.667v-4.8l-151.6-374.8h-130.4v464l282-84.4zM516.2 486.067h30.2l262.8-76.6v-76.2l-282 84.4h-21.8l-282-84.4v76.2l262.8 76.6h30zM485 850.067h16v68.4h34.6v-68.4h16v-35.2h-9v-3.6l84.8-234.8h8.6v-33.8h87.6v-93.4l-26 6.4-11.8 48.6h-335.2l-10.2-49-27.4-6v93.4h87.6v33.8h8.6l84.8 234.6v3.6h-9v35.4zM418.6 576.267h31.8v32.6h50.6v177.8h-6.4l-76-210.4zM541.8 786.667h-6.4v-177.8h50.6v-32.6h31.8l-76 210.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 