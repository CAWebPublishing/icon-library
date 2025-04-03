import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_folder-open_alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_folder-open_alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M1024 705.024v126.976c0 35.328-28.672 64-64 64h-320c-35.328 0-64-28.672-64-64 0 0-8.32-58.688-64-64h-448c-35.328 0-64-27.648-64-62.976v-65.024h1024v65.024zM64 0h896c35.328 0 64 28.672 64 64v512h-1024v-512c0-35.328 28.672-64 64-64zM64 512h896v-448h-896v448z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 