import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './key.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/key'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M900.872 841.008c-95.154 95.154-244.072 95.154-339.226 0-66.188-66.19-86.882-161.344-57.918-244.074l-413.686-413.684v-128.24l37.236-37.236h82.73l12.408 12.408v86.882l37.236 37.236h70.324l20.68 20.68v62.052l37.238 37.236h66.188l24.816 24.816v70.326l37.238 37.236h62.052c0 0 12.408-12.408 24.816-20.68l57.918 57.918c82.73-28.966 177.884-8.272 244.072 57.918 91.018 95.154 91.018 244.072-4.136 339.226zM793.31 646.564c-49.644 0-86.882 37.236-86.882 86.882 0 45.51 37.236 86.882 86.882 86.882s86.882-37.236 86.882-86.882c-4.136-49.644-41.374-86.882-86.882-86.882z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 