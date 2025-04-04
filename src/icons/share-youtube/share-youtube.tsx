import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './share-youtube.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/share-youtube'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M850.456 864.276h-667.276c-55.272 0-99.976-43.836-99.976-97.956v-653.314c0-54.082 44.7-97.956 99.976-97.956h667.276c55.238 0 100.010 43.874 100.010 97.956v653.314c0 54.12-44.776 97.956-100.010 97.956zM841.254 415.204c0-53.288-6.53-106.506-6.53-106.506s-6.422-45.386-25.974-65.41c-24.894-26.266-52.71-26.336-65.484-27.888-91.422-6.638-228.704-6.816-228.704-6.816s-169.824 1.55-222.136 6.568c-14.54 2.776-47.154 1.95-72.048 28.178-19.552 20.022-25.942 65.41-25.942 65.41s-6.568 53.25-6.568 106.506v49.934c0 53.326 6.568 106.576 6.568 106.576s6.384 45.386 25.942 65.338c24.894 26.266 52.71 26.374 65.484 27.888 91.422 6.708 228.524 6.708 228.524 6.708h0.362c0 0 137.1 0 228.524-6.708 12.774-1.518 40.59-1.658 65.484-27.888 19.552-19.952 25.974-65.338 25.974-65.338s6.53-53.288 6.53-106.576v-49.968zM421.26 305.958l251.038 136.738-251.038 131.47z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 