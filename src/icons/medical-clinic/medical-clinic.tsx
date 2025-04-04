import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './medical-clinic.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/medical-clinic'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1014.4 407.466l-476.8 476.8c-3.2 3.2-12.8 9.6-22.4 9.6s-19.2-3.2-22.4-9.6l-483.2-476.8c-6.4-3.2-9.6-12.8-9.6-22.4 0-19.2 12.8-32 32-32 9.6 0 19.2 3.2 22.4 9.6l460.8 454.4 454.4-454.4c9.6-3.2 12.8-9.6 22.4-9.6 19.2 0 32 12.8 32 32 0 9.6-3.2 19.2-9.6 22.4zM128 381.866v-355.2c0-35.2 28.8-64 64-64h640c35.2 0 64 28.8 64 64v358.4l-380.8 384-387.2-387.2zM569.6 461.866c3.2-3.2 3.2-6.4 3.2-9.6v-108.8h108.8c3.2 0 9.6 0 9.6-3.2 3.2-3.2 3.2-6.4 3.2-9.6v-96c0-3.2 0-9.6-3.2-9.6-3.2-3.2-6.4-3.2-9.6-3.2h-108.8v-108.8c0-3.2 0-9.6-3.2-9.6-3.2-3.2-6.4-3.2-9.6-3.2h-92.8c-3.2 0-9.6 0-9.6 3.2-3.2 3.2-3.2 6.4-3.2 9.6v108.8h-108.8c-3.2 0-9.6 0-9.6 6.4-3.2 3.2-3.2 6.4-3.2 9.6v92.8c0 3.2 0 9.6 3.2 9.6 3.2 3.2 6.4 3.2 9.6 3.2h108.8v108.8c0 3.2 0 9.6 3.2 9.6 3.2 3.2 6.4 3.2 9.6 3.2h92.8c3.2 3.2 6.4 0 9.6-3.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 