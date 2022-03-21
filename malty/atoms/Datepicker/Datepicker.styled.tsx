import styled from 'styled-components';

export const StyledDatepicker = styled.div``;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & label {
    font-size: ${({ theme }) => theme.typography.desktop.text.small_bold['font-size'].value};
    font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
    display: block;
    margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
    &:first-letter {
        text-transform: capitalize;
    }
  }
  & button {
    position: relative;
    padding: 0;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    height: ${({ theme }) => theme.sizes['2xl'].value};
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    padding: 0 ${({ theme }) => theme.sizes.s.value};
    border: ${({ theme }) => `${theme.borders['border-1px--solid']['border-width'].value}
    ${theme.borders['border-1px--solid']['border-style'].value}
    ${theme.colors.colours.default['digital-black'].value}`};
    font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-size'].value};
  }
  & svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: ${({ theme }) => theme.sizes.s.value};
  }
}
`;
