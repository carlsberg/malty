import React from 'react';
import { AccordionContext } from './Accordion.types';

const defaultAccordionContext: AccordionContext = {
  activeEventKey: [],
  alwaysOpen: false
};

const Context = React.createContext<AccordionContext>(defaultAccordionContext);

export { Context };
