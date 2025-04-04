import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './search-right.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/search-right'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M596.182 898.336c-202.162 0-366.050-163.888-366.050-366.050 0-87.034 30.538-166.84 81.23-229.748l-241.962-241.962c-15.168-15.168-15.168-39.904 0-55.172 15.168-15.168 39.902-15.168 55.172 0l241.962 241.962c62.808-50.692 142.716-81.23 229.748-81.23 202.162 0 366.050 163.888 366.050 366.050s-163.888 366.152-366.152 366.152v0zM596.182 239.832c-161.24 0-292.452 131.11-292.452 292.452s131.212 292.35 292.452 292.35 292.452-131.11 292.452-292.452-131.11-292.35-292.452-292.35z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 