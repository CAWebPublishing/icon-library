import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './payment-card.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/payment-card'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M16.032 227.14c0-54.246 42.62-100.746 100.746-100.746h790.452c54.246 0 100.746 42.62 100.746 100.746v11.624h-991.94v-11.624zM907.222 769.606h-794.326c-54.246 0-100.746-42.62-100.746-100.746v-278.984h988.062v278.982c3.872 58.122-38.748 100.746-92.994 100.746zM643.742 595.24h-96.87v96.87h96.87v-96.87zM779.36 595.24h-96.87v96.87h96.87v-96.87zM918.846 595.24h-96.87v96.87h96.87v-96.87z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 