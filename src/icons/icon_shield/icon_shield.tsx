import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_shield.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_shield'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M494.4-61.504c5.76-1.664 11.712-2.496 17.6-2.496s11.84 0.832 17.6 2.496c396.096 113.152 454.4 513.536 429.952 709.504-4.032 31.936-31.296 56-63.552 56-9.152 0.704-64 10.176-64 128 0 16.96-6.72 33.28-18.752 45.248-13.824 13.824-93.248 82.752-301.248 82.752s-287.424-68.928-301.248-82.752c-12.032-11.968-18.752-28.288-18.752-45.248 0-117.824-54.848-127.296-65.856-128.064-32.256 0-57.664-24-61.696-56-24.448-195.904 33.92-596.288 429.952-709.44zM128 640c0 0 128 0 128 192 0 0 64 64 256 64s256-64 256-64c0-192 128-192 128-192s64-512-384-640c-448 128-384 640-384 640zM512 320c35.328 0 64 28.672 64 64v320c0 35.328-28.672 64-64 64s-64-28.672-64-64v-320c0-35.328 28.672-64 64-64zM448 192c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 