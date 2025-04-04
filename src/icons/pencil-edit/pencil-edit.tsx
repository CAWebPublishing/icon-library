import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pencil-edit.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pencil-edit'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M664.668 295.332l-52.604 158.81-303.454 303.454-106.208-106.208 303.454-303.454zM61.722 898.278c-29.342-29.344-29.342-76.868 0-106.208l78.166-78.166 106.208 106.208-78.166 78.166c-29.342 29.342-76.868 29.342-106.208 0zM925.26 743.186h-418.516l59.038-59.038h359.48v-649.41h-649.41v359.48l-59.038 59.038v-418.516c0-32.588 26.448-59.038 59.038-59.038h649.41c32.588 0 59.038 26.448 59.038 59.038v649.41c0 32.588-26.448 59.038-59.038 59.038z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 