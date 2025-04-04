import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_tag.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_tag'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M993.856 959.68c-0.576 0-1.152 0-1.728 0-0.512 0-0.96 0.064-1.472 0h-402.368c-9.792-0.448-32.064-15.744-34.944-18.624l-470.656-470.656c-24.96-24.96-24.96-65.408 0-90.368l361.344-361.344c12.544-12.48 28.864-18.688 45.184-18.688s32.704 6.208 45.184 18.688l470.656 470.656c2.88 2.88 18.944 22.656 18.944 34.944v403.648c0.896 17.856-12.608 31.744-30.144 31.744zM928 832c-17.664 0-32 14.336-32 32s14.336 32 32 32 32-14.336 32-32c0-17.664-14.336-32-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 