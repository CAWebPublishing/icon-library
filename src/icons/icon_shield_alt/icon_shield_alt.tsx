import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_shield_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_shield_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M494.4-61.504c5.76-1.664 11.712-2.496 17.6-2.496s11.84 0.832 17.6 2.496c396.096 113.152 454.4 513.536 429.952 709.504-4.032 31.936-31.296 56-63.552 56-9.152 0.704-64 10.176-64 128 0 16.96-6.72 33.28-18.752 45.248-13.824 13.824-93.248 82.752-301.248 82.752s-287.424-68.928-301.248-82.752c-12.032-11.968-18.752-28.288-18.752-45.248 0-117.824-54.848-127.296-65.856-128.064-32.256 0-57.664-24-61.696-56-24.448-195.904 33.92-596.288 429.952-709.44zM128 640c0 0 128 0 128 192 0 0 64 64 256 64v-448h376.896c-25.216-159.424-109.824-371.712-376.896-448v448h-376.896c-17.024 108.032-7.104 192-7.104 192z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 