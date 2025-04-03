import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_dribbble.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_dribbble'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.304 0-512-229.696-512-512s229.696-512 512-512 512 229.696 512 512-229.696 512-512 512zM512 884.672c111.168 0 212.672-41.664 289.92-110.208-7.872-11.2-73.664-99.648-229.184-157.952-71.68 131.648-151.104 239.808-163.2 256 32.896 7.936 67.2 12.16 102.464 12.16zM326.080 843.136c11.52-15.808 89.664-124.096 162.112-252.928-204.544-54.336-384.704-53.568-404.288-53.312 28.352 135.744 119.808 248.512 242.176 306.24zM74.624 447.36c0 4.48 0.064 8.96 0.192 13.376 19.136-0.448 231.104-3.136 449.472 62.208 12.544-24.512 24.448-49.408 35.456-74.24-5.76-1.6-11.52-3.328-17.216-5.184-225.536-72.896-345.536-271.616-355.456-288.576-69.824 77.504-112.384 180.096-112.448 292.416zM511.936 10.048c-101.056 0-194.24 34.496-268.416 92.288 7.872 16.064 96.448 187.136 343.104 273.088 0.96 0.32 1.92 0.64 2.88 0.96 61.44-159.552 86.784-293.248 93.312-331.648-52.48-22.336-110.208-34.752-170.88-34.688zM756.352 84.8c-4.48 26.624-27.712 154.624-84.928 311.808 137.024 21.952 257.408-13.952 272.384-18.688-19.52-121.664-89.344-226.752-187.456-293.12zM644.672 465.536c-3.072 7.488-6.208 15.040-9.408 22.592-9.088 21.312-18.816 42.496-28.992 63.36 161.728 65.984 235.008 159.936 244.224 172.416 60.928-74.432 97.792-169.216 98.688-272.448-14.4 3.072-158.976 32.384-304.512 14.080z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 