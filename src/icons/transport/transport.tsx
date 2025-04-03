import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './transport.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/transport'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M81.524 709.914h503.048v-96.994h76.83v80.828c0 52.495-24.162 88.824-72.659 109.162-48.497 20.164-133.323 30.245-254.653 30.245-129.325 0-216.238-10.082-260.563-28.333s-66.749-56.493-66.749-111.074v-412.138c0-44.499 16.166-82.914 52.495-111.074 36.329-28.333 76.83-42.413 125.327-42.413l-72.832-70.747v-26.247h276.729v341.391h-306.974v337.393zM109.857 316.028c10.082 10.082 22.25 14.080 36.329 14.080 16.166 0 26.247-3.998 36.329-14.080 10.082-7.996 14.080-20.164 14.080-34.417s-3.998-24.162-14.080-34.417c-10.082-10.082-22.25-14.080-36.329-14.080s-26.247 3.998-36.329 14.080c-10.082 7.996-14.080 20.164-14.080 34.417s3.824 24.335 14.080 34.417zM843.223 210.864c10.082-10.082 22.25-14.080 36.329-14.080s26.247 3.998 36.329 14.080c10.082 10.082 14.080 20.164 14.080 34.417s-3.998 26.247-14.080 34.417c-10.082 10.082-20.164 14.080-36.329 14.080-14.080 0-26.247-3.998-36.329-14.080s-14.080-20.164-14.080-34.417 3.998-26.247 14.080-34.417zM523.907 210.864c10.082-10.082 22.25-14.080 36.329-14.080s26.247 3.998 36.329 14.080c10.082 10.082 14.080 20.164 14.080 34.417s-3.998 26.247-14.080 34.417c-10.082 10.082-20.164 14.080-36.329 14.080-14.080 0-26.247-3.998-36.329-14.080s-14.080-20.164-14.080-34.417 3.998-26.247 14.080-34.417zM944.215 550.343c-2.086 7.996-6.084 12.168-10.082 16.166s-10.082 6.084-20.164 6.084h-383.978c-10.082 0-16.166-2.086-22.25-6.084-3.998-3.998-7.996-7.996-10.082-14.080l-72.659-210.154v-284.898c0-6.084 2.086-14.080 6.084-22.25 6.084-6.084 12.168-7.996 20.164-7.996h28.333c7.996 0 14.080 2.086 20.164 7.996 6.084 6.084 7.996 12.168 7.996 20.164v56.493h424.306v-56.493c0-7.996 2.086-14.080 7.996-20.164 6.084-6.084 12.168-7.996 20.164-7.996h28.333c7.996 0 14.080 2.086 20.164 7.996 6.084 6.084 7.996 12.168 7.996 20.164v284.898l-72.485 210.154zM540.073 524.096h359.643l48.497-143.405h-456.637l48.497 143.405zM964.378 164.453h-488.968v165.655h488.968v-165.655z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 