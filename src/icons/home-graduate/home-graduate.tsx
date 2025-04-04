import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './home-graduate.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/home-graduate'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M770.97 97.041c-16.972-5.364-36.49-8.454-56.73-8.454s-39.758 3.091-58.108 8.826l1.378-0.371-133.12 46.592v-133.12c53.79-34.496 119.427-54.988 189.85-54.988s136.060 20.493 191.272 55.84l-1.422-0.852v133.12zM1005.875 219.921c24.166 8.499 24.166 22.426 0 30.72l-248.115 88.883c-13.084 4.092-28.129 6.449-43.725 6.449s-30.64-2.357-44.798-6.735l1.073 0.286-247.398-88.576c-24.064-8.602-24.064-22.528 0-30.72l247.603-86.63c13.123-3.997 28.206-6.298 43.827-6.298s30.704 2.301 44.929 6.583l-1.102-0.285zM485.478 95.915v61.44l-75.878 26.317c-58.778 20.48-58.982 81.92 0 103.424l247.91 88.371c16.977 5.481 36.51 8.641 56.781 8.641s39.803-3.16 58.132-9.014l-1.351 0.373 78.848-27.853v148.275h122.88l-487.014 401.818-485.786-401.818h105.882v-399.974z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 