import styled from 'styled-components';

export const StyledRatingContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledStarContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledMainContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const StyledInput = styled.input`
  display: none;
  position: absolute;
  margin-left: -9999;
`;

export const StyledLabel = styled.label<{
  editing: boolean;
}>`
  float: right;
  cursor: ${({ editing }) => (editing ? 'pointer' : 'default')};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  margin-right: 17px;
`;

export const StyledIconStarContainer = styled.i`
  font-style: normal;
  font-size: 20px;
`;
