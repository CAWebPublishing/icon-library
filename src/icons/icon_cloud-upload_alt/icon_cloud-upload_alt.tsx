import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_cloud-upload_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_cloud-upload_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M833.664 512.064c-2.752 0-5.44 0-8.064-0.064 4.224 21.056 6.4 42.56 6.4 64 0 176.448-143.552 320-320 320-176.32 0-320-142.144-320.192-316.736 0-0.064 0.512-6.464 0.512-6.464v0c-109.632-15.68-192.32-110.592-192.32-220.8 0-111.744 80.512-207.872 192-224h160c17.664 0 32 14.336 32 32s-14.336 32-32 32l-155.328-0.32c-74.368 10.944-132.672 81.408-132.672 160.32 0 78.592 59.008 146.24 137.344 157.44l27.52 3.968c15.744 2.24 27.456 15.744 27.456 31.68l-0.512 34.048c0.192 139.456 115.072 252.864 256.192 252.864 141.184 0 256-114.816 256-256 0-17.344-1.728-34.816-5.248-51.776l-8.448-40.704c-2.112-10.176 0.896-20.672 7.936-28.288 7.040-7.552 17.152-11.456 27.648-9.856 0.704 0.064 20.736 2.688 43.776 2.688 69.696 0 126.336-57.408 126.336-128.064 0-70.592-57.408-128-128-128h-224c-89.6 0-95.68 53.696-96 64v212.352l75.712-75.648c12.48-12.48 32.768-12.48 45.248 0s12.48 32.768 0 45.248l-128.768 128.704c-6.272 6.272-14.528 9.344-22.784 9.344-0.512 0-0.896 0.256-1.408 0.256-9.216 0-17.344-3.968-23.168-10.176l-128.896-128.768c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l74.816 74.752v-210.816c0-44.224 33.408-128 160-128h224c105.856 0 192 86.144 192 192s-85.376 192.064-190.336 192.064z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 