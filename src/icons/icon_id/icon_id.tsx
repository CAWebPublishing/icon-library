import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_id.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_id'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 768h-896c-35.328 0-64-28.672-64-64v-576c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v576c0 35.328-28.672 64-64 64zM64 704h896v-576h-896v576zM869.312 448h-389.312c-17.664 0-32-14.336-32-32s14.336-32 32-32h389.312c17.664 0 32 14.336 32 32s-14.336 32-32 32zM869.312 320h-389.312c-17.664 0-32-14.336-32-32s14.336-32 32-32h389.312c17.664 0 32 14.336 32 32s-14.336 32-32 32zM869.312 576h-389.312c-17.664 0-32-14.336-32-32s14.336-32 32-32h389.312c17.664 0 32 14.336 32 32s-14.336 32-32 32zM178.56 562.688c0-42.698 34.614-77.312 77.312-77.312s77.312 34.614 77.312 77.312c0 0 0 0 0 0 0 42.698-34.614 77.312-77.312 77.312s-77.312-34.614-77.312-77.312c0 0 0 0 0 0zM257.536 454.464c-69.888 0-126.464-75.904-126.464-169.6s252.928-93.632 252.928 0-56.64 169.6-126.464 169.6z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 