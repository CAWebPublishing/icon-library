import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './golf.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/golf'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M473.4 347.667c-5.2 0-10.4-0.4-15.6-0.6v514.6c0 12.2-20.8 24-33 24-12.4 0-24.4-12.8-24.4-25v-517.4c-142-17.2-236.4-93.2-236.4-185.6 0-105 138.4-190 309.2-190s386.6 259.2 386.6 364.2c0 104.8-215.6 15.8-386.4 15.8zM435.6 105.867c-65.4 0-118.4 28.8-118.4 64.2 0 31.2 28.6 57.4 83.2 63v-63c0-12.2 22.8-22.2 35.2-22.2 12.2 0 22.2 10 22.2 22.2v63c54.8-5.6 96.2-31.8 96.2-63 0-35.4-53-64.2-118.4-64.2zM500.6 861.467c0 0 83.6 36 152.6-50.6 0 0 52.4-68.2 164-17.6 0 0-15.4-133.4-131.8-143.6 0 0-161.8 13.2-184.2-79.6l-0.6 291.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 