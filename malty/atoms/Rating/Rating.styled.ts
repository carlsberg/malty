import styled from 'styled-components';

export const StyledRatingContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
`;

export const StyledStarContainer = styled.div`
  display: flex;
  column-gap: 17px;
  flex-direction: row-reverse;
`;

export const StyledMainContainer = styled.div`
  display: flex;
  column-gap: 17px;
`;

export const StyledInput = styled.input`
  display: none;
  position: absolute;
  margin-left: -9999;
`;

export const StyledLabel = styled.label<{
  editing: boolean;
}>`
  cursor: ${({ editing }) => (editing ? 'pointer' : 'default')};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
`;

export const StyledIconStarContainer = styled.span`
  font-style: normal;
  font-size: 20px;
`;
