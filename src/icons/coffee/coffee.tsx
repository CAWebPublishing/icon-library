import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './coffee.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/coffee'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M663.6 726.667c34.6 43.4 34.6 111.2 0 154.6-7.4 9.2-20.8 10.8-30 3.4s-10.8-20.8-3.4-30c22-27.4 22-73.8 0-101.4-34.8-43.4-34.8-111.2 0-154.6 4.2-5.2 10.4-8 16.6-8 4.6 0 9.4 1.6 13.4 4.6 9.2 7.4 10.8 20.8 3.4 30-22.2 27.4-22.2 73.8 0 101.4zM528.6 726.667c34.8 43.4 34.8 111.2 0 154.6-7.4 9.2-20.8 10.8-30 3.4s-10.8-20.8-3.4-30c22-27.4 22-73.8 0-101.4-34.6-43.4-34.6-111.2 0-154.6 4.2-5.2 10.4-8 16.6-8 4.6 0 9.4 1.6 13.4 4.6 9.2 7.4 10.8 20.8 3.4 30-22 27.4-22 73.8 0 101.4zM389.4 726.667c34.6 43.4 34.6 111.2 0 154.6-7.4 9.2-20.8 10.8-30 3.4s-10.6-20.8-3.4-30c22-27.4 22-73.8 0-101.4-34.8-43.4-34.8-111.2 0-154.6 4.2-5.2 10.4-8 16.6-8 4.6 0 9.4 1.6 13.4 4.6 9.2 7.4 10.8 20.8 3.4 30-22.2 27.4-22.2 73.8 0 101.4zM992.4 33.867c-3.4 8-11 13.2-19.8 13.2h-938.6c-8.6 0-16.4-5.2-19.8-13.2s-1.4-17.2 4.6-23.2l47.8-47.8c28.2-28.2 65.8-43.8 105.6-43.8h662c39.8 0 77.4 15.6 105.6 43.8l47.8 47.8c6.2 6.2 8 15.4 4.8 23.2zM982.8 447.267c-39.4 25.4-95 14.4-129.4 3.6v32.8c0 35.6-28.8 64.2-64 64.2h-597.4c-35.2 0-64-28.8-64-64v-42.6c0-152.2 84-290.4 219.4-360.4 4.2-2.2 8.6-2.8 13-2.2l0.2-0.2h263.6c3.4 0 6.6 0.8 9.8 2.4 41.6 21.6 78.4 49.6 109.4 82.4l7.2 1.4c11.2 2.2 273.4 53.6 273.4 191.6 0 42.6-14 73.2-41.2 91zM278 337.267c-27 60.4-27.4 120.8-29.4 150.4h58.4c-5.2-54.6 3.6-94.6 18-150.4h-47zM786 216.867c36.8 55.6 59.8 120 65.8 188.4 27.2 10.2 80 24 107.8 6.2 14.6-9.4 21.6-27.4 21.6-55.2 0-70.4-116.8-117.8-195.2-139.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 