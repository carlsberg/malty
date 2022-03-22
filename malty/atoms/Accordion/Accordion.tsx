import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { AccordionColor, AccordionItemProps2, AccordionProps, AccordionSize } from '.';
import { StyledAccordionWrapper } from './Accordion.styled';

export const Accordion = ({
  children,
  size = AccordionSize.Medium,
  variant = AccordionColor.Transparent
}: AccordionProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <TypographyProvider>
      <StyledAccordionWrapper variant={variant} theme={theme}>
        {children?.map((el, index) =>
          // eslint-disable-next-line react/no-array-index-key
          React.cloneElement(el as React.ReactElement<AccordionItemProps2>, { key: `accordion-${index}`, size })
        )}
        {/* {children} */}
      </StyledAccordionWrapper>
    </TypographyProvider>
  );
};
