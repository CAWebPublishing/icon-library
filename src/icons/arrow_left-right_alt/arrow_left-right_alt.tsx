import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './arrow_left-right_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/arrow_left-right_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M177.856 206.016c12.48 12.48 12.48 32.768 0 45.248l-68.736 68.736h562.88c17.664 0 32 14.336 32 32s-14.336 32-32 32h-562.88l73.408 73.408c12.48 12.48 12.48 32.768 0 45.248s-32.768 12.48-45.248 0l-127.936-127.936c-6.272-6.272-9.344-14.464-9.344-22.72s3.072-16.448 9.344-22.72l123.264-123.264c12.544-12.544 32.768-12.544 45.248 0zM1014.656 566.080l-123.264 123.264c-12.48 12.48-32.768 12.48-45.248 0s-12.48-32.768 0-45.248l68.736-68.736h-562.88c-17.664 0-32-14.336-32-32s14.336-32 32-32h562.88l-73.408-73.408c-12.48-12.48-12.48-32.768 0-45.248s32.768-12.48 45.248 0l127.936 127.936c6.272 6.272 9.344 14.464 9.344 22.72s-3.072 16.448-9.344 22.72z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 