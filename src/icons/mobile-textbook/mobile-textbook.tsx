import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './mobile-textbook.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/mobile-textbook'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M232.038 183.877c-30.72 7.373-124.314 9.421-150.016 5.837l-41.984-3.891v460.288h-40.038v-500.429h338.432c-30.703 16.74-66.293 29.949-103.862 37.755l-2.531 0.44zM615.936 107.179v-119.398c0.012-0.336 0.019-0.731 0.019-1.128 0-18.392-14.828-33.32-33.181-33.483h-392.618c-0.19-0.004-0.414-0.006-0.639-0.006-19.384 0-35.185 15.345-35.916 34.55l-0.002 0.066v119.398h-38.093v-119.398c0.748-40.538 33.786-73.114 74.433-73.114 0.076 0 0.152 0 0.229 0h392.59c0.004 0 0.009 0 0.014 0 39.588 0 71.68 32.092 71.68 71.68 0 0.504-0.005 1.007-0.016 1.509l0.001-0.075v119.398zM739.123 646.11v-460.288l-40.96 3.891c-26.010 3.584-118.477 1.536-149.402-5.837-40.099-8.24-75.69-21.449-108.45-39.215l2.056 1.020h335.258v500.429zM522.854 710.725c-43.635-9.755-81.952-23.212-118.065-40.532l3.275 1.415v-499.712c30.72 15.872 80.077 40.96 132.506 49.971 32.060 5.209 69.015 8.185 106.666 8.185 18.789 0 37.404-0.741 55.819-2.196l-2.433 0.155v495.616s-98.099 4.71-177.766-12.902zM153.6 761.617v103.936c0.736 19.27 16.535 34.612 35.918 34.612 0.081 0 0.161 0 0.242-0.001h61.94c6.451 0 7.27-2.56 7.27-3.891 0.172-10.557 8.77-19.049 19.351-19.049 0.109 0 0.218 0.001 0.326 0.003h215.638c10.609 0.058 19.193 8.642 19.251 19.246v0.006c0 1.331 2.355 3.891 7.27 3.891h61.44c18.369-0.163 33.197-15.092 33.197-33.484 0-0.397-0.007-0.791-0.021-1.185l0.002 0.057v-104.55c15.36 0.717 30.72 1.126 38.502 1.229v103.117c0.009 0.427 0.014 0.93 0.014 1.434 0 39.588-32.092 71.68-71.68 71.68-0.005 0-0.010 0-0.015 0h-392.089c-0.064 0-0.14 0-0.217 0-40.647 0-73.685-32.576-74.432-73.044l-0.001-0.070v-103.014c15.36-0.102 23.040-0.307 38.093-0.922zM369.562 671.608c-32.838 15.905-71.156 29.362-111.143 38.422l-3.648 0.695c-79.667 17.613-177.766 12.902-177.766 12.902v-495.616c15.982 1.3 34.597 2.041 53.386 2.041 37.65 0 74.605-2.976 110.643-8.707l-3.977 0.521c52.429-9.114 101.683-34.099 132.506-49.971z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 