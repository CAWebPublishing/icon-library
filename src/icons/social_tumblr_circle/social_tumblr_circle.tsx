import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_tumblr_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_tumblr_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM703.936 486.4h-153.536l-0.064-140.48c0-35.648-0.448-56.192 3.328-66.304 3.776-10.048 13.12-20.48 23.36-26.496 13.632-8.192 29.12-12.224 46.592-12.224 31.104 0 49.472 4.096 80.256 24.32v-92.416c-26.24-12.352-49.088-19.52-70.4-24.512-21.248-4.992-44.224-7.488-68.992-7.488-28.096 0-44.672 3.52-66.24 10.624s-40 17.28-55.232 30.336c-15.296 13.12-25.792 27.136-31.744 41.92-5.888 14.784-8.832 36.224-8.832 64.32v215.424h-82.368v87.040c24.128 7.808 51.136 19.072 68.288 33.728 17.216 14.656 31.040 32.192 41.472 52.736 10.368 20.416 17.536 46.592 21.504 78.272h99.072v-153.6h153.536v-115.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 