import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { flexRender } from '@tanstack/react-table';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { StyledDraggableCell, StyledRow, StyledTd } from './Table.styled';
import { DraggableRowProps, TableHeaderAlignment } from './Table.types';

export const DraggableRow = ({
  row,
  onRowClick,
  size,
  allowSelection,
  dataTestId,
  elementRef,
  tableContext
}: DraggableRowProps) => {
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
          data-testid={`${dataTestId}-row-${row.id}`}
        >
          <StyledDraggableCell {...provided?.dragHandleProps}>
            <div>
              <Icon color={IconColor.Support60} name={IconName.Arrange} size={IconSize.Small} />
            </div>
          </StyledDraggableCell>
          {allowSelection && (
            <StyledTd data-testid={`${dataTestId}-cell-checkbox`}>
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
              key={cell.id}
            >
              {cell.column.columnDef.cell
                ? flexRender(cell.column.columnDef.cell, cell.getContext())
                : cell.renderValue()}
            </StyledTd>
          ))}
        </StyledRow>
      )}
    </Draggable>
  );
};
