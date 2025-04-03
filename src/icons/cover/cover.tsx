import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './cover.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/cover'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M172.8 396.715c-1.536 1.28-16.128 7.424-23.040 7.168-3.84 0-8.448-3.584-11.264-6.912-5.632-6.912-3.328-18.944 7.168-28.672 10.24-9.728 27.136-17.92 27.648-18.688 2.56-3.072-30.72 8.192-100.352 11.776-9.984 0.512-17.664 0.768-21.504 1.28-4.096 0.512-7.936-1.024-11.008-4.096s-4.864-7.424-5.376-12.032c-0.768-10.24 5.376-18.688 13.312-19.712l87.296-10.24c0.768-0.256 1.28-0.768 1.536-1.536 1.024-4.864 0.512-9.984-1.28-14.592-0.256-0.768-0.768-1.28-1.536-1.28l-114.944 5.888c-8.192 0.256-15.104-7.424-15.616-17.408v-0.768c0-9.472 6.4-17.664 14.336-18.176l123.136-6.4c0.512 0 1.536-0.768 1.792-1.536 1.28-4.608 1.28-9.216-0.256-13.824-0.256-1.024-0.768-1.536-1.536-1.536h-112.384c-8.192 0-15.36-7.68-15.616-17.408-0.256-10.24 6.656-18.688 15.104-18.688h113.152c0.512 0 1.28-0.768 1.536-1.536 1.536-5.376 1.28-11.52-0.768-16.64-0.512-0.768-1.024-1.28-1.536-1.28h-87.552c-8.192 0-15.104-8.192-15.104-18.176v-0.256c0-9.728 6.656-17.92 15.104-17.92h120.064c9.984-0.256 2.304 0.768 66.304 0.768 16.384 0 88.832-0.512 88.832 34.56s0 92.672 0 116.992c0.256 47.872-154.368 90.112-155.648 90.88zM400.128 376.491l379.648 9.472c42.752 0 42.752 34.048 42.752 54.016 0 146.944-98.816 266.24-220.416 266.24s-220.416-119.296-220.416-266.24c0-22.528 2.304-44.544 6.656-65.536 3.584 1.28 7.424 2.048 11.776 2.048zM873.728 353.451l-469.248-11.52c-23.552 0-42.752-19.2-42.752-42.752v-102.144c0-23.552 19.2-42.752 42.752-42.752l476.928-17.152c75.52 0 133.12 45.824 133.12 108.288 0 62.208-51.456 108.032-140.8 108.032zM940.032 510.123c0-10.462-8.482-18.944-18.944-18.944s-18.944 8.482-18.944 18.944c0 10.462 8.482 18.944 18.944 18.944s18.944-8.482 18.944-18.944zM1019.904 465.323c0-8.907-7.221-16.128-16.128-16.128s-16.128 7.221-16.128 16.128c0 8.907 7.221 16.128 16.128 16.128s16.128-7.221 16.128-16.128zM951.808 412.843c0-13.714-11.118-24.832-24.832-24.832s-24.832 11.118-24.832 24.832c0 13.714 11.118 24.832 24.832 24.832s24.832-11.118 24.832-24.832z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 