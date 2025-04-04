import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-line-two-down.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-line-two-down'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M734.592 404.352l-191.744-169.6-191.744 169.6c-12.544 12.544-32.96 12.544-45.504 0s-12.544-32.96 0-45.504l214.080-189.376c6.4-6.4 14.784-9.472 23.168-9.344 8.384-0.128 16.832 2.944 23.168 9.344l214.080 189.376c12.544 12.544 12.544 32.96 0 45.504s-32.96 12.544-45.504 0zM734.592 633.856l-191.744-169.6-191.744 169.6c-12.608 12.544-33.024 12.544-45.568 0s-12.544-32.96 0-45.504l214.080-189.376c6.4-6.4 14.784-9.472 23.168-9.344 8.384-0.128 16.832 2.944 23.168 9.344l214.080 189.376c12.544 12.544 12.544 32.96 0 45.504s-32.896 12.544-45.44 0zM546.304 891.392c-263.808 0-477.696-213.888-477.696-477.696s213.888-477.696 477.696-477.696 477.696 213.888 477.696 477.696-213.888 477.696-477.696 477.696zM546.304 0c-228.096 0-413.696 185.6-413.696 413.696s185.6 413.696 413.696 413.696 413.696-185.6 413.696-413.696-185.6-413.696-413.696-413.696z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 