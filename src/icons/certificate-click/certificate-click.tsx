import React, { ReactElement } from 'react';
import { type Icon } from '@divi/types';
import IconJson from './certificate-click.json';
const iconData = IconJson;

// Icon data.
export const name      = 'caweb/certificate-click'; // Unique name.
export const viewBox   = '0 -64 1024 1024'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M537.702 356.625c1.065-5.082 1.675-10.921 1.675-16.903 0-2.268-0.088-4.515-0.26-6.739l0.018 0.295c6.481-11.724 10.295-25.702 10.295-40.572 0-1.073-0.020-2.141-0.059-3.204l0.005 0.154c-0.049-2.938-0.27-5.774-0.656-8.558l0.042 0.366h80.896l-1.229 75.162zM0 907.947v-626.483h106.598c-0.368 2.645-0.625 5.797-0.714 8.991l-0.003 0.123c-0.011 0.508-0.017 1.107-0.017 1.707 0 15.517 4.109 30.075 11.298 42.644l-0.222-0.421c-0.134 1.775-0.211 3.844-0.211 5.93 0 5.838 0.599 11.536 1.738 17.036l-0.094-0.541h-39.014c-11.311 0-20.48 9.169-20.48 20.48v0 450.56c0 11.311 9.169 20.48 20.48 20.48v0h826.982c11.311 0 20.48-9.169 20.48-20.48v0-450.458c0-11.311-9.169-20.48-20.48-20.48v0h-54.886l84.787-75.162h40.96v626.074zM100.25 807.697v-409.6h38.195c3.161 3.729 6.511 7.079 10.116 10.137l0.124 0.103c4.292 15.317 12.263 28.426 22.918 38.791l0.020 0.019c10.126 10.147 22.747 17.8 36.864 21.963l0.614 0.155c9.066 10.909 20.584 19.467 33.729 24.878l0.575 0.21c9.547 4.043 20.648 6.393 32.298 6.393 4.503 0 8.924-0.351 13.237-1.027l-0.478 0.062c12.031 6.278 26.275 9.961 41.38 9.961 14.293 0 27.816-3.298 39.85-9.174l-0.538 0.237c2.862 0.321 6.179 0.505 9.539 0.505 27.767 0 52.61-12.516 69.197-32.214l0.112-0.137c29.087-9.271 51.409-32.066 59.845-60.801l0.161-0.639c3.422-2.917 6.503-5.998 9.326-9.307l0.095-0.114h110.694l-0.717 44.646c-0.006 0.296-0.010 0.645-0.010 0.995 0 27.655 22.419 50.074 50.074 50.074 12.804 0 24.485-4.806 33.339-12.711l-0.049 0.043 93.594-83.046h81.101v409.6zM793.6 523.742h-601.498c-11.509 0-20.838 9.33-20.838 20.838s9.33 20.838 20.838 20.838v0h601.498c11.509 0 20.838-9.33 20.838-20.838s-9.33-20.838-20.838-20.838v0zM793.6 615.902h-601.498c-11.537 0-20.89 9.353-20.89 20.89s9.353 20.89 20.89 20.89v0h601.498c11.622 0 21.043-9.421 21.043-21.043s-9.421-21.043-21.043-21.043v0zM793.6 708.062h-601.498c-11.537 0-20.89 9.353-20.89 20.89s9.353 20.89 20.89 20.89v0h601.498c11.707 0 21.197-9.49 21.197-21.197s-9.49-21.197-21.197-21.197v0zM883.302-53.794c-3.163 0.029-5.909 1.78-7.351 4.36l-0.022 0.043-80.794 149.402-105.062-108.646c-1.527-1.566-3.658-2.538-6.015-2.538-1.116 0-2.181 0.218-3.155 0.613l0.056-0.020c-2.902 1.191-4.944 3.921-5.119 7.147l-0.001 0.021-7.578 446.771c-0.001 0.040-0.001 0.086-0.001 0.133 0 4.637 3.759 8.397 8.397 8.397 2.123 0 4.062-0.788 5.54-2.087l-0.009 0.008 339.046-300.339c1.718-1.544 2.793-3.773 2.793-6.253 0-1.065-0.198-2.083-0.56-3.020l0.019 0.057c-1.257-3.112-4.198-5.295-7.664-5.427h-0.016l-141.517-2.355 76.493-141.517c0.613-1.145 0.973-2.504 0.973-3.948 0-3.171-1.736-5.936-4.31-7.397l-0.042-0.022-60.109-32.358c-1.152-0.644-2.528-1.024-3.992-1.024 0 0-0.001 0-0.001 0v0zM508.109 290.27c0 15.77-6.554 29.082-15.872 32.461 3.545 5.374 5.656 11.967 5.656 19.052 0 5.791-1.41 11.252-3.904 16.060l0.092-0.194c-5.939 14.848-17.613 24.166-27.648 23.552v0c12.8 19.763-24.883 58.061-45.261 47.002 0.717 10.24-8.806 21.504-23.45 27.648s-29.389 4.813-36.045-2.56c-8.704 20.48-57.754 19.251-64.102-1.843-15.872 17.818-62.464 1.434-61.44-23.142-8.806 4.608-23.347 0-34.816-10.957s-16.998-27.136-11.162-35.84v0c-10.24 0.717-21.709-8.602-27.853-23.347-2.47-4.667-3.92-10.201-3.92-16.074 0-6.956 2.034-13.436 5.539-18.88l-0.083 0.138c-9.318-3.379-16.179-16.589-16.077-32.358s7.27-29.082 16.691-32.256c-7.578-6.451-9.011-21.504-2.867-36.352s18.842-25.088 29.082-23.347c-4.506-8.909 0-23.45 11.264-34.714 6.39-7.53 15.861-12.276 26.44-12.276 2.274 0 4.497 0.219 6.648 0.638l-0.218-0.035c-0.922-23.347 45.568-40.96 60.416-22.938 2.15-10.24 15.462-16.589 32.051-16.896s29.491 6.758 32.666 16.282c6.451-7.578 21.299-9.318 36.147-3.584s24.474 17.101 24.064 27.034c2.005-0.412 4.309-0.648 6.668-0.648 10.506 0 19.919 4.681 26.266 12.071l0.039 0.046c11.469 11.059 15.974 25.702 11.571 34.611 10.24-1.843 22.733 7.885 29.286 23.142s4.813 29.798-2.662 36.352c9.318 3.072 16.486 16.282 16.794 32.154zM327.68 201.387c-48.976 0-88.678 39.703-88.678 88.678v0c4.403 117.453 172.954 117.35 177.357 0 0-48.976-39.703-88.678-88.678-88.678v0zM447.488 113.016c-9.46-11.657-21.718-20.688-35.767-26.118l-0.585-0.199c-6.27-2.555-13.564-4.495-21.157-5.482l-0.449-0.048c4.515-28.63 17.794-53.573 36.958-72.594l0.008-0.008 22.528 50.586 54.682-13.414s-32.87 40.96-37.376 75.981c-5.418-3.452-11.656-6.405-18.262-8.542l-0.58-0.162zM243.2 86.699c-14.453 5.736-26.556 14.745-35.816 26.156l-0.126 0.161-1.741 0.819c-6.701 2.389-12.481 5.257-17.854 8.705l0.343-0.206-3.686 1.741c-3.277-35.021-37.683-78.336-37.683-78.336l54.579 13.414 22.528-50.586c19.314 19.174 32.649 44.346 36.977 72.489l0.092 0.727c-6.638 1.106-12.557 2.815-18.17 5.117l0.557-0.202z"></path>
); // Your SVG path. without the svg tag.

export const data = iconData as Icon.Data; 