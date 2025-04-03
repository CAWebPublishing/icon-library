import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './read-book.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/read-book'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M434.182 3.932c-155.654 50.356-233.472 73.25-389.126 119.020-18.308 4.586-36.616 22.894-32.048 41.202 0-18.308-4.586-36.616-4.586-54.942s13.74-36.616 32.048-41.202c155.654-50.356 233.472-73.25 389.126-119.020 18.308-4.586 36.616 4.586 36.616 18.308 0 18.308 4.586 36.616 4.586 54.942 0-13.74-13.74-22.894-36.616-18.308zM438.75 741c-114.452 36.616-169.394 54.942-283.828 91.558-27.462 13.74-45.788 18.308-77.818 27.462-64.096 27.462-64.096-13.74-64.096-50.356 0-41.202 0-59.51 0-100.712 0-192.27 0-288.414 0-480.684 0-22.894 18.308-50.356 36.616-54.942 155.654-50.356 233.472-77.818 389.126-128.192 18.308-4.586 36.616 9.154 36.616 32.048 0 242.626 0 366.232 0 608.876 0 27.462-13.74 50.356-36.616 54.942zM406.702 177.894c-119.020 41.202-173.962 59.51-306.722 100.712-27.462 4.586-27.462 32.048-27.462 45.788s9.154 18.308 18.308 13.74c123.606-41.202 187.702-64.096 315.876-105.298 9.154-4.586 18.308-13.74 18.308-27.462-4.586-9.154 0-32.048-18.308-27.462zM406.702 301.5c-119.020 41.202-173.962 59.51-306.722 100.712-27.462 4.586-27.462 32.048-27.462 45.788s9.154 18.308 18.308 13.74c123.606-41.202 187.702-64.096 315.876-105.298 9.154-4.586 18.308-13.74 18.308-27.462-4.586-4.586 0-32.048-18.308-27.462zM406.702 434.26c-119.020 41.202-173.962 59.51-306.722 100.712-27.462 4.586-27.462 32.048-27.462 45.788s9.154 18.308 18.308 13.74c123.606-41.202 187.702-64.096 315.876-105.298 9.154-4.586 18.308-13.74 18.308-27.462-4.586-4.586 0-32.048-18.308-27.462zM406.702 567.020c-119.020 41.202-173.962 59.51-306.722 100.712-27.462 4.586-27.462 32.048-27.462 45.788s9.154 18.308 18.308 13.74c123.606-41.202 187.702-64.096 315.876-105.298 9.154-4.586 18.308-13.74 18.308-27.462-4.586-9.154 0-32.048-18.308-27.462zM969.808 109.23c-155.654-45.788-238.058-68.664-393.712-119.020-18.308-4.586-36.616 4.586-36.616 22.894 0-18.308 0-36.616 4.586-54.942 0-18.308 18.308-27.462 36.616-22.894 155.654 45.788 238.058 68.664 393.712 119.020 18.308 4.586 36.616 22.894 32.048 41.202 0 18.308-4.586 36.616-4.586 54.942 4.586-13.74-13.74-32.048-32.048-41.202zM859.924 704.366c0 54.942 0 77.818 0 132.76-114.452-36.616-173.962-54.942-288.414-96.144-18.308-4.586-36.616-32.048-36.616-54.942 0-247.212 0-370.818 0-618.030 0-22.894 18.308-36.616 36.616-32.048 160.222 50.356 238.058 77.818 393.712 128.192 18.308 4.586 36.616 32.048 36.616 54.942 0 192.27 0 293 0 485.27-41.202-13.74-64.096-22.894-109.866-36.616-13.74 0-32.048 13.74-32.048 36.616zM608.144 621.962c128.192 45.788 27.462 9.154 151.068 50.356 9.154 4.586 18.308-4.586 18.308-13.74 0-13.74 0-41.202-27.462-45.788-132.76-41.202-22.894-9.154-146.5-50.356-13.74-4.586-13.74 18.308-13.74 32.048 4.586 13.74 9.154 27.462 18.308 27.462zM914.866 278.606c-132.76-41.202-187.702-59.51-306.722-100.712-13.74-4.586-13.74 18.308-13.74 32.048s9.154 22.894 18.308 27.462c123.606 41.202 187.702 64.096 315.876 105.298 9.154 4.586 18.308-4.586 18.308-13.74-4.586-18.308-4.586-41.202-32.048-50.356zM914.866 402.212c-132.76-41.202-187.702-59.51-306.722-100.712-13.74-4.586-13.74 18.308-13.74 32.048s9.154 22.894 18.308 27.462c123.606 41.202 187.702 64.096 315.876 105.298 9.154 4.586 18.308-4.586 18.308-13.74-4.586-13.74-4.586-41.202-32.048-50.356zM942.328 580.76c0-13.74 0-41.202-27.462-45.788-132.76-41.202-187.702-59.51-306.722-100.712-13.74-4.586-13.74 18.308-13.74 32.048s9.154 22.894 18.308 27.462c123.606 41.202 187.702 64.096 315.876 105.298 4.586 0 13.74-4.586 13.74-18.308zM1015.578 773.030c-41.202 36.616-64.096 59.51-109.866 96.144 0-54.942 0-77.818 0-132.76 45.788 13.74 68.664 22.894 109.866 36.616z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 