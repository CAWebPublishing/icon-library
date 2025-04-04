import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './blurb.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/blurb'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M400.576 70.208l111.424-157.632 111.424 157.632c201.152 50.816 340.544 229.12 340.544 437.824 0 249.216-202.752 451.968-451.968 451.968s-451.968-202.752-451.968-451.968c0-208.704 139.392-387.008 340.544-437.824zM512 896c213.952 0 387.968-174.080 387.968-387.968 0-179.84-127.296-338.88-302.72-378.304l-12.032-2.688-73.216-103.616-73.28 103.616-12.032 2.688c-175.424 39.36-302.72 198.464-302.72 378.304 0.064 213.888 174.080 387.968 388.032 387.968zM352 576h320c17.664 0 32 14.336 32 32s-14.336 32-32 32h-320c-17.664 0-32-14.336-32-32s14.336-32 32-32zM288 448h448c17.664 0 32 14.336 32 32s-14.336 32-32 32h-448c-17.664 0-32-14.336-32-32s14.336-32 32-32zM672 384h-320c-17.664 0-32-14.336-32-32s14.336-32 32-32h320c17.664 0 32 14.336 32 32s-14.336 32-32 32z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 