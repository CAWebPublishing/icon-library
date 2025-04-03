import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './football.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/football'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M80.2-5.133c33.2-33.2 155.4-51 297.8-26.8l-324.4 324.6c-24.4-142.4-6.4-264.6 26.6-297.8zM943.8 858.467c-32.8 32.8-153 50.6-293.6 27.4l321-321c23.2 140.6 5.4 260.8-27.4 293.6zM562 857.467c-107.2-28.4-219-81.2-309.2-169.4l-0.2 0.2c-0.4-0.4-0.8-0.8-1.2-1.4-0.4-0.4-0.8-0.6-1.4-1.2l0.2-0.2c-87-89-139.8-199.2-168.4-305.4l383.4-383.4c106.2 28.6 216.4 81.2 305.4 168.4l0.2-0.2c0.4 0.4 0.8 0.8 1.2 1.4 0.4 0.4 0.8 0.8 1.2 1.2l-0.2 0.2c88 90 141 201.8 169.4 309l-380.4 380.8zM664.8 542.267l-22-22 45.8-45.8c9.6-9.6 9.6-25 0-34.6s-25-9.6-34.6 0l-45.8 45.8-51.6-51.6 45.8-45.8c9.6-9.6 9.6-25 0-34.6s-25-9.6-34.6 0l-45.8 45.8-51.6-51.6 45.8-45.8c9.6-9.6 9.6-25 0-34.6s-25-9.6-34.6 0l-45.8 45.8-37-37c-9.6-9.6-25-9.6-34.6 0s-9.6 25 0 34.6l37 37-45.8 45.8c-9.6 9.4-9.6 25 0 34.6s25 9.6 34.6 0l45.8-45.8 51.6 51.6-45.8 45.8c-9.6 9.6-9.6 25 0 34.6s25 9.6 34.6 0l45.8-45.8 51.6 51.6-45.8 45.8c-9.6 9.6-9.6 25 0 34.6s25 9.6 34.6 0l45.8-45.8 22 22c9.6 9.6 25 9.6 34.6 0s9.6-25.2 0-34.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 