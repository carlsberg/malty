import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { AccordionItemProps, AccordionSize } from '.';
import { StyledAccordionBody, StyledAccordionHeader, StyledAccordionItem, StyledChevronDown } from './Accordion.styled';

export const AccordionItem = ({ children, title, open, size = AccordionSize.Medium, dataQaId }: AccordionItemProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [openAccordion, setOpenAccordion] = useState(open);
  const [numSize, setNumSize] = useState(theme.sizes.l.value.replace('px', ''));
  const [numPadding, setNumPadding] = useState(theme.sizes['2xs'].value.replace('px', ''));
  const id = useMemo(() => uuid(), []);
  const handleOpenAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  useEffect(() => {
    switch (size) {
      case AccordionSize.Large: {
        setNumSize(theme.sizes['2xl'].value.replace('px', ''));
        setNumPadding(theme.sizes['2xs'].value.replace('px', ''));
        break;
      }
      case AccordionSize.XLarge: {
        setNumSize(theme.sizes['3xl'].value.replace('px', ''));
        setNumPadding(theme.sizes.s.value.replace('px', ''));
        break;
      }
      case AccordionSize.XXLarge: {
        setNumSize(theme.sizes['4xl'].value.replace('px', ''));
        setNumPadding(theme.sizes.s.value.replace('px', ''));
        break;
      }
      default: {
        setNumSize(theme.sizes.xl.value.replace('px', ''));
        setNumPadding(theme.sizes['2xs'].value.replace('px', ''));
        break;
      }
    }
  }, [size, theme]);

  return (
    <TypographyProvider>
      <StyledAccordionItem data-testid={`${dataQaId}-item`} theme={theme}>
        <StyledAccordionHeader
          aria-expanded={openAccordion}
          aria-controls={`accordion-item-"${id}`}
          theme={theme}
          paddingSize={parseInt(numPadding, 10)}
          size={parseInt(numSize, 10)}
          className="accordion-header"
          onClick={handleOpenAccordion}
        >
          <Text
            data-testid={`${dataQaId}-item-title`}
            color={TextColor.DigitalBlack}
            textStyle={
              size === AccordionSize.XLarge || size === AccordionSize.XXLarge
                ? TextStyle.MediumBold
                : TextStyle.MediumSmallBold
            }
          >
            {title}
          </Text>
          <StyledChevronDown
            data-testid={`${dataQaId}-item-icon`}
            open={openAccordion}
            theme={theme}
            color={IconColor.Primary}
            size={IconSize.Medium}
          />
        </StyledAccordionHeader>
        <StyledAccordionBody
          data-testid={`${dataQaId}-content-container`}
          id={`accordion-item-"${id}`}
          theme={theme}
          paddingSize={parseInt(numPadding, 10)}
          className="accordion-body"
          open={openAccordion}
        >
          {children}
        </StyledAccordionBody>
      </StyledAccordionItem>
    </TypographyProvider>
  );
};
