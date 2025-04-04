import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_linkedin_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_linkedin_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM384 200h-128v448h128v-448zM323.968 675.456c-33.152 0-59.968 26.88-59.968 60.032s26.88 60.032 59.968 60.032c33.152-0.064 60.032-26.944 60.032-60.032 0-33.152-26.88-60.032-60.032-60.032zM832 200h-128v276.992c0 32.448-9.28 55.168-49.152 55.168-66.112 0-78.848-55.168-78.848-55.168v-276.992h-128v448h128v-42.816c18.304 14.016 64 42.752 128 42.752 41.536 0 128-24.832 128-174.848v-273.088z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 