import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_twitter_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_twitter_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM641.28 128l-175.36 251.52-216.96-251.52h-55.68l247.68 286.72-246.4 353.28h189.44l161.28-231.68 199.68 231.68h55.68l-230.4-266.88 259.84-373.12h-189.44zM273.28 728.32l390.4-560h88.32l-390.4 560h-88.32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 