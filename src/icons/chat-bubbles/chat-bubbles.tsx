import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './chat-bubbles.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/chat-bubbles'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M383.214 587.23c0-30.758-24.932-55.69-55.69-55.69s-55.69 24.932-55.69 55.69c0 30.758 24.932 55.69 55.69 55.69s55.69-24.932 55.69-55.69zM525.924 587.23c0-30.758-24.932-55.69-55.69-55.69s-55.69 24.932-55.69 55.69c0 30.758 24.932 55.69 55.69 55.69s55.69-24.932 55.69-55.69zM581.616 545.46c10.44-6.96 20.884-13.926 34.804-13.926 17.404 0 34.804 10.44 45.25 24.366 6.96 10.44 10.44 20.884 10.44 31.324 0 31.326-24.366 55.69-55.69 55.69s-55.69-24.366-55.69-55.69c0-13.924 6.96-27.844 17.404-38.29 0-3.48 3.48-3.48 3.48-3.48zM512 942.262c-268.016 0-487.3-219.286-487.3-494.262s219.286-497.742 487.3-497.742c268.016 0 487.3 222.766 487.3 497.742s-219.286 494.262-487.3 494.262zM365.81 385.346c-6.96 0-17.406 3.48-24.366 3.48h-3.48l-3.48-3.48c-41.77-27.846-87.020-41.77-139.23-41.77-17.406 0-31.324 0-45.25 3.48 52.21 13.924 66.136 55.69 69.614 83.536v6.96l-6.96 3.48c-66.136 38.29-100.94 90.5-100.94 146.19 0 111.38 153.152 205.36 341.11 205.36s341.11-90.5 341.11-205.36c0-13.926-3.48-31.326-6.96-45.25 0 0 0 0 0 0-38.29-90.5-174.036-160.112-337.63-160.112-31.324-3.48-55.69 0-83.536 3.48 0 0 0 0 0 0zM731.286 232.196c-27.846-6.96-55.69-10.44-87.020-10.44-125.304 0-229.726 52.21-257.572 125.304 24.366-3.48 48.73-3.48 73.096-3.48 170.556 0 313.266 73.096 351.55 174.036 62.654-31.326 100.94-76.576 100.94-128.786 0-45.25-31.326-87.020-80.056-118.346 3.48-27.846 17.404-62.654 90.5-59.172 0 0-104.422-48.73-191.44 20.884z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 