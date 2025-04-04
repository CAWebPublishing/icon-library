import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './icon_chat.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/icon_chat'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M893.12 582.72c5.632-25.344 8.896-51.392 8.896-78.144 0-206.592-175.36-378.816-406.272-415.808 48.832-19.712 103.552-31.232 161.856-31.232 54.976 0 106.88 10.112 153.728 27.712 59.328-20.224 124.096-25.472 177.664-25.472-27.84 33.408-47.168 66.176-60.992 94.976 59.392 52.992 96 123.2 96 200.512 0 91.392-51.008 172.864-130.88 227.456zM806.016 504.576c0 180.8-180.416 327.424-403.008 327.424s-403.008-146.624-403.008-327.424c0-94.336 49.344-179.072 127.936-238.848-14.784-38.144-39.808-88-82.24-139.008 80.512 0 184.192 10.56 264 59.584 30.016-5.824 61.184-9.216 93.312-9.216 222.592 0.064 403.008 146.624 403.008 327.488z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 