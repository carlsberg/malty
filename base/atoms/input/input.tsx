import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { Icon } from '../icon/icon';
import { ColorsTypes, SizesTypes as IconSizes } from '../icon/icon.types';
import { StyledError, StyledInput, StyledInputContainer, StyledInputWrapper, StyledLabel } from './input.styled';
import { InputProps, Sizes, SizeTypes } from './input.types';

export const Input = ({
  value,
  onValueChange,
  label,
  type,
  placeholder,
  error,
  icon,
  isIconLeft,
  isDisabled,
  size = SizeTypes.Medium
}: InputProps) => {
  const id = useMemo(() => uuid(), []);
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInputWrapper isIconLeft={isIconLeft}>
        <StyledInput
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          size={Sizes[size]}
          hasIcon={!!icon}
          isIconLeft={isIconLeft}
          onChange={(e) => onValueChange((e.target as HTMLInputElement).value)}
          type={type}
        />
        {icon && <Icon name={icon} color={ColorsTypes.Primary} size={IconSizes.Medium} />}
      </StyledInputWrapper>
      {error && <StyledError>{error}</StyledError>}
    </StyledInputContainer>
  );
};
