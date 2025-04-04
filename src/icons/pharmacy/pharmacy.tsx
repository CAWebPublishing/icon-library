import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './pharmacy.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/pharmacy'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M994.133 622.934h-964.267c0-4.267 0-8.533 0-8.533 0-234.667 76.8-435.2 251.733-533.333h460.8c174.933 98.133 251.733 298.667 251.733 533.333 0 0 0 4.267 0 8.533zM665.6 388.267v-76.8h-102.4v-110.933h-102.4v110.933h-102.4v93.867h102.4v106.667h102.4v-110.933h102.4v-12.8zM768-21.333v0c0-25.6-12.8-42.667-29.867-42.667h-452.267c-17.067 0-29.867 21.333-29.867 42.667v0c0 25.6 12.8 42.667 29.867 42.667h448c21.333 0 34.133-17.067 34.133-42.667zM746.667 819.2c-8.533 21.333-8.533 51.2 4.267 72.533v0c21.333 42.667 76.8 59.733 119.467 34.133v0c42.667-21.333 59.733-76.8 34.133-119.467v0c-12.8-21.333-34.133-38.4-59.733-42.667l-68.267-119.467h-128l98.133 174.933z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 