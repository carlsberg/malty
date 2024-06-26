import { Text, TextColor, TextStyle } from '@carlsberggbs/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { AccordionColor, AccordionItemProps, AccordionProps, AccordionSize } from '.';
import { ContextAccordion } from './Accordion.context';
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
  defaultActiveKey = [],
  alwaysOpen = false,
  ...props
}: AccordionProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [activeEventKey, setActiveEnventKey] = useState([...defaultActiveKey]);
  const providerValue = useMemo(
    () => ({
      activeEventKey,
      alwaysOpen
    }),
    [activeEventKey, alwaysOpen]
  );

  const handleAccordionItem = (itemKey: string) => {
    if (alwaysOpen) {
      if (activeEventKey?.includes(itemKey)) {
        // if alwaysOpen & accordionItem is open => remove accordionItem key from activeEventKey state
        const index = activeEventKey.indexOf(itemKey);
        const auxActiveEventKey = JSON.parse(JSON.stringify(activeEventKey));
        auxActiveEventKey.splice(index, 1);
        handleUpdate(auxActiveEventKey);
      } else {
        // adds accordionItem key to activeEventKey state
        handleUpdate([...activeEventKey, itemKey]);
      }
    } else if (activeEventKey?.includes(itemKey)) {
      // if !alwaysOpen & accordionItem is open removes key (close)
      handleUpdate([]);
    } else {
      // adds accordionItem key to activeEventKey state
      handleUpdate([itemKey]);
    }
  };

  const handleUpdate = (newState: string[]) => {
    setActiveEnventKey(newState);
  };

  return (
    <ContextAccordion.Provider value={providerValue}>
      <StyledAccordionWrapper
        data-testid={`${dataQaId}-accordion-container`}
        variant={variant}
        theme={theme}
        {...props}
      >
        {children?.map((el, index) =>
          // eslint-disable-next-line react/no-array-index-key
          React.cloneElement(el, { key: `accordion-${index}`, size, onChange: handleAccordionItem })
        )}
      </StyledAccordionWrapper>
    </ContextAccordion.Provider>
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
  const { activeEventKey } = useContext(ContextAccordion);
  const theme = useContext(ThemeContext) || defaultTheme;
  const [openAccordion, setOpenAccordion] = useState(activeEventKey?.includes(eventKey));

  const [numSize, setNumSize] = useState(theme.sizes.l.value);
  const [numPadding, setNumPadding] = useState(theme.sizes['2xs'].value);
  const id = useMemo(() => uuid(), []);

  useEffect(() => {
    if (activeEventKey?.includes(eventKey)) {
      setOpenAccordion(true);
    } else {
      setOpenAccordion(false);
    }
  }, [activeEventKey, eventKey]);

  const handleOpenAccordion = () => {
    onChange(eventKey);
  };

  useEffect(() => {
    switch (size) {
      case AccordionSize.Large: {
        setNumSize(theme.sizes['2xl'].value);
        setNumPadding(theme.sizes['2xs'].value);
        break;
      }
      case AccordionSize.XLarge: {
        setNumSize(theme.sizes['3xl'].value);
        setNumPadding(theme.sizes.s.value);
        break;
      }
      case AccordionSize.XXLarge: {
        setNumSize(theme.sizes['4xl'].value);
        setNumPadding(theme.sizes.s.value);
        break;
      }
      default: {
        setNumSize(theme.sizes.xl.value);
        setNumPadding(theme.sizes['2xs'].value);
        break;
      }
    }
  }, [size, theme]);

  return (
    <StyledAccordionItem
      className={openAccordion ? 'accordionItem active' : 'accordionItem'}
      data-testid={`${dataQaId}-item`}
      theme={theme}
    >
      <StyledAccordionHeader
        aria-expanded={openAccordion}
        aria-controls={`accordion-item-"${id}`}
        theme={theme}
        paddingSize={numPadding}
        size={numSize}
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
        <StyledChevronDown data-testid={`${dataQaId}-item-icon`} open={openAccordion} theme={theme} />
      </StyledAccordionHeader>
      <StyledAccordionBody
        data-testid={`${dataQaId}-content-container`}
        id={`accordion-item-"${id}`}
        theme={theme}
        paddingSize={numPadding}
        className={openAccordion ? 'accordionBody show' : 'accordionBody'}
        open={openAccordion}
      >
        {children}
      </StyledAccordionBody>
    </StyledAccordionItem>
  );
};
