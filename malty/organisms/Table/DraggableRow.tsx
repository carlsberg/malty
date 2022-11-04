/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ReactNode, useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ThemeContext } from 'styled-components';
import { StyledDraggableCell, StyledRow, StyledTd } from './Table.styled';
import { DraggableRowProps } from './Table.types';

export const DraggableRow = ({ row, index, onRowClick, size, allowSelection, dataTestId }: DraggableRowProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  return (
    <Draggable key={row.id} draggableId={row.id} index={index}>
      {(provided) => (
        <StyledRow
          {...provided.draggableProps}
          ref={provided.innerRef}
          key={row.id}
          onClick={onRowClick}
          isClickable={!!onRowClick}
          size={size}
        >
          <StyledDraggableCell {...provided?.dragHandleProps}>
            <div>
              <Icon color={IconColor.Support60} name={IconName.Arrange} size={IconSize.Small} />
            </div>
          </StyledDraggableCell>
          {allowSelection && (
            <StyledTd data-testid={`${dataTestId}-cell-checkbox`} theme={theme}>
              <Checkbox onValueChange={row.getToggleSelectedHandler()} checked={row.getIsSelected()} />
            </StyledTd>
          )}
          {row.getVisibleCells().map((cell) => (
            <StyledTd data-testid={`${dataTestId}-cell-${cell.id}`} theme={theme} key={cell.id}>
              {cell.renderValue() as ReactNode}
            </StyledTd>
          ))}
        </StyledRow>
      )}
    </Draggable>
  );
};
