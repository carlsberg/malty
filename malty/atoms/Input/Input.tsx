import { Icon, IconColors as Colors, IconSizesTypes as IconSizes } from '@carlsberggroup/malty.atoms.icon';
import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { StyledError, StyledInput, StyledInputContainer, StyledInputWrapper, StyledLabel } from './Input.styled';
import { InputProps, Sizes, SizeTypes } from './Input.types';

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
        {icon && <Icon name={icon} color={Colors.Primary} size={IconSizes.Medium} />}
      </StyledInputWrapper>
      {error && <StyledError>{error}</StyledError>}
    </StyledInputContainer>
  );
};
