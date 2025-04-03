import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './truck-alt.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/truck-alt'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M164.2 751.867v122.8c0 26.4 21.4 47.8 47.8 47.8h600c26.4 0 47.8-21.4 47.8-47.8v-122.6c-13.8 12.4-32.2 20-52.2 20h-17.6v64.4c0 10.4-8.6 19-19 19h-518c-10.4 0-19-8.6-19-19v-64.6h-17.6c-20.2 0.2-38.4-7.4-52.2-20zM257.2 772.067h509.4v60.2h-509.4v-60.2zM952.2 498.267l-8.2-94.6c-0.4-4.4-4.2-7.8-8.6-7.8h-40.2v-12.2c0-9.6-7.8-17.2-17.2-17.2h-18v-299.2c0-13.4-10.2-24.2-23.2-25.6v-89.8c0-16.2-13-29.2-29.2-29.2h-45.6c-16.2 0-29.2 13-29.2 29.2v89.6h-441.4v-89.6c0-16.2-13-29.2-29.2-29.2h-45.6c-16.2 0-29.2 13-29.2 29.2v89.8c-13 1.4-23.2 12.2-23.2 25.6v299.2h-18c-9.6 0-17.2 7.8-17.2 17.2v12.2h-40.4c-4.4 0-8.2 3.4-8.6 7.8l-8.2 94.6c-0.4 5 3.6 9.4 8.6 9.4h53.6c4.4 0 8.2-3.4 8.6-7.8l8.2-94.6c0.4-3.6-1.8-7-4.8-8.4v-4.6c0-4.8 3.8-8.6 8.6-8.6h9.4v310.2c0 28.8 23.4 52.2 52.2 52.2h591.4c28.8 0 52.2-23.4 52.2-52.2v-310.4h9.4c4.8 0 8.6 3.8 8.6 8.6v4.6c-3 1.6-5.2 4.8-4.8 8.4l8.2 94.6c0.4 4.4 4.2 7.8 8.6 7.8h53.8c5 0.2 9-4.2 8.6-9.2zM225 419.667h574v239.4c0 14.4-11.6 26-26 26h-521.8c-14.4 0-26-11.6-26-26v-239.4zM297.4 217.267c-4 61.6-34 93.2-92 92.2-4.8 0-8.6-3.8-8.6-8.6v-84.2c0-4.8 3.8-8.6 8.6-8.6h83.6c4.8-0.2 8.6 4.2 8.4 9.2zM402.2 94.667h-80.2v-20.4h80.4v20.4zM402.2 142.667h-80.2v-20.4h80.4v20.4zM503.4 94.667h-84v-20.4h84v20.4zM503.4 142.667h-84v-20.4h84v20.4zM604.6 94.667h-83.8v-20.4h83.8v20.4zM604.6 142.667h-83.8v-20.4h83.8v20.4zM702 94.667h-80.4v-20.4h80.4v20.4zM702 142.667h-80.4v-20.4h80.4v20.4zM827.4 300.867c0 4.8-3.8 8.6-8.6 8.6-58 1-88-30.6-92-92.2-0.4-5 3.6-9.4 8.6-9.4h83.6c4.8 0 8.6 3.8 8.6 8.6v84.4z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 