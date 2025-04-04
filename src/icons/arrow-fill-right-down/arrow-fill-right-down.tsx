import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow-fill-right-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow-fill-right-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M204.608 755.392c-187.456-187.456-187.456-491.392 0-678.848s491.392-187.456 678.848 0c187.456 187.456 187.456 491.392 0 678.848-187.52 187.456-491.392 187.456-678.848 0zM768 224c0-0.064 0-0.064 0-0.128 0-4.16-0.832-8.256-2.432-12.096-3.264-7.808-9.472-14.080-17.28-17.28-3.968-1.664-8.128-2.496-12.288-2.496h-271.552c-17.664 0-32 14.336-32 32s14.336 32 32 32h194.304l-352.64 352.64c-12.48 12.48-12.48 32.768 0 45.248s32.768 12.48 45.248 0l352.64-352.64v194.304c0 17.664 14.336 32 32 32s32-14.336 32-32v-271.552z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 