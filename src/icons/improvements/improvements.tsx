import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './improvements.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/improvements'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M977.067 618.667l-59.733-38.4c38.4-106.667 29.867-226.133-25.6-328.533-55.467-106.667-153.6-179.2-264.533-204.8l-4.267 72.533-93.867-98.133 98.133-98.133v51.2c132.267 29.867 256 115.2 324.267 243.2s72.533 277.333 25.6 401.067zM721.067 810.667c34.133-17.067 68.267-42.667 93.867-68.267l-55.467-34.133 136.533-34.133 34.133 136.533-51.2-34.133c-34.133 38.4-76.8 68.267-123.733 93.867-209.067 110.933-465.067 51.2-605.867-128l59.733-34.133c123.733 149.333 337.067 196.267 512 102.4zM332.8 81.067c-174.933 93.867-256 294.4-200.533 477.867l51.2-29.867-38.4 132.267-132.267-38.4 59.733-29.867c-72.533-217.6 21.333-460.8 230.4-571.733 51.2-25.6 102.4-42.667 153.6-51.2l-4.267 68.267c-38.4 8.533-81.067 21.333-119.467 42.667zM627.2 217.6v234.667h187.733l-285.867 285.867-281.6-285.867h187.733v-234.667z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 