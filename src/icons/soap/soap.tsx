import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './soap.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/soap'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M767.232 817.323c-10.496 6.144-30.464 14.592-82.432 23.552s-137.216 18.176-179.712 18.176-126.72-6.144-132.864-13.568c-6.144-7.424-25.344-22.528-16.896-45.568s37.12-14.592 52.48-28.16c15.104-13.568 33.28-38.144 37.12-50.176 7.936-24.832 18.432-43.008 41.472-43.008 22.528 0 18.944 0 18.688 0 0 0 3.072 0 10.496 0 18.176 0 35.584 18.688 38.912 42.752 3.328 24.32 12.288 46.336 43.264 50.176 31.232 3.84 126.464 4.864 151.296-1.28 0 0 16.64-2.816 21.504 6.4 8.448 16.128 18.688 27.904-3.328 40.704zM560.896 624.811h-100.608c-83.968 0-135.424-90.88-147.968-175.616l-39.68-320.512-0.256-2.304c0-81.664 66.304-147.968 147.968-147.968h169.216c81.664 0 147.968 66.304 147.968 147.968l-28.928 317.44c-11.776 90.112-66.56 180.992-147.712 180.992zM505.088 443.819c0 0 72.704-70.144 72.704-110.336s-32.512-72.704-72.704-72.704-72.704 32.512-72.704 72.704 72.704 110.336 72.704 110.336zM589.824 14.507h-169.216c-61.44 0-111.36 49.664-111.872 110.848l3.328 26.624h387.328l2.304-26.368c-0.512-61.44-50.432-111.104-111.872-111.104z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 