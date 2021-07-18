import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const GlassWeissbier = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8 23h8a1 1 0 00.978-1.209 31.91 31.91 0 01-.679-5.381c.001-.724.155-1.343.811-3.485.34-1.11.527-1.789.676-2.528.176-.878.252-1.676.213-2.438a28.458 28.458 0 00-1.194-6.245 1 1 0 00-.955-.704H8.2a1 1 0 00-.95.69 27 27 0 00-1.247 6.22c-.04.793.038 1.593.22 2.473.153.739.345 1.416.694 2.526.674 2.14.833 2.76.833 3.521a29.82 29.82 0 01-.725 5.337A1 1 0 008 23zm1.75-6.517c0-1.1-.174-1.779-.925-4.165-.33-1.05-.508-1.675-.643-2.33-.15-.725-.213-1.36-.183-1.937.136-1.693.45-3.389.938-5.041h6.166a26.42 26.42 0 01.9 5.078c.028.553-.033 1.19-.178 1.916-.132.656-.305 1.284-.627 2.336-.73 2.38-.898 3.058-.898 4.11.062 1.545.224 3.058.487 4.55H9.23c.28-1.49.454-3 .52-4.517z" />
    </g>
  );

export default GlassWeissbier;
