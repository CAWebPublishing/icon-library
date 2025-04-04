import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_picassa.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_picassa'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M256 4.544v453.696l-213.888-213.824c43.84-101.056 119.296-185.152 213.888-239.872zM320-26.752c59.264-24 124.096-37.248 192-37.248 189.504 0 354.944 102.976 443.456 256h-635.456v-218.752zM426.24 736l-160.768 160.832c-158.272-87.104-265.472-255.424-265.472-448.832 0-42.496 5.184-83.776 14.976-123.264l411.264 411.264zM704 922.752c-59.328 24-124.096 37.248-192 37.248-60.544 0-118.592-10.56-172.48-29.824l364.48-364.416v356.992zM768 891.456v-635.456h218.752c24 59.328 37.248 124.096 37.248 192 0 189.504-102.976 354.944-256 443.456z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 