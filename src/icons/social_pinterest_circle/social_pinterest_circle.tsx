import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_pinterest_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_pinterest_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM551.936 309.568c-37.44 2.88-53.12 21.44-82.432 39.296-16.128-84.608-35.84-165.76-94.208-208.064-18.048 127.808 26.432 223.808 47.104 325.76-35.2 59.328 4.224 178.56 78.464 149.184 91.328-36.16-79.168-220.352 35.328-243.328 119.488-24.064 168.32 207.36 94.208 282.624-107.136 108.672-311.68 2.496-286.528-153.088 6.144-38.016 45.376-49.536 15.68-102.080-68.544 15.168-89.024 69.248-86.4 141.312 4.224 117.952 105.984 200.512 208.064 211.968 129.088 14.464 250.176-47.36 266.944-168.768 18.88-137.024-58.24-285.504-196.224-274.816z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 