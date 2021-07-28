import { Icon, IconColors as Colors, IconSizesTypes as IconSizes } from '@carlsberggroup/malty.atoms.icon';
import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import {
  StyledCodeInput,
  StyledCodeInputContainer,
  StyledCodeInputWrapper,
  StyledError,
  StyledLabel
} from './CodeInput.styled';
import { CodeInputProps, Sizes, SizeTypes } from './CodeInput.types';

export const CodeInput = ({
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
}: CodeInputProps) => {
  const id = useMemo(() => uuid(), []);
  return (
    <StyledCodeInputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledCodeInputWrapper isIconLeft={isIconLeft}>
        <StyledCodeInput
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
      </StyledCodeInputWrapper>
      {error && <StyledError>{error}</StyledError>}
    </StyledCodeInputContainer>
  );
};
