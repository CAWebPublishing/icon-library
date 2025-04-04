import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './mic.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/mic'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M448 134.144v-134.144h-96c-17.664 0-32-14.336-32-32s14.336-32 32-32h320c17.664 0 32 14.336 32 32s-14.336 32-32 32h-96v134.528c133.312 26.304 256 134.208 256 313.472v96c0 17.664-14.336 32-32 32s-32-14.336-32-32v-96c0-168.064-128.832-256-256-256-123.328 0-256 80.128-256 256v96c0 17.664-14.336 32-32 32s-32-14.336-32-32v-96c0-181.76 120.512-288.384 256-313.856zM512 320c70.72 0 128 57.28 128 128v384c0 70.72-57.28 128-128 128s-128-57.28-128-128v-384c0-70.72 57.28-128 128-128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 