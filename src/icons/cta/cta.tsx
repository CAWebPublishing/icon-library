import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './cta.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/cta'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M960 960h-896c-35.328 0-64-28.672-64-64v-448c0-35.328 28.672-64 64-64h422.272v-336.576c0-13.824 8.896-26.048 21.952-30.4 3.328-1.088 6.656-1.6 10.048-1.6 9.92 0 19.584 4.672 25.664 12.928l104.448 140.736 84.672-211.584c4.992-12.544 17.024-20.096 29.696-20.096 3.968 0 8 0.704 11.904 2.304 16.448 6.592 24.384 25.216 17.792 41.6l-85.568 213.952 183.168-35.456c13.312-2.688 26.752 3.52 33.6 15.168s5.632 26.432-3.072 36.8l-145.088 172.224h184.512c35.328 0 64 28.672 64 64v448c0 35.328-28.672 64-64 64zM665.024 268.416c-12.032 2.432-24.512-2.496-31.744-12.352l-83.008-111.872v408.064l262.976-312.512-148.224 28.672zM960 448h-238.336l-178.944 212.608c-8.576 10.304-22.976 14.080-35.392 9.472-12.672-4.608-21.056-16.64-21.056-30.080v-192h-422.272v448h896v-448z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 