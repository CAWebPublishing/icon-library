import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './audio2.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/audio2'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M307.786 70.724l-34.612 484.576 62.304 3.46c6.924-110.76 27.69-446.5 31.152-484.576l-58.84-3.46zM716.214 70.724l-65.764 3.46c6.924 110.76 31.152 446.5 34.612 484.576l65.764-3.46-34.612-484.576zM968.884 250.71c-6.924-107.298-103.838-186.908-211.136-183.446l34.612 481.114 3.46 38.072c0 134.988-128.066 245.75-283.822 245.75s-280.362-107.298-280.362-242.286l3.46-55.38 34.612-467.268c-114.222-6.924-211.136 76.148-218.058 186.908l-6.924 86.532c-3.46 79.608 41.536 152.294 110.76 190.37v69.224c0 169.602 159.218 308.050 356.51 308.050s356.51-138.45 356.51-308.050v-69.224c72.686-34.612 117.682-110.76 110.76-190.37l-10.384-89.992z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 