import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { AccordionColor, AccordionProps, AccordionSize } from '.';
import { StyledAccordionWrapper } from './Accordion.styled';

export const Accordion = ({
  children,
  size = AccordionSize.Medium,
  variant = AccordionColor.Transparent,
  dataQaId
}: AccordionProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);

  return (
    <TypographyProvider>
      <StyledAccordionWrapper data-testid={`${dataQaId}-accordion-container`} variant={variant} theme={theme}>
        {children?.map((el) => React.cloneElement(el, { key: `accordion-${id}`, size }))}
        {/* {children} */}
      </StyledAccordionWrapper>
    </TypographyProvider>
  );
};
