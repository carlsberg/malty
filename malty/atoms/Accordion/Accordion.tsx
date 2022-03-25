import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { AccordionColor, AccordionItemProps, AccordionProps, AccordionSize } from '.';
import { ActiveEventKey } from './Accordion-context';
import {
  StyledAccordionBody,
  StyledAccordionHeader,
  StyledAccordionItem,
  StyledAccordionWrapper,
  StyledChevronDown
} from './Accordion.styled';

export const Accordion = ({
  children,
  size = AccordionSize.Medium,
  variant = AccordionColor.Transparent,
  dataQaId,
  defaultActiveKey,
  alwaysOpen
}: AccordionProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const [activeEventKey, setActiveEnventKey] = useState(defaultActiveKey);
  const handleAccordionItem = (itemKey: string) => {
    // console.log(itemKey);
    // setOpenAccordion(itemKey);
    if (activeEventKey === itemKey) {
      setActiveEnventKey(undefined);
    } else {
      setActiveEnventKey(itemKey);
    }
  };
  return (
    <TypographyProvider>
      <ActiveEventKey.Provider value={activeEventKey}>
        <StyledAccordionWrapper data-testid={`${dataQaId}-accordion-container`} variant={variant} theme={theme}>
          {children?.map((el, index) =>
            // eslint-disable-next-line react/no-array-index-key
            React.cloneElement(el, { key: `accordion-${index}`, size, onChange: handleAccordionItem })
          )}
        </StyledAccordionWrapper>
      </ActiveEventKey.Provider>
    </TypographyProvider>
  );
};

export const AccordionItem = ({
  children,
  title,
  size = AccordionSize.Medium,
  dataQaId,
  onChange = () => null,
  eventKey
}: AccordionItemProps) => {
  const activeEventKey = useContext(ActiveEventKey);
  const theme = useContext(ThemeContext) || defaultTheme;
  const [activeKey] = useState(eventKey);

  const [numSize, setNumSize] = useState(theme.sizes.l.value.replace('px', ''));
  const [numPadding, setNumPadding] = useState(theme.sizes['2xs'].value.replace('px', ''));
  const id = useMemo(() => uuid(), []);
  let openAccordion;
  if (activeEventKey === activeKey) {
    openAccordion = true;
  } else {
    openAccordion = false;
  }

  const handleOpenAccordion = () => {
    onChange(activeKey);
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
      <StyledAccordionItem
        className={openAccordion ? 'accordionItem active' : 'accordionItem'}
        data-testid={`${dataQaId}-item`}
        theme={theme}
      >
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
          className={openAccordion ? 'accordionBody show' : 'accordionBody'}
          open={openAccordion}
        >
          {children}
        </StyledAccordionBody>
      </StyledAccordionItem>
    </TypographyProvider>
  );
};
