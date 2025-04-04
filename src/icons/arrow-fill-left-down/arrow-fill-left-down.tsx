import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-fill-left-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-fill-left-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M204.608 755.392c-187.456-187.456-187.456-491.392 0-678.848s491.392-187.456 678.848 0c187.456 187.456 187.456 491.392 0 678.848-187.52 187.456-491.392 187.456-678.848 0zM781.952 608.64l-352.704-352.64h194.304c17.664 0 32-14.336 32-32s-14.336-32-32-32h-271.552c-4.16 0-8.32 0.832-12.224 2.496-3.84 1.6-7.232 3.904-10.112 6.72-0.064 0.064-0.192 0.064-0.256 0.192-0.128 0.128-0.128 0.256-0.256 0.384-2.816 2.88-5.12 6.272-6.656 10.048-1.6 3.84-2.496 7.936-2.496 12.032 0 0.064 0 0.064 0 0.128v271.552c0 17.664 14.336 32 32 32s32-14.336 32-32v-194.304l352.64 352.64c12.48 12.48 32.768 12.48 45.248 0s12.544-32.704 0.064-45.248z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 