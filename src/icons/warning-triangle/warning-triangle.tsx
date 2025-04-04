import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './warning-triangle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/warning-triangle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M80.854 14.936h860.312c21.716 0 41.884 11.384 53.082 30.068 11.198 18.622 11.754 41.76 1.546 60.938l-429.228 804.262c-10.702 20.106-31.676 32.728-54.504 32.728h-0.062c-22.828 0-43.74-12.558-54.504-32.666l-431.146-804.262c-10.27-19.178-9.714-42.316 1.422-61 11.198-18.622 31.366-30.068 53.082-30.068zM512 262.402c34.15 0 61.866-27.716 61.866-61.866s-27.716-61.866-61.866-61.866-61.866 27.716-61.866 61.866c0 34.15 27.716 61.866 61.866 61.866zM450.134 385.144v247.466c0 34.15 27.716 61.866 61.866 61.866s61.866-27.716 61.866-61.866v-247.466c0-34.15-27.716-61.866-61.866-61.866s-61.866 27.716-61.866 61.866z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 