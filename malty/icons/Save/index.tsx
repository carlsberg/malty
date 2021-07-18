import { IconWrapper, IconWrapperInterface } from '@carlsberg/malty.atoms.icon-wrapper';
import React from 'react';

const Save = (props: IconWrapperInterface) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17.508 2.116c.237 0 .466.087.643.245l3.414 3.052a.965.965 0 01.322.72v14.99a.965.965 0 01-.965.966H2.919a.965.965 0 01-.965-.965V3.08c0-.533.432-.965.965-.965zM7.025 4.045H3.884v16.113h1.687v-7.816c0-.492.37-.897.847-.952l.112-.006h10.803c.53 0 .958.428.958.958v7.816h1.666V6.565l-2.819-2.52h-.578v5.063c0 .49-.369.896-.845.951l-.112.007h-7.62a.958.958 0 01-.957-.958zm9.35 9.254H7.487v6.859h8.887zm-1.731-8.59H8.941v3.44h5.703zM13 5.5a1 1 0 110 2 1 1 0 010-2z" />
    </g>
  );

export default Save;
