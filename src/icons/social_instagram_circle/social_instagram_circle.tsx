import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_instagram_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_instagram_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM832 151.104c0-12.736-10.368-23.104-23.104-23.104h-593.792c-12.736 0-23.104 10.368-23.104 23.104v593.792c0 12.736 10.368 23.104 23.104 23.104h593.792c12.736 0 23.104-10.368 23.104-23.104v-593.792zM384 448c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM640 704h128v-128h-128zM702.4 448c0-105.024-85.44-190.4-190.4-190.4s-190.4 85.376-190.4 190.4c0 13.632 1.6 19.136 4.288 32h-69.888v-288h512v288h-69.888c2.752-12.864 4.288-18.368 4.288-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 