import styled, { css } from 'styled-components';

export const StyledIcon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})<{
  color: string;
  size: string;
}>`
  ${({ color }) => css`
    fill: ${color};
    color: ${color};

    .path-speach-ballon {
      stroke: ${color};
    }
  `}

  ${({ size }) => css`
    height: ${size};
    width: ${size};
  `}

  transition: fill 0.25s ease-in-out;
`;
