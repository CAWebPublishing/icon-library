import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_currency.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_currency'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M544 896c-265.088 0-480-214.912-480-480s214.912-480 480-480 480 214.912 480 480-214.912 480-480 480zM544 0c-229.376 0-416 186.624-416 416s186.624 416 416 416 416-186.624 416-416-186.624-416-416-416zM598.848 640c57.984 0 105.152-43.072 105.152-96 0-17.664 14.336-32 32-32s32 14.336 32 32c0 88.256-75.904 160-169.152 160h-22.848v32c0 17.664-14.336 32-32 32s-32-14.336-32-32v-32h-22.848c-93.248 0-169.152-71.744-169.152-160s75.904-160 169.152-160h22.848v-192h-22.848c-57.984 0-105.152 43.072-105.152 96 0 17.664-14.336 32-32 32s-32-14.336-32-32c0-88.256 75.904-160 169.152-160h22.848v-32c0-17.664 14.336-32 32-32s32 14.336 32 32v32h22.848c93.248 0 169.152 71.744 169.152 160s-75.904 160-169.152 160h-22.848v192h22.848zM598.848 384c57.984 0 105.152-43.072 105.152-96s-47.168-96-105.152-96h-22.848v192h22.848zM512 448h-22.848c-57.984 0-105.152 43.072-105.152 96s47.168 96 105.152 96h22.848v-192z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 