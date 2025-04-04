import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_mail.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_mail'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 832h-896c-35.328 0-64-28.672-64-64v-107.456l512-204.8 512 204.8v107.456c0 35.328-28.672 64-64 64zM0 556.032v-428.032c0-35.328 28.672-64 64-64h896c35.328 0 64 28.672 64 64v428.032l-512-204.8-512 204.8z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 