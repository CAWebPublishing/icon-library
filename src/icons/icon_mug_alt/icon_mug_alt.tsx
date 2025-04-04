import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_mug_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_mug_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M828.48 639.872c1.792 26.752 2.88 48.448 3.456 61.44 0.704 17.408-5.696 34.368-17.728 46.976s-28.8 19.712-46.208 19.712h-704c-17.408 0-34.112-7.104-46.208-19.712s-18.432-29.568-17.728-46.976c3.52-84.544 27.328-511.872 149.248-620.992 11.712-10.496 26.944-16.32 42.688-16.32h448c15.744 0 30.976 5.824 42.688 16.32 38.208 34.24 66.816 99.712 88.128 176.128 31.68 0.128 53.568 0.192 56.128 0.192 108.864 0 197.12 79.36 197.12 191.68-0.064 152.512-131.904 190.976-195.584 191.552zM826.88 352.64l-20.288-0.064c-3.84 0-8.704 0-13.44-0.064 12.736 65.6 21.44 132.864 27.328 191.488h6.4c16.896 0 101.12-4.608 101.12-95.68 0-65.728-52.416-95.68-101.12-95.68z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 