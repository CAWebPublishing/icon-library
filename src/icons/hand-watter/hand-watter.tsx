import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './hand-watter.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/hand-watter'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M945.92 229.803c-64.512-37.888-155.648-68.352-246.784-83.456-79.616-11.264-231.68 18.944-231.68 53.248 0 15.104 132.864-34.048 212.48-11.264 60.672 15.104 53.248 72.192 18.944 79.616s-227.84 79.616-311.296 79.616c-98.304 0-166.912-34.304-212.48-41.984-72.448-29.952-133.12 5.632-132.352-14.336 1.28-32.256 0-209.92 0-209.92s7.68-11.264 18.944-7.68c22.784 11.264 119.552-2.304 185.344-37.12 124.928-66.304 387.328-72.704 436.736-65.024 68.352 15.104 261.888 129.024 296.192 166.912 57.088 61.184 15.36 118.016-34.048 91.392zM898.304 540.075c0-103.168-83.712-186.88-186.88-186.88s-186.88 83.712-186.88 186.88 186.88 370.176 186.88 370.176 186.88-267.008 186.88-370.176z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 