import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './lightbulb.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/lightbulb'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M802.486 496.794c3.928 10.44 7.132 21.296 9.924 32.15 0.516 1.86 1.138 3.618 1.55 5.478 2.482 10.234 4.238 20.572 5.686 31.116 0.31 2.378 0.93 4.858 1.24 7.236 1.448 12.716 2.274 25.534 2.274 38.56 0 182.354-148.034 330.7-329.872 330.7s-329.872-148.344-329.872-330.7c0-12.922 0.828-25.844 2.378-38.456 0.31-2.482 0.828-4.858 1.138-7.236 1.448-10.44 3.204-20.882 5.686-31.116 0.414-1.86 1.034-3.722 1.55-5.478 2.792-10.854 6.1-21.708 9.924-32.15 0.414-1.034 0.828-1.964 1.138-2.998 4.342-11.268 9.2-22.33 14.782-33.080 0.206-0.414 0.414-0.828 0.62-1.24 5.79-11.164 12.198-21.916 19.228-32.356 0.206-0.31 0.414-0.62 0.62-0.93 6.822-10.234 14.37-19.952 22.33-29.358 0.62-0.724 1.24-1.448 1.964-2.274 7.236-8.476 15.092-16.436 23.26-24.19 1.86-1.758 3.514-3.412 5.376-5.066 2.378-2.17 4.548-4.548 7.132-6.72 1.448-1.24 3.308-2.068 4.962-3.102 5.478-4.548 10.648-9.304 16.436-13.438 2.274-1.654 3.722-3.204 5.686-4.858 37.938-31.53 19.434-90.66 61.612-90.66 5.892 0 192.9 0 248.308 0 42.178 0 23.674 59.13 61.716 90.66 1.964 1.654 3.412 3.204 5.686 4.858 5.79 4.238 10.958 8.89 16.436 13.438 1.55 1.138 3.412 1.86 4.962 3.102 2.482 2.068 4.652 4.548 7.132 6.72 1.86 1.654 3.618 3.412 5.376 5.066 8.166 7.754 15.92 15.714 23.26 24.19 0.62 0.724 1.24 1.448 1.964 2.274 7.96 9.408 15.402 19.228 22.33 29.358 0.206 0.31 0.414 0.62 0.62 0.93 7.030 10.44 13.336 21.192 19.124 32.356 0.206 0.414 0.414 0.828 0.62 1.24 5.582 10.752 10.44 21.812 14.782 33.080 0.104 1.034 0.516 1.964 0.93 2.894v0zM677.402 621.052c-14.37 0-26.050 11.682-26.050 26.050 0 79.29-71.536 132.632-130.15 132.632-14.37 0-26.050 11.682-26.050 26.050s11.682 26.050 26.050 26.050c89.524 0 182.252-65.954 182.252-184.63-0.104-14.472-11.682-26.154-26.050-26.154zM490.188 15.578h-114.438l93.866-47.966c7.444-3.824 15.61-5.686 23.674-5.686s16.126 1.86 23.466 5.582l95.21 48.174-121.776-0.104zM651.35 88.046c0 14.37-11.682 26.050-26.050 26.050h-260.3c-14.37 0-26.050-11.682-26.050-26.050s11.682-26.050 26.050-26.050h260.3c14.37 0 26.050 11.682 26.050 26.050zM651.35 181.6c0 14.37-11.682 26.050-26.050 26.050h-260.3c-14.37 0-26.050-11.682-26.050-26.050s11.682-26.050 26.050-26.050h260.3c14.37 0 26.050 11.682 26.050 26.050z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 