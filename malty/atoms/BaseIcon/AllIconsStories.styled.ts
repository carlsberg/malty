import styled from 'styled-components';

export const StyledIconList = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
`;

export const StyledIconWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #b0afaf80;
  border-radius: 4px;
  padding: 10px 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledSearch = styled.input`
  margin-bottom: 20px;
  font-size: 14px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 4px;
  min-width: 250px;
`;

export const StyledCopiedText = styled.span`
  color: #64646480;
`;

export const StyledName = styled.span`
  width: 100%;
  margin-top: 6px;
  color: #64646480;
  font-size: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
