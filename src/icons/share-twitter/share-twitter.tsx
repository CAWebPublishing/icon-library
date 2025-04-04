import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share-twitter.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share-twitter'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M520.533 465.067l-149.333-217.6h-81.067l187.733 268.8 25.6 34.133 157.867 234.667h85.333l-200.533-285.867zM849.067 93.867h-665.6c-55.467 0-98.133 46.933-98.133 98.133v652.8c0 55.467 42.667 98.133 98.133 98.133h665.6c55.467 0 98.133-42.667 98.133-98.133v-652.8c4.267-51.2-42.667-98.133-98.133-98.133zM640 823.467l-162.133-238.933-204.8 238.933h-55.467l234.667-273.067-234.667-341.333h179.2l153.6 226.133 196.267-226.133h51.2l-221.867 260.267 243.2 354.133h-179.2z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 