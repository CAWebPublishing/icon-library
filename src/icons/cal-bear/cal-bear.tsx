import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './cal-bear.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/cal-bear'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M67.584 571.665l56.32 41.011 56.73-40.397-21.606 66.202 55.962 41.472-69.632-0.051-22.17 65.997-21.453-66.202-69.632-0.717 56.371-40.858zM522.035 202.257c-378.982 0-522.035-60.109-522.035-60.109h1024c0 0-147.098 60.109-501.965 60.109zM194.202 536.593c-1.331-1.434-2.611-2.816-3.738-4.045-3.277-3.635-5.325-6.093-5.325-6.093 0 2.56-1.28 5.12-4.659 8.038-15.155 13.261-20.838 5.683-26.522 3.789s-7.578-18.944-7.578-18.944-9.472 9.472-20.838 5.683c-11.366-3.789-15.155-17.050-13.261-24.627s-32.205-34.099-34.099-49.203c-1.894-15.155 1.894-17.050-1.894-24.627s-43.571-47.309-43.571-47.309 34.099-37.888 52.992-37.888c18.944 0 73.83 9.472 73.83 9.472s35.994-13.261 51.098-1.894c6.246 4.71 16.077 14.285 23.45 26.266 6.656 3.891 13.056 7.834 18.227 11.571 13.107 4.352 25.549 2.611 30.669 1.536 0.102 0 0.256-0.051 0.307-0.051 0.563-0.102 1.024-0.205 1.382-0.307-0.358 0.102-0.819 0.205-1.382 0.307l1.792-0.973c0 0 0 0 0.051 0.051 0 0 0 0-0.051-0.051v0c-12.954-14.029-16.64-73.421-16.64-73.421-35.994-39.782-32.205-58.675-39.782-68.147s-22.733 0-34.099 0c-11.366 0-20.838-11.366-28.416-20.838s11.366-7.578 11.366-7.578h92.774c7.578 9.472 20.838 28.416 54.886 43.571 25.702 11.418 58.88 43.264 77.722 63.13v0c0.102 0.102 0.205 0.205 0.307 0.307 1.229-1.024 2.406-1.997 3.533-2.918v0c3.994-3.277 7.424-5.99 9.626-7.424 0 0 0 0 0 0 7.526-7.27 22.272-21.146 35.686-31.386 18.944-14.541 17.050-18.688 15.155-29.030-1.894-10.394-15.155-2.099-30.31-6.246s-17.050-22.835-17.050-22.835h71.936c0 0 28.416 33.229 35.994 51.866 6.144 15.104-11.315 47.923-18.176 59.853 0 0 0 0 0 0-1.434 2.816-2.56 5.837-3.379 9.011v0c-0.307 1.126-0.563 2.202-0.768 3.328 31.642-6.861 60.826-4.096 75.418 3.226 3.686 1.843 7.066 4.147 10.189 6.707 0.358 0.307 0.819 0.563 1.178 0.87 0.87-0.205 1.638-0.512 2.406-0.768 2.509-0.973 4.403-2.253 5.837-3.686 0.922-0.922 1.69-1.946 2.253-2.97v-0.102l-0.051-0.256c-0.102-0.256-0.256-0.461-0.358-0.717-21.555-39.168-2.56-91.034-2.56-103.219 0-13.261-5.683-5.683-5.683-5.683-24.627 5.683-31.232-0.922-31.232-0.922-22.733-9.472-13.261-24.627-13.261-24.627h107.93c0 0 3.789 5.683 1.894 17.050s1.894 15.155 17.050 18.944c8.141 2.048 35.635 44.442 59.802 70.554 1.229 1.331 2.458 2.662 3.686 3.891 0.102-0.102 0.205-0.205 0.307-0.307 0.973-0.922 1.946-1.997 2.867-3.277 8.909-12.595 15.002-42.752 23.552-45.414 3.584-1.997 7.834-3.686 13.005-4.659 30.31-5.888 74.803-20.531 63.437-26.419s-19.866 10.752-38.81-4.915-13.261-25.446-13.261-25.446h85.197c0 0 11.366 41.114 18.944 54.835s1.894 15.667-13.261 33.28c-15.155 17.613-17.254 41.114-18.944 95.949-0.154 5.53-1.024 11.469-2.304 17.613v0c-3.277 14.848-9.421 30.669-15.309 42.752-5.888 12.134-11.469 20.582-13.414 20.582 0 0 0.102 1.229 0.256 3.123 0.154 2.15 0.358 5.12 0.512 8.141 0.102 3.021 0.154 6.093 0.051 8.397-0.256 4.608-6.451 18.842-17.664 24.73-18.995 9.984 3.43-12.032-24.986 20.122-28.416 32.205-88.986 52.992-162.816 60.57-28.723 2.97-56.576 2.15-81.254 0.102-37.939-3.174-68.25-9.318-82.534-9.574-0.307 0-0.666 0-0.922 0-22.733 0-51.098 24.627-88.986 30.31-2.56 0.358-5.069 0.563-7.526 0.563-34.662 0.154-65.178-33.741-102.246-47.872-9.677-3.686-18.586-8.346-26.778-13.67 0 0 0 0 0 0-10.189 3.021-30.925-16.947-42.854-29.747zM285.542 387.806c0 0-0.051 0-0.051 0 0.051 0 0.051 0 0.051 0v0z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 