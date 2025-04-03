import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './tsunami.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/tsunami'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M818.787-85.224h-606.682c-0.726-0.008-1.584-0.012-2.442-0.012-17.863 0-35.277 1.92-52.048 5.565l1.609-0.293c-90.032 21.111-156.385 99.777-158.458 194.288l-0.004 0.226c-1.269 54.114-0.508 108.519-0.544 162.923q0 104.456 0 208.877c0 83.42-0.689 166.55 0.326 249.825 0.371 21.055 3.873 41.162 10.057 60.055l-0.409-1.443c26.143 83.69 102.95 143.374 193.698 143.374 0.159 0 0.319 0 0.478-0.001h-0.024q307.385 0.87 614.734 0c0.097 0 0.212 0 0.326 0 113.176 0 204.923-91.747 204.923-204.923v0q-0.29-187.913-0.254-375.753c0-78.959 1.161-157.918-0.363-236.841-1.777-90.892-46.171-154.799-129.192-191.068-22.117-9.36-47.836-14.8-74.825-14.8-0.319 0-0.637 0.001-0.955 0.002h0.049zM930.316 13.937c-3.301 0.472-4.497 0.689-5.694 0.762-35.834 2.793-71.814 4.098-107.394 8.668-63.762 8.197-125.856 23.466-184.395 51.068-45.736 21.58-86.539 49.907-118.203 89.695-49.798 62.565-66.192 133.907-50.016 211.96 13.492 64.995 44.104 120.234 100.322 158.462 19.39 13.946 43.614 22.303 69.789 22.303 9.593 0 18.924-1.122 27.868-3.243l-0.817 0.163c-33.876-30.72-40.731-93.648 5.549-123.027 53.788-34.13 105.545-13.601 120.27 44.902 13.456 53.498-0.617 101.555-37.394 142.395-45.446 50.378-104.094 72.285-170.467 74.171-4.814 0.124-10.482 0.195-16.167 0.195-44.83 0-88.631-4.401-130.996-12.795l4.261 0.704c-68.296-12.767-132.638-36.27-191.358-73.627-88.026-56.145-150.047-134.415-192.229-229.224-0.836-2.076-1.321-4.482-1.321-7.002 0-0.267 0.005-0.533 0.016-0.797l-0.001 0.038c0-86.612-0.218-173.26 0.689-259.872 0.363-35.218 14.508-66.083 37.829-92.125 32.099-35.689 72.539-51.938 120.633-51.72 113.596 0.508 227.193 0.326 340.934 0.326q131.405 0 262.846-0.254c44.321-0.145 82.296 14.871 115.446 47.767z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 