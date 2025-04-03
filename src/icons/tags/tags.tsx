import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './tags.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/tags'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M910.274 936.006c-0.548 0-1.098 0-1.648 0-0.488 0-0.914 0.062-1.404 0h-322.51c-9.332-0.488-30.562-15.068-33.306-17.812l-388.272-388.21c-23.79-23.79-23.79-62.342 0-86.132l48.434-48.434-48.434-48.434c-23.79-23.79-23.79-62.342 0-86.132l283.408-283.408c11.894-11.894 27.45-17.812 43.066-17.812s31.172 5.918 43.066 17.812l388.21 388.272c2.806 2.746 18.116 21.534 18.116 33.246v506.734c0.854 17.018-12.018 30.316-28.73 30.316zM847.504 875.25c16.836 0 30.5-13.664 30.5-30.5s-13.664-30.5-30.5-30.5-30.5 13.664-30.5 30.5 13.664 30.5 30.5 30.5zM877.82 408.778l-388.088-388.27-283.408 283.288 48.434 48.434 191.848-191.848c11.894-11.894 27.45-17.812 43.066-17.812s31.172 5.918 43.066 17.812l345.262 345.324v-96.44c-0.182-0.304-0.304-0.488-0.182-0.488-0.062 0-0.062 0 0 0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 