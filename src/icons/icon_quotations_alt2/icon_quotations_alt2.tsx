import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_quotations_alt2.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_quotations_alt2'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512-229.248 512-512 512zM512 0c-247.040 0-448 200.96-448 448s200.96 448 448 448 448-200.96 448-448-200.96-448-448-448zM410.048 615.168c-5.568 4.736-10.56 8.064-14.912 10.56-0.192 0.128-0.32 0.32-0.512 0.384-0.32 0.192-0.64 0.256-0.96 0.384-6.336 3.52-10.88 5.184-10.88 5.184l0.32-0.768c-10.304 4.224-21.12 7.232-32.896 7.232-52.096 0-94.272-43.84-94.272-97.92s42.24-97.92 94.272-97.92c16.704 0 32.128 4.864 45.76 12.8-4.672-52.352-31.040-128.704-127.68-206.528-13.504-10.944-16-31.168-5.504-45.184 6.144-8.192 15.296-12.48 24.512-12.48 6.656 0 13.312 2.176 19.008 6.784 118.592 95.68 148.224 193.984 152.192 259.648 6.784 83.968-18.688 128.128-41.984 151.168-2.112 2.24-4.096 4.672-6.464 6.656zM720.32 615.168c-5.568 4.736-10.56 8.064-14.912 10.56-0.192 0.128-0.32 0.256-0.512 0.384-0.32 0.192-0.64 0.256-0.96 0.384-6.336 3.456-10.88 5.184-10.88 5.184l0.32-0.768c-10.304 4.224-21.184 7.232-32.896 7.232-52.096 0-94.272-43.84-94.272-97.92s42.176-97.92 94.272-97.92c16.704 0 32.128 4.864 45.76 12.8-4.672-52.352-31.040-128.704-127.68-206.528-13.568-10.944-16-31.168-5.504-45.184 6.144-8.192 15.296-12.48 24.512-12.48 6.656 0 13.312 2.176 19.008 6.784 118.592 95.68 148.224 193.984 152.192 259.648 6.784 83.968-18.752 128.128-41.984 151.168-2.112 2.24-4.096 4.672-6.464 6.656z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 