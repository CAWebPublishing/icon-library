import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './tool.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/tool'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M816.496 184.284h44.062l113.436-113.436c11.248 23.436 18 49.404 18 77.156 0 95.248-74.248 172.404-167.904 178.78-4.124 0.28-7.968 1.22-12.092 1.22-21.936 0-42.748-4.5-62.248-11.72l-369.464 369.464c7.22 19.406 11.72 40.22 11.72 62.248 0 4.124-0.936 8.064-1.22 12.092-6.376 93.656-83.532 167.904-178.78 167.904-27.748 0-53.718-6.75-77.156-18l117.656-117.656v-40.22l-42.188-42.188h-45.188l-115.124 115.216c-11.248-23.436-18-49.404-18-77.156 0-95.248 74.248-172.404 167.904-178.78 4.124-0.28 7.968-1.22 12.092-1.22 21.936 0 42.748 4.5 62.248 11.72l369.464-369.464c-7.22-19.406-11.72-40.22-11.72-62.248 0-4.124 0.936-8.064 1.22-12.092 6.376-93.656 83.532-167.904 178.78-167.904 27.748 0 53.72 6.75 77.156 18l-114.844 114.844v41.344l42.188 42.092z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 