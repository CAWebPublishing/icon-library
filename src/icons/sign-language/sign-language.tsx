import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './sign-language.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/sign-language'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M332.8 598.4c20.622 6.044 40.889 3.556 61.156-2.133 38.4-10.667 56.178-35.556 56.889-59.733 1.067-16.356 12.444-28.089 28.089-28.8s29.156 11.378 29.867 27.022v0.356c2.489 29.867-3.911 43.378-21.333 67.2s-42.311 37.689-69.689 48l-19.2 7.111 0.356 1.422c1.778 0.356 3.911 0.356 5.689 0.356 6.044-0.711 12.089-1.067 18.133-1.778 20.978-2.489 41.6-7.111 59.733-18.844 4.622-2.844 9.244-5.333 14.222-7.467 11.733-5.333 25.6-2.133 33.422 8.178 8.533 10.667 9.244 24.889 0.356 34.489-6.756 7.467-14.578 13.511-23.467 18.133-42.311 20.978-86.756 29.867-133.689 22.756-1.067 0-2.489-0.356-3.556-0.356s-2.133 0-2.844 0c27.022 8.889 54.044 16.711 82.133 18.133 14.222 1.067 28.8 1.778 43.022 3.556 12.8 1.778 19.911 9.956 22.044 22.4 2.844 18.844-9.956 33.422-30.222 34.133-44.444 1.067-88.889-5.689-131.2-20.267-25.6-9.244-50.133-21.689-72.889-36.978-2.133-1.422-4.267-2.489-7.111-3.911 0 0.711 0.356 1.422 0.356 1.778 0.711 1.067 1.778 2.133 2.489 3.2 22.756 24.889 50.844 44.089 82.489 56.178 11.378 4.267 23.111 7.822 34.133 12.444 10.311 3.911 16.711 14.578 15.289 25.244-0.711 13.867-8.178 22.756-20.622 28.444l-1.067 0.356c-33.067-0.356-61.156-15.289-88.533-30.933-33.422-19.2-62.578-43.022-83.2-76.444-14.222-22.756-24.889-46.933-35.2-71.467-17.422-39.822-38.044-78.222-61.867-114.489-10.667-16.356-25.956-28.089-41.956-38.756-20.622-13.867-30.578-17.422-48.356-25.956s-6.044-79.644 11.378-116.267c22.756-48.356 65.778-76.089 79.289-71.822s45.867 30.933 68.267 40.178c13.156 5.333 27.022 9.6 41.6 7.467 9.956-1.422 19.911-3.2 29.867-4.622 22.756-2.489 45.511-6.044 68.622-6.756 33.778-1.067 73.244-1.778 100.978 15.289 35.556 16.711 54.4 50.133 54.4 62.222 1.067 18.133-10.667 39.111-30.933 29.511s-36.267-32.356-65.778-36.978c-21.333-2.844-42.667 0-62.222 8.533-34.844 14.578-56.889 49.778-54.4 87.822 2.844 38.756 28.444 71.467 65.067 82.844zM957.511 518.4c-37.333 46.578-75.733 79.644-94.933 59.733-34.844-35.911-41.956-49.778-72.533-63.644-2.489-1.067-5.333-1.778-8.178-2.133-27.378-0.711-54.4-1.067-81.778-1.422-43.378-0.356-77.156-7.467-114.844-28.8-35.2-19.556-54.756-72.178-48.356-81.422 0-21.333 18.133-32 30.933-24.178 9.6 5.333 34.844 37.333 45.511 45.511 26.311 17.422 38.756 18.133 68.978 10.311 49.067-12.444 78.578-61.867 66.133-110.933-6.4-25.6-23.822-47.289-47.289-59.378-27.378-13.867-56.178-12.8-84.622-3.556-24.533 8.178-39.822 12.8-46.933 38.756-7.111 26.667-25.6 33.778-38.756 29.511s-23.822-16.356-22.044-28.8c4.622-30.933 16-47.289 40.178-68.267s52.978-32 84.622-35.911c3.911-0.356 8.178-1.422 12.089-2.133v-1.422c-1.778-0.356-3.2-0.711-4.978-1.067-29.511-1.422-59.022-4.267-87.111 8.889-3.2 1.422-6.044 2.489-9.244 3.2-14.222 4.978-29.867-2.489-34.844-16.711-0.711-1.778-1.067-3.556-1.422-5.333-2.489-14.578 2.844-25.244 17.422-32.711 23.822-12.089 50.133-18.489 77.156-19.556 24.178-1.067 48.711 2.489 71.822 9.6 3.2 1.067 6.756 1.778 9.956 2.844-1.067-1.778-2.844-3.2-4.622-3.911-19.911-10.311-40.533-18.489-62.222-24.533-16.711-4.622-33.778-8.533-50.489-12.444-9.956-2.133-17.422-10.311-18.844-20.267-2.489-10.311 0.711-21.333 8.178-28.444 9.244-8.889 20.267-8.533 31.644-6.4 69.689 12.089 132.267 39.111 184.889 87.822 2.844 2.489 5.689 4.622 8.533 7.111l1.067-1.067c-1.778-2.844-3.2-5.689-4.978-8.533-21.333-31.644-49.778-54.756-83.2-72.533-6.756-3.2-13.156-7.111-19.2-11.733-12.089-9.6-13.867-27.378-4.267-39.467 1.422-1.778 3.2-3.556 4.978-4.978 8.533-7.111 20.622-8.533 30.578-3.911 21.333 8.889 41.244 20.978 59.022 35.2 49.778 39.111 84.267 87.822 96.356 150.4 8.533 43.378 20.978 85.689 36.267 126.933 17.067 45.867 24.178 55.467 62.578 83.2 11.733 8.533 29.867 15.644 43.378 39.467 6.044 11.022-8.889 40.178-46.578 87.111z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 