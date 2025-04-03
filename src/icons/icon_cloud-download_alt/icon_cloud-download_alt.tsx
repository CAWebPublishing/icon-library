import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_cloud-download_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_cloud-download_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M837.312 512c59.776 137.28 22.912 224.576-7.104 266.624-45.568 63.808-128.576 98.816-201.472 84.8-126.72-24.192-180.736-110.080-180.736-287.424v-148.096l-74.112 74.112c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l128.768-128.704c6.464-6.464 14.976-9.408 23.424-9.216 8.448-0.192 16.96 2.752 23.424 9.216l129.408 129.344c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-76.416-76.352v149.696c0 184.576 63.552 212.096 128.64 224.576 41.792 7.68 102.272-9.856 137.408-59.136 43.008-60.096 34.752-149.248-23.232-250.88-6.144-10.816-5.504-24.192 1.664-34.304s19.776-15.232 31.744-13.056c7.744 1.344 30.848 4.864 45.44 4.864 69.696 0 126.336-57.408 126.336-128.064 0-70.592-57.408-128-128-128l-635.328-0.384c-74.368 11.008-132.672 81.472-132.672 160.384 0 78.592 59.008 146.24 137.344 157.44l27.52 3.968c15.744 2.24 27.456 15.744 27.456 31.68l-0.512 34.048c0.192 114.624 70.848 208.832 168.192 224 17.408 2.752 29.376 19.072 26.688 36.544-2.752 17.472-18.688 29.312-36.608 26.688-128.64-20.032-222.080-140.8-222.272-287.104 0-0.064 0.512-6.464 0.512-6.464v0c-109.632-15.68-192.32-110.592-192.32-220.8 0-111.744 80.512-207.872 192-224h640c105.856 0 192 86.144 192 192 0 104.704-83.456 190.080-186.688 192z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 