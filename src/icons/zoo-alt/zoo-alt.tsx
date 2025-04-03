import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './zoo-alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/zoo-alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M977.4 391.067c-10 94.6-41.2 269-220.8 358.6-155.8 77.6-221.2 55.2-192-73 1-4.2-0.8-8.4-4.4-10.8-3.8-2.4-8.2-2.2-11.8 0.6-241.6 190.8-588.4-193.4-493-441.4 45.6-118.6 200.4-176.2 317.8-138.4 169.4 54.4 144.8 285.8-3.6 294.4-67.4 4-132.4-33.4-134-106.8-1.4-62.8 55.8-116.4 125-75 53.6 32.2 42.8 103.6 7.2 92.8-35.8-10.8 7.2-41-34-60.8-49.6-23.6-77.2 75.8 9.4 91.4 27.2 5 59-2 79.8-36.2 39.2-64.2-17.8-142.8-116-151.8-194.2-17.6-175.4 336.6 94.2 293.8 27.2-4.4 52.8-12 77.6-21.6 36-13.8 57.2-55.8 66.2-93.6 6.2-25.8 0-38.4-3.6-75.8s32.2-39.2 50-37.4c17.8 1.8-17.8 42.8 0.8 56.2 18.8 13.4 32.2-1.8 67-7.2s10.8 31.2-9.8 45.6c-20.6 14.2-45.6 8-64.2 33-12 16.2-13.6 43.8-16 63.8l19-35.2c40.2-19.4 82-37.8 129.2-48 118.4-25.6 269.8-11.8 260 82.8zM792.8 379.667c-49.4 0-89.2 40-89.2 89.2 0 49.4 40 89.2 89.2 89.2s89.2-40 89.2-89.2c0-49.2-40-89.2-89.2-89.2zM792.8 522.267c-29.4 0-53.2-23.8-53.2-53.2s23.8-53.2 53.2-53.2 53.2 23.8 53.2 53.2c0 29.2-23.8 53.2-53.2 53.2zM769.4 468.867c-9.8 0-17.8 8-17.8 17.8s8 17.8 17.8 17.8c9.8 0 17.8-8 17.8-17.8 0.2-9.8-7.8-17.8-17.8-17.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 