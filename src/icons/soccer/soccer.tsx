import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './soccer.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/soccer'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M447.2 573.467c0 0-69.8-97.8-78.6-169 0 0 66.8-89 129-123 0 0 111.2 43 158.6 83 0 0-7.4 151.2-28.2 183.8 0.2 0-71 26.6-180.8 25.2zM512 898.067c-260.4 0-471.4-211-471.4-471.4s211-471.4 471.4-471.4c260.4 0 471.4 211 471.4 471.4s-211 471.4-471.4 471.4zM564 18.467l41.6 59c0 0-103 30.6-142 68 0 0-96.6-47.2-149.4-16.6l47.6-85.2c-93.2 36.8-169.8 106.4-215.4 194.8l65.6-19.8c0 0-3.2 107.4 20 156.2 0 0-75.2 77-62.8 136.6l-68.4-74.6c3 118.4 56 224.4 138.8 297.8l1.8-69.2c0 0 102.2 32.6 155.6 23.6 0 0 53.4 93.4 114.2 97.8l-80.2 43.2c26.2 5.2 53.4 8 81.2 8 64.6 0 125.8-15 180.2-41.6l-63.4-23.6c0 0 67.8-83.4 78.8-136.4 0 0 106.4-15.6 132.8-70.6l8.8 96.4c46.8-66.8 74.4-148 74.4-235.6 0-22.6-1.8-44.8-5.4-66.4l-39.2 54c0 0-62.4-87.4-110.4-112.2 0 0 13.2-106.8-32.8-146.8l100.2 18.2c-65.4-83.4-162.2-141-272.2-155z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 