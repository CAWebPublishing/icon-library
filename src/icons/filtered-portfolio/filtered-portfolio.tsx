import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './filtered-portfolio.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/filtered-portfolio'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 768h-896c-35.328 0-64-30.592-64-65.856v-702.272c0-35.264 28.672-63.872 64-63.872h896c35.328 0 64 28.608 64 63.872v702.272c0 35.264-28.672 65.856-64 65.856zM384 512v192h256v-192h-256zM640 448v-197.312h-256v197.312h256zM64 704h256v-192h-256v192zM64 448h256v-197.312h-256v197.312zM960 0l-896-0.128v192.128h256v-192h64v192h256v-192h64v192h256v-192zM960 250.688h-256v197.312h256v-197.312zM960 702.144v-190.144h-256v192h256v-1.856zM96 896c-17.664 0-32-14.336-32-32s14.336-32 32-32h192c17.664 0 32 14.336 32 32s-14.336 32-32 32h-192zM416 896c-17.664 0-32-14.336-32-32s14.336-32 32-32h192c17.664 0 32 14.336 32 32s-14.336 32-32 32h-192zM736 896c-17.664 0-32-14.336-32-32s14.336-32 32-32h192c17.664 0 32 14.336 32 32s-14.336 32-32 32h-192z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 