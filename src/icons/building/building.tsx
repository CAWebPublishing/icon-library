import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './building.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/building'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M64-64h832c35.328 0 64 28.672 64 64v384c0 35.328-28.672 64-64 64h-192c-35.328 0-64-28.672-64-64v512c0 35.328-28.672 64-64 64h-192c-35.328 0-64-28.672-64-64v-256c0 35.328-28.672 64-64 64h-192c-35.328 0-64-28.672-64-64v-640c0-35.328 28.672-64 64-64zM64 0v128h64v-128h-64zM128 384v-64h-64v64h64zM64 448v64h64v-64h-64zM128 256v-64h-64v64h64zM192 320v64h64v-64h-64zM256 256v-64h-64v64h64zM192 448v64h64v-64h-64zM192 0v128h64v-128h-64zM256 576h-64v64h64v-64zM128 576h-64v64h64v-64zM512 0v128h64v-128h-64zM448 640v-64h-64v64h64zM384 704v64h64v-64h-64zM448 512v-64h-64v64h64zM448 384v-64h-64v64h64zM448 256v-64h-64v64h64zM512 320v64h64v-64h-64zM576 256v-64h-64v64h64zM512 448v64h64v-64h-64zM512 576v64h64v-64h-64zM512 704v64h64v-64h-64zM576 832h-64v64h64v-64zM448 832h-64v64h64v-64zM384 128h64v-128h-64v128zM768 192h-64v64h64v-64zM832 256h64v-64h-64v64zM832 128h64v-128h-64v128zM896 320h-64v64h64v-64zM768 320h-64v64h64v-64zM704 128h64v-128h-64v128z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 