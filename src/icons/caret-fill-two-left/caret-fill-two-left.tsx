import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './caret-fill-two-left.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/caret-fill-two-left'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M546.304 891.456c-263.808 0-477.696-213.888-477.696-477.696-0.064-263.872 213.824-477.76 477.696-477.76 263.808 0 477.696 213.888 477.696 477.696 0 263.872-213.888 477.76-477.696 477.76zM532.352 179.904c-12.544-12.544-32.96-12.544-45.504 0l-189.44 214.080c-6.4 6.4-9.472 14.848-9.344 23.232-0.064 8.384 2.944 16.768 9.344 23.168l189.376 214.080c12.544 12.544 32.96 12.544 45.504 0s12.544-32.96 0-45.504l-169.6-191.744 169.6-191.744c12.608-12.608 12.608-33.024 0.064-45.568zM761.856 225.408c12.544-12.544 12.544-32.96 0-45.504s-32.96-12.544-45.504 0l-189.44 214.080c-6.4 6.4-9.472 14.848-9.344 23.232-0.064 8.384 2.944 16.768 9.344 23.168l189.376 214.080c12.544 12.544 32.96 12.544 45.504 0s12.544-32.96 0-45.504l-169.6-191.744 169.664-191.808z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 