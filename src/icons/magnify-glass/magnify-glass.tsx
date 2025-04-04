import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './magnify-glass.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/magnify-glass'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M687.812 190.15c-54.7-35.158-117.208-54.7-179.716-54.7-167.992 0-308.636 140.644-308.636 312.552 0 167.992 144.558 312.55 312.55 312.55 82.038 0 160.184-31.254 222.692-89.858 58.604-62.508 89.858-144.558 89.858-222.692 0-54.7-15.626-105.486-39.072-152.366l128.92-105.486c46.88 74.23 74.23 164.090 74.23 261.754 0 265.658-214.874 484.448-476.63 484.448s-476.63-222.692-476.63-488.352 214.874-484.448 476.63-484.448c117.208 0 226.596 42.976 308.636 117.208l-132.836 109.39zM320.56 448c0-105.486 89.858-191.438 191.44-191.438 50.784 0 97.666 19.53 136.74 54.7 35.158 39.072 54.7 85.954 54.7 136.74 0 105.486-85.954 191.438-191.438 191.438s-191.438-89.858-191.438-191.438z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 