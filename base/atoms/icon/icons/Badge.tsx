import * as React from 'react';


function Badge() {
  return (
    
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <circle cx={12.5} cy={12.5} fill="#4b87c5" r={10.5} />
        <text
          fill="#fff"
          fontFamily="Montserrat-Bold, Montserrat"
          fontSize={10}
          fontWeight="bold"
          letterSpacing={0.046}
        >
          <tspan x={9.177} y={16}>
            8
          </tspan>
        </text>
      </g>
  );
}

export default Badge;
