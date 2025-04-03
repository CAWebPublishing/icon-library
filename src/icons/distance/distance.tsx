import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './distance.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/distance'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M927.744 673.963c-26.88 0-53.76 0-63.232 0-2.56 0-3.84 0-3.84 0-9.728 0-36.352 0-63.232 0-33.792 0-83.456-28.416-83.456-62.208s0-163.584 0-202.496c0-39.168 32.512-67.584 49.92-71.168 0 0 0-2.816 0-7.68 0-41.472 0-111.616 0-166.912 8.448-2.56 16.64-7.168 24.064-13.568 3.84-3.072 93.696-76.8 101.12-82.944 13.568-10.752 21.504-25.6 21.76-40.96 24.32 5.12 50.688 25.6 50.688 60.928 0 27.392 0 144.128 0 217.6 0 9.472 0 18.176 0 25.856 0 5.12 0 7.68 0 7.68 17.664 3.584 49.92 32 49.92 71.168s0 168.704 0 202.496c-0.256 33.792-49.92 62.208-83.712 62.208zM957.044 857.951c18.914-52.247-8.108-109.935-60.355-128.849s-109.935 8.108-128.849 60.355c-18.914 52.247 8.108 109.935 60.355 128.849s109.935-8.108 128.849-60.355zM150.272 65.451v0c2.56 2.048 9.728 8.192 39.424 32.512 25.344 20.736 59.904 49.152 62.464 51.2 4.352 3.584 8.96 6.656 13.568 9.216 0 45.824 0 103.424 0 146.176 0 9.472 0 18.176 0 25.856 0 5.12 0 7.68 0 7.68 17.664 3.584 49.92 32 49.92 71.168s0 168.704 0 202.496c0 33.792-49.664 62.208-83.456 62.208-26.88 0-53.76 0-63.232 0-2.56 0-3.84 0-3.84 0-9.728 0-36.352 0-63.232 0-34.048 0-83.968-28.416-83.968-62.208s0-163.584 0-202.496c0-39.168 32.512-67.584 49.92-71.168 0 0 0-2.816 0-7.68 0-67.84 0-212.48 0-243.456 0-40.96 35.584-62.208 62.208-62.208 0.256 0 0.256 0 0.512 0 0 10.752 3.584 26.368 19.712 40.704zM261.467 857.997c18.914-52.247-8.108-109.935-60.355-128.849s-109.935 8.108-128.849 60.355c-18.914 52.247 8.108 109.935 60.355 128.849s109.935-8.108 128.849-60.355zM835.328 18.347c-0.512 0.256-0.768 0.768-1.28 1.024 0 0 0 0-0.256 0-0.256 0.256-1.024 0.768-2.048 1.536s-2.048 1.536-3.584 2.816c-1.536 1.024-3.072 2.304-5.12 3.84-0.768 0.512-1.536 1.024-2.304 1.792-1.536 1.28-3.072 2.304-4.864 3.84-0.768 0.768-1.792 1.28-2.56 2.048-2.304 1.792-4.864 3.84-7.424 5.888-3.84 3.072-7.936 6.144-12.032 9.472s-8.448 6.4-12.544 9.728c-2.816 2.048-5.376 4.352-8.192 6.144-15.872 12.288-28.928 22.272-30.208 23.296-0.768 0.768-1.792 1.28-2.56 1.792-0.256 0.256-0.512 0.256-0.768 0.512-0.768 0.512-1.28 0.768-2.048 1.28-0.256 0-0.256 0.256-0.512 0.256-0.768 0.512-1.536 0.768-2.304 1.024-0.256 0-0.256 0-0.512 0.256-0.512 0.256-1.28 0.512-1.792 0.512-0.256 0-0.512 0-0.768 0.256-0.768 0.256-1.536 0.256-2.048 0.256 0 0 0 0 0 0-0.768 0-1.536 0-2.048 0-0.256 0-0.256 0-0.512 0-0.768 0-1.28 0-2.048-0.256 0 0 0 0 0 0-0.512 0-1.28-0.256-1.792-0.512-0.256 0-0.256 0-0.512-0.256-0.512-0.256-1.024-0.512-1.536-0.768 0 0 0 0-0.256 0-0.512-0.256-1.024-0.512-1.28-1.024 0 0-0.256-0.256-0.256-0.256-0.512-0.256-0.768-0.768-1.28-1.28 0 0-0.256-0.256-0.256-0.256-0.256-0.512-0.768-0.768-1.024-1.28 0 0-0.256-0.256-0.256-0.256-0.256-0.512-0.512-1.024-0.768-1.536 0 0 0-0.256-0.256-0.256-0.256-0.512-0.512-1.024-0.512-1.536 0 0 0-0.256 0-0.256-0.256-0.512-0.256-1.28-0.512-2.048 0-0.256 0-0.256 0-0.512 0-0.768-0.256-1.536-0.256-2.048 0-5.632 0-18.432 0-30.976h-375.296c0 13.312 0 26.624 0 32.512 0 1.024 0 1.792-0.256 2.56 0 0.256 0 0.512-0.256 0.768 0 0.512-0.256 1.024-0.512 1.536 0 0.256-0.256 0.512-0.256 0.768-0.256 0.512-0.512 1.024-0.768 1.28s-0.256 0.512-0.512 0.768-0.768 0.768-1.024 1.28c-0.256 0.256-0.256 0.256-0.512 0.512-0.512 0.512-1.024 1.024-1.792 1.28 0 0-0.256 0-0.256 0.256-0.512 0.256-1.024 0.512-1.792 0.768-0.256 0-0.512 0.256-0.768 0.256-0.512 0.256-1.024 0.256-1.536 0.512-0.256 0-0.512 0-0.768 0.256-0.512 0-1.024 0-1.792 0.256-0.256 0-0.768 0-1.024 0s-0.512 0-0.768 0-1.024 0-1.536-0.256c-0.256 0-0.512 0-0.768 0-0.768 0-1.28-0.256-2.048-0.512 0 0-0.256 0-0.256 0-0.768-0.256-1.536-0.512-2.56-0.768-0.256 0-0.512-0.256-0.768-0.256-0.512-0.256-1.28-0.512-1.792-0.768-0.256-0.256-0.512-0.256-0.768-0.512-0.512-0.256-1.28-0.768-1.792-1.024-0.256-0.256-0.512-0.256-0.768-0.512-0.768-0.512-1.792-1.28-2.56-1.792 0 0-0.256-0.256-0.512-0.512-0.512-0.512-1.28-1.024-2.304-1.792-1.792-1.28-4.096-3.072-6.912-5.376-0.512-0.512-1.28-1.024-1.792-1.536-0.256-0.256-0.512-0.512-0.768-0.768-0.768-0.512-1.536-1.024-2.304-1.792-0.256-0.256-0.768-0.512-1.024-0.768s-11.008-8.448-13.312-10.24c-1.536-1.28-12.8-9.984-16.896-13.056-2.048-1.536-33.024-25.6-35.328-27.392-1.28-1.024-6.4-5.12-7.424-5.632-0.512-0.512-1.024-0.768-1.024-0.768s-0.256 0-0.256 0c0 0 0 0 0 0-0.512-0.256-0.768-0.768-1.28-1.024s-0.768-0.768-1.024-1.024c0 0 0 0 0 0-2.304-2.304-3.84-5.12-3.84-8.448 0 0 0 0 0 0v0c0 0 0-0.256 0-0.256 0-4.352 3.584-8.192 6.912-10.752 0 0 19.2-14.848 39.936-30.976 4.096-3.328 8.448-6.4 12.544-9.728 2.816-2.048 5.376-4.352 8.192-6.144 15.872-12.288 28.928-22.272 30.208-23.296 0.768-0.768 1.792-1.28 2.56-1.792 0.256-0.256 0.512-0.256 0.768-0.512 0.768-0.512 1.28-0.768 2.048-1.28 0.256 0 0.256-0.256 0.512-0.256 0.768-0.512 1.536-0.768 2.304-1.024 0.256 0 0.256 0 0.512-0.256 0.512-0.256 1.28-0.512 1.792-0.512 0.256 0 0.512 0 0.768-0.256 0.768-0.256 1.536-0.256 2.048-0.256 0 0 0 0 0 0 0.768 0 1.536 0 2.048 0 0.256 0 0.256 0 0.512 0 0.768 0 1.28 0 2.048 0.256 0 0 0 0 0 0 0.512 0 1.28 0.256 1.792 0.512 0.256 0 0.256 0 0.512 0.256 0.512 0.256 1.024 0.512 1.536 0.768 0 0 0 0 0.256 0 0.512 0.256 1.024 0.512 1.28 1.024 0 0 0.256 0.256 0.256 0.256 0.512 0.256 0.768 0.768 1.28 1.28 0 0 0.256 0.256 0.256 0.256 0.256 0.512 0.768 0.768 1.024 1.28 0 0 0.256 0.256 0.256 0.256 0.256 0.512 0.512 1.024 0.768 1.536 0 0 0 0.256 0.256 0.256 0.256 0.512 0.512 1.024 0.512 1.536 0 0 0 0.256 0 0.256 0.256 0.512 0.256 1.28 0.512 2.048 0 0.256 0 0.256 0 0.512 0 0.768 0.256 1.536 0.256 2.048 0 5.632 0 18.432 0 30.976v0h100.352c0 0 0 0 0 0h274.688c0-13.312 0-26.624 0-32.512 0-1.024 0-1.792 0.256-2.56 0-0.256 0-0.512 0.256-0.768 0-0.512 0.256-1.024 0.512-1.536 0-0.256 0.256-0.512 0.256-0.768 0.256-0.512 0.512-1.024 0.768-1.28s0.256-0.512 0.512-0.768 0.768-0.768 1.024-1.28c0.256-0.256 0.256-0.256 0.512-0.512 0.512-0.512 1.024-1.024 1.792-1.28 0 0 0.256 0 0.256-0.256 0.512-0.256 1.024-0.512 1.792-0.768 0.256 0 0.512-0.256 0.768-0.256 0.512-0.256 1.024-0.256 1.536-0.512 0.256 0 0.512 0 0.768-0.256 0.512 0 1.024 0 1.792-0.256 0.256 0 0.768 0 1.024 0s0.512 0 0.768 0 1.024 0 1.536 0.256c0.256 0 0.512 0 0.768 0 0.768 0 1.28 0.256 2.048 0.512 0 0 0.256 0 0.256 0 0.768 0.256 1.536 0.512 2.56 0.768 0.256 0 0.512 0.256 0.768 0.256 0.512 0.256 1.28 0.512 1.792 0.768 0.256 0.256 0.512 0.256 0.768 0.512 0.512 0.256 1.28 0.768 1.792 1.024 0.256 0.256 0.512 0.256 0.768 0.512 0.768 0.512 1.792 1.28 2.56 1.792 3.072 2.56 89.6 69.376 89.856 69.632 3.584 3.072 6.4 6.656 6.4 11.008 0.256 3.328-2.56 6.656-5.376 9.216z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 