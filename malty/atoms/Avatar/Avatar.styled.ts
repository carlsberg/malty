import styled from 'styled-components';

export const StyledAvatar = styled.div<{
  fontSize?: number;
  profileImg?: string;
}>`
  width: 100%;
  padding-top: 100%;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.support.support40.value};
  display: inline-block;
  position: relative;
  background-image: ${({ profileImg }) => `${profileImg ? `url(${profileImg})` : null}`};
  background-size: cover;
  background-position: center;
  background-repeat: none;
  & span {
    position: absolute;
    color: ${({ theme }) => theme.color.default.value};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: ${({ fontSize }) => `${fontSize || '12'}px`};
    letter-spacing: -1px;
    white-space: nowrap;
  }
`;
