import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_picassa_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_picassa_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM512 832c50.944 0 99.52-9.92 144-27.904v-267.776l-273.344 273.344c40.384 14.4 83.968 22.336 129.344 22.336zM139.2 355.584c-7.296 29.568-11.2 60.544-11.2 92.416 0 145.088 80.384 271.296 199.104 336.64l120.576-120.64-308.48-308.416zM320 115.392c-70.976 41.024-127.552 104.128-160.384 179.904l160.384 160.384v-340.288zM512 64c-50.944 0-99.52 9.92-144 27.968v164.032h476.608c-66.432-114.752-190.464-192-332.608-192zM868.032 304h-164.032v476.608c114.752-66.432 192-190.464 192-332.608 0-50.944-9.92-99.52-27.968-144z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 