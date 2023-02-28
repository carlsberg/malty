import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ReactNode, useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ThemeContext } from 'styled-components';
import { StyledDraggableCell, StyledRow, StyledTd } from './Table.styled';
import { DraggableRowProps, TableHeaderAlignment } from './Table.types';

export function DraggableRow({
  row,
  onRowClick,
  size,
  allowSelection,
  dataTestId,
  elementRef,
  tableContext
}: DraggableRowProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <Draggable key={row.id} draggableId={row.id} index={row.index}>
      {(provided) => (
        <StyledRow
          {...provided.draggableProps}
          ref={provided.innerRef}
          key={row.id}
          onClick={onRowClick}
          isClickable={!!onRowClick}
          size={size}
          theme={theme}
        >
          <StyledDraggableCell {...provided?.dragHandleProps} theme={theme}>
            <div>
              <Icon color={IconColor.Support60} name={IconName.Arrange} size={IconSize.Small} />
            </div>
          </StyledDraggableCell>
          {allowSelection && (
            <StyledTd data-testid={`${dataTestId}-cell-checkbox`} theme={theme}>
              <Checkbox onValueChange={row.getToggleSelectedHandler()} checked={row.getIsSelected()} />
            </StyledTd>
          )}
          {row.getVisibleCells().map((cell, cellIndex) => (
            <StyledTd
              alignPosition={
                tableContext?.getAllColumns()?.find((col) => col.columnDef.id === cell.column.id)?.columnDef?.meta as
                  | TableHeaderAlignment
                  | undefined
              }
              width={elementRef?.current[cellIndex]?.offsetWidth}
              data-testid={`${dataTestId}-cell-${cell.id}`}
              theme={theme}
              key={cell.id}
            >
              {cell.renderValue() as ReactNode}
            </StyledTd>
          ))}
        </StyledRow>
      )}
    </Draggable>
  );
}
