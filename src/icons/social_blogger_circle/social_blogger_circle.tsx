import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './social_blogger_circle.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/social_blogger_circle'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M631.68 368.192h-239.36c-21.952 0-39.872-17.984-39.872-39.872s17.984-39.872 39.872-39.872h239.36c21.952 0 39.872 17.984 39.872 39.872s-17.92 39.872-39.872 39.872zM392.32 527.808h119.68c21.952 0 39.872 17.984 39.872 39.872 0 21.952-17.984 39.872-39.872 39.872h-119.68c-21.952 0-39.872-17.984-39.872-39.872-0.064-21.952 17.92-39.872 39.872-39.872zM512 960c-282.752 0-512-229.248-512-512s229.248-512 512-512 512 229.248 512 512c0 282.816-229.248 512-512 512zM831.168 334.912c0-113.856-92.672-206.080-207.36-206.080h-223.424c-114.56 0-207.616 92.224-207.616 206.016v226.176c0.064 113.856 92.992 206.144 207.616 206.144h104.64c114.688 0 206.464-85.632 206.464-199.488 1.536-21.312 20.736-39.872 42.624-39.872h35.776c22.912 0 41.28-24.064 41.28-46.784v-146.112z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 