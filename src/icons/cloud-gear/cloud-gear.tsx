import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './cloud-gear.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/cloud-gear'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M861.184 276.138c-19.25 1.842-33.996 16.384-41.984 33.382-4.506 19.866 0.614 38.912 17.818 49.972 3.482 2.866 7.374 9.010 1.638 15.974-8.398 13.722-20.274 24.576-28.672 38.502-2.866 3.482-12.494 4.506-15.974 1.638-14.13-11.47-37.274-15.77-52.634-7.782-18.638 8.398-26.418 28.466-24.37 47.718 0.614 6.348-1.842 13.108-8.398 13.722-15.77 4.71-31.744 6.348-48.128 4.71-6.35 0.614-10.24-5.53-10.854-11.878-1.842-19.25-13.518-37.478-33.382-41.984-16.59-4.914-38.912 0.614-49.972 17.818-2.866 3.482-9.010 7.374-15.974 1.638-13.722-8.398-27.852-19.866-38.706-31.744-3.892-6.144-4.506-12.494-1.638-15.974 14.746-14.336 15.77-37.274 7.782-52.634s-28.466-26.418-47.718-24.37c-6.348 0.614-13.108-1.842-13.722-8.398-4.71-15.77-6.348-31.744-4.71-48.128-0.614-6.35 5.53-10.24 11.878-10.854 19.25-1.842 34.406-13.106 41.984-33.382 4.506-19.866-0.614-38.912-17.818-49.972-3.482-2.866-7.372-9.010-1.638-15.974 8.396-13.722 20.274-24.576 28.672-38.502 6.144-3.89 12.494-4.506 15.974-1.638 14.13 11.47 37.274 15.77 52.634 7.782 18.638-8.398 26.418-28.466 24.37-47.718-0.614-6.35 1.842-13.106 8.398-13.722 9.626-1.024 15.974-1.638 25.6-2.458 6.35-0.614 15.974-1.638 22.528-2.254 6.35-0.614 10.24 5.53 10.854 11.878 1.842 19.25 13.518 37.478 33.382 41.984 16.59 4.914 38.912-0.614 49.972-17.818 2.866-3.482 9.010-7.374 15.974-1.638 13.722 8.398 27.852 19.866 38.706 31.744 3.89 6.144 4.506 12.494 1.638 15.974-14.746 14.336-15.77 37.274-7.782 52.634s28.466 26.418 44.646 24.78l3.278-0.41c6.35-0.614 13.106 1.842 13.722 8.398 1.638 15.974 3.072 32.154 4.71 48.128 0.41 6.35-5.53 10.24-12.082 10.854zM758.374 250.538c-5.326-54.476-51.404-95.438-109.158-89.702-54.476 5.326-95.028 54.682-89.702 109.158s54.682 95.028 109.158 89.702c54.476-5.12 95.028-54.476 89.702-109.158zM982.016 520.056c-25.804 35.43-61.236 61.236-103.218 74.138 3.278 9.626 3.278 19.25 3.278 32.154 0 35.43-9.626 87.040-64.512 125.746s-106.29 35.634-141.722 29.082c-12.902-3.278-25.804-6.348-35.43-12.902-9.626 12.902-25.804 32.154-48.332 48.334-57.958 45.056-125.748 64.512-199.884 54.886-70.86-9.626-138.65-45.056-177.356-99.942-32.154-41.984-45.056-90.318-41.984-141.926-19.252-6.35-41.984-19.25-67.79-38.708-61.234-48.332-93.594-109.568-93.594-177.356 0-48.332 16.178-96.666 54.886-132.096 41.984-45.056 103.218-70.86 164.454-70.86h45.056c16.178 0 29.082 12.902 29.082 29.082s-12.902 29.082-29.082 29.082h-45.056c-45.056 0-90.318 19.25-122.47 51.61-16.18 19.046-38.706 48.128-38.706 90.112 0 51.61 25.806 96.666 70.862 132.096 35.43 29.082 69.222 40.14 69.222 40.14s10.24 3.89 16.384 6.144c6.348 2.254 15.77 9.012 12.492 22.734-0.818 3.072-1.23 5.12-1.23 5.12-9.626 41.984 0 83.764 25.804 119.194 32.154 41.984 83.764 70.86 141.926 77.414 57.958 6.35 109.568-6.35 151.552-41.984 35.226-25.6 51.404-57.958 51.404-57.958s3.278-6.35 6.35-12.902c3.278-6.35 16.178-9.626 25.804-3.278s12.902 9.626 12.902 9.626 64.512 48.334 132.096 0c25.804-19.25 38.706-41.984 38.706-70.86 0-22.528-9.626-41.984-9.626-41.984s-3.278-6.35-6.35-12.902c-3.278-9.626-3.278-25.806 16.178-29.082 3.278 0 12.902-3.276 12.902-3.276 38.706-6.35 74.138-29.082 96.666-61.236 22.528-29.082 29.082-64.512 22.528-103.22-3.278-25.804-14.95-49.562-32.154-64.512-11.674-10.034-16.178-28.876-4.914-43.212 10.65-13.722 31.538-15.154 43.622-5.12 29.082 25.804 45.056 61.236 54.886 99.942 9.626 55.092-3.278 106.702-35.634 148.686zM596.174 16.248c-118.374 18.842-206.438 125.134-204.596 247.602 1.638 119.808 86.016 219.956 201.114 240.026l3.278-51.814 99.942 89.088-109.978 68.608 3.278-52.224c-67.584-10.446-129.638-45.056-175.514-97.28-47.308-54.068-73.932-123.494-74.956-195.79-1.024-72.908 23.962-143.566 70.246-199.066 45.876-54.886 109.568-91.342 179.2-102.194 1.23-0.206 2.458-0.206 3.686-0.41 0.206 0 0.206 0 0.41 0 12.902 0 24.166 9.626 26.010 22.732 2.254 14.746-7.782 28.466-22.118 30.72z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 