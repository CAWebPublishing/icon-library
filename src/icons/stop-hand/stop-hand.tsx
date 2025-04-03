import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './stop-hand.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/stop-hand'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M997.689 436.978l-233.956 405.333c-3.556 6.4-10.311 10.311-17.422 10.311h-467.911c-7.111 0-13.867-3.911-17.422-10.311l-233.956-405.333c-3.556-6.4-3.556-13.867 0-20.267l233.956-405.333c3.556-6.4 10.311-10.311 17.422-10.311h467.556c7.111 0 13.867 3.911 17.422 10.311l233.956 405.333c3.911 6.044 3.911 13.867 0.356 20.267zM734.222 41.6h-444.8l-222.222 385.067 222.578 385.067h444.444l222.578-385.067-222.578-385.067zM708.622 770.134h-393.244c-1.067 0-2.133-0.711-2.844-1.422l-196.622-340.267c-0.711-1.067-0.711-2.133 0-3.2l196.978-340.622c0.711-1.067 1.422-1.422 2.844-1.422h393.244c1.067 0 2.133 0.711 2.844 1.422l196.622 340.267c0.711 1.067 0.711 2.133 0 3.2l-197.333 340.622c-0.356 1.067-1.422 1.422-2.489 1.422zM605.511 200.534c-0.356-0.356-0.711-1.067-0.711-1.422-3.2-18.844-54.044-33.422-115.911-33.422-69.333 0-139.733 18.844-141.867 61.867-10.667 51.911-12.444 102.756-5.689 155.022v216.533c0 14.933 12.089 27.022 26.667 27.022 0 0 0.356 0 0.356 0 14.933 0 27.022-12.089 27.022-27.022v-157.867c0-1.067 0.711-2.133 1.778-2.844 7.822-3.556 16.711-4.267 24.889-1.422 1.067 0.356 2.133 1.778 2.133 2.844v204.089c0 14.933 12.089 27.022 27.022 27.022s27.022-12.089 27.022-27.022v-203.733c0-1.422 0.711-2.489 2.133-2.844 6.756-2.489 13.867-2.489 20.622-0.356 1.067 0.356 2.133 2.133 2.133 3.2l9.6 221.867c0.711 14.222 12.8 25.956 27.022 25.956h1.067c14.933-0.711 26.311-13.156 25.956-28.089l-8.889-206.933c0-1.422 0.711-2.489 1.778-2.844 6.756-3.2 14.222-3.911 21.689-2.133 1.422 0.356 2.133 1.422 2.489 2.844l15.289 157.156c1.422 14.578 14.222 25.6 29.511 24.178 7.111-0.711 13.511-4.267 18.133-9.6 4.622-5.689 6.756-12.444 6.044-19.911-0.711-7.111-2.489-20.978-4.978-38.756-17.067-127.289-24.533-208-10.311-217.956 8.178-5.689 18.489-7.467 28.089-4.978 0.711 0 1.067 0.356 1.422 0.711l55.111 56.889c9.956 10.311 27.733 10.667 38.044 0.711 4.978-4.978 8.178-11.733 8.178-18.844s-2.489-14.222-7.467-19.2l-155.378-160.711z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 