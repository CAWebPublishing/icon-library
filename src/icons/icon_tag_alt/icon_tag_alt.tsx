import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_tag_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_tag_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M993.856 959.68c-0.576 0-1.152 0-1.728 0-0.512 0-0.96 0.064-1.472 0h-402.368c-9.792-0.448-32.064-15.744-34.944-18.624l-470.656-470.656c-24.96-24.96-24.96-65.408 0-90.368l361.344-361.344c12.544-12.48 28.864-18.688 45.184-18.688s32.704 6.208 45.184 18.688l470.656 470.656c2.88 2.88 18.944 22.656 18.944 34.944v403.648c0.896 17.856-12.608 31.744-30.144 31.744zM960 536.256c-0.96-1.472-1.92-3.008-2.816-4.224l-467.904-468.032-361.344 361.152 468.032 468.032c1.28 0.896 2.752 1.856 4.288 2.816h359.744v-359.744zM832 800c0-17.673 14.327-32 32-32s32 14.327 32 32c0 17.673-14.327 32-32 32s-32-14.327-32-32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 