import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './compass.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/compass'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M567.294 441.496c0-26.946-21.844-48.79-48.79-48.79s-48.79 21.844-48.79 48.79c0 26.946 21.844 48.79 48.79 48.79s48.79-21.844 48.79-48.79zM326.598 633.402l78.062-182.148 104.084 104.084zM512 942.402c-266.716 0-484.644-221.18-484.644-494.402s217.926-494.402 484.644-494.402 484.644 221.18 484.644 494.402c0 273.222-217.928 494.402-484.644 494.402zM401.41 324.4l-178.896 409.832 409.834-178.894 178.894-409.834-409.834 178.894z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 