import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './state.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/state'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M426.318 930.26c2.858-99.32 8.348-200.218 10.452-299.254 117.93-107.766 252.604-216.538 378.018-326.596 18.034-15.842 43.938-32.346 53.388-47.61 8.732-14.072 8.208-34.202 14.41-46.61 5.1-10.212 14.942-12.832 23.044-20.894 6.44-33.11-26.094-43.84-17.794-78.288-6.63-2.77-4.296-10.688-9.688-14.214 6.868-11.97 3.722-15.792 0.904-24.952 4.576-14.072 19.376-10.59 22.658-26.808-4.248-10.252-23.044-12.116-24.476-23.998-61.206-10.066-123.56-21.706-185.092-32.198-3.096 17.46-16.316 17.558-21.756 30.956 23.284 39.828-27.144 59.442-49.326 75.898-6.49 2.052-18.36-5.202-24.566-2.818-5.866 10.59 4.914 11.452 0.14 21.316-20.466 16.932-33.928 4.198-55.53 12.258-20.604 7.582-38.31 33.634-58.776 38.5-5.678 1.292-9.688-2.244-14.94-2.144-21.706 0.664-41.508 9.826-62.45 16.268-12.22 22.47-7.92 67.74-32.962 72.464-0.524 41.558-48.614 37.446-49.804 77.664-15.79 15.076-34.348 25.14-40.454 56.96 4.862 7.058 11.544 0.378 18.562 3.006 3.246 27.908-19.174 33.586-36.396 34.778-9.736 21.23-33.348 58.914-18.51 76.424 15.552 2.244 16.128-21.37 29.386-23.188 21.656-23.422 0.524 13.17-1.102 25.904 1.766 6.49 17.898 20.366 18.988 26.572-4.486 12.496-34.062 1.668-37.974 15.216-8.922-27.336-41.692-20.804-55.58-16.316-3.722 10.252 10.688 10.114 10.59 18.358-9.688 17.746-24.526 26.382-36.068 40.644 3.246 19.376-15.362 23.662-21.518 36.784-10.926 23.66 3.96 50.668-13.448 71.988 16.080 33.25-32.82 28.526-31.96 68.74 10.212 19.086 16.982 40.168 24.376 60.73-2.672 7.154 0.428 10.978-3.246 18.7 18.89 19.086 1.668 59.104 3.572 88.116 100.322 2.722 199.028 2.578 294.916-2.384z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 