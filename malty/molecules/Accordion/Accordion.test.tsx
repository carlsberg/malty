import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Accordion, AccordionItem, AccordionSize } from '.';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('Accordion', () => {
  it('should render accordion items', () => {
    render(
      <Accordion size={AccordionSize.Medium}>
        <AccordionItem eventKey="1" title="Accordion title 1">
          <div>Accordion content 1</div>
        </AccordionItem>
        <AccordionItem eventKey="2" title="Accordion title 2">
          <div>Accordion content 2</div>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Accordion title 1')).toBeInTheDocument();
  });
  it('should open accordion on click', () => {
    render(
      <Accordion size={AccordionSize.Medium}>
        <AccordionItem eventKey="1" title="Accordion title 1">
          <div>Accordion content 1</div>
        </AccordionItem>
        <AccordionItem eventKey="2" title="Accordion title 2">
          <div>Accordion content 2</div>
        </AccordionItem>
      </Accordion>
    );
    const accordionItem = screen.getByText('Accordion title 1');

    fireEvent.click(accordionItem);

    const text = screen.queryByText('Accordion content 1');

    expect(text).toBeVisible();
  });

  it('should have the correct test id', () => {
    render(
      <Accordion size={AccordionSize.Medium} dataQaId="accordion">
        <AccordionItem eventKey="1" title="Accordion title 1">
          <div>Accordion content 1</div>
        </AccordionItem>
        <AccordionItem eventKey="2" title="Accordion title 2">
          <div>Accordion content 2</div>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByTestId('accordion-accordion-container')).toBeInTheDocument();
  });

  it('should have two accordion items opened at the same time', () => {
    render(
      <Accordion size={AccordionSize.Medium} dataQaId="accordion" alwaysOpen>
        <AccordionItem eventKey="1" title="Accordion title 1">
          <div>Accordion content 1</div>
        </AccordionItem>
        <AccordionItem eventKey="2" title="Accordion title 2">
          <div>Accordion content 2</div>
        </AccordionItem>
      </Accordion>
    );

    const accordionItem1 = screen.getByText('Accordion title 1');
    const accordionItem2 = screen.getByText('Accordion title 2');

    fireEvent.click(accordionItem1);
    fireEvent.click(accordionItem2);

    const text = screen.queryByText('Accordion content 1');

    expect(text).toBeVisible();
  });
});
