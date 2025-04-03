import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_map_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_map_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M973.888 830.464l-288 128c-4.544 1.024-9.216 1.536-13.888 1.536-4.16 0-8.384-0.384-12.48-1.216l-308.096-125.376-273.472 125.056c-4.608 1.024-9.28 1.536-13.952 1.536-14.4 0-28.544-4.864-40-14.080-15.168-12.096-24-30.464-24-49.92v-768c0-29.952 20.8-55.936 50.048-62.464l286.656-128c4.608-1.024 9.28-1.536 13.952-1.536 4.16 0 8.384 0.384 12.48 1.216l308.096 125.376 274.816-125.056c4.672-1.024 9.344-1.536 13.952-1.536 14.4 0 28.608 4.864 40.064 14.080 15.104 12.16 23.936 30.528 23.936 49.92v768c0 30.016-20.864 56-50.112 62.464zM384 781.248l256 101.952v-768l-256-101.952v768zM64 896l256-114.304v-768l-256 114.304v768zM960 0l-256 113.792v768l256-113.792v-768z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 