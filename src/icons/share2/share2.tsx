import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share2.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share2'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M982.568 167.016c-16.928-101.562-111.716-169.266-209.894-152.34-101.562 16.928-169.268 111.716-152.34 209.894 0 0 0 0 0 0l-236.976 101.562c-33.854-37.24-88.018-57.55-142.186-47.394-88.018 13.542-145.57 94.79-132.030 182.812s94.79 145.572 182.812 132.030c27.082-3.386 54.168-16.928 74.476-33.854l253.902 148.958c-3.386 13.54-3.386 27.082 0 40.622 13.542 74.476 81.25 125.258 155.726 111.716s125.258-81.25 111.716-155.726c-13.542-74.476-81.25-125.258-155.726-111.716-23.698 3.386-40.624 13.54-57.55 23.7l-253.902-148.958c3.386-16.928 3.386-30.468 3.386-47.396l243.748-101.562c40.624 44.010 101.562 67.708 162.498 57.55 98.176-13.542 169.268-108.332 152.34-209.894z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 