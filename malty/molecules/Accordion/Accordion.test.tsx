import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    expect(screen.getByText('Accordion title 2')).toBeInTheDocument();
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

    userEvent.click(accordionItem1);
    userEvent.click(accordionItem2);

    const text1 = screen.queryByText('Accordion content 1');
    const text2 = screen.queryByText('Accordion content 2');

    expect(text1).toBeVisible();
    expect(text2).toBeVisible();
  });

  it('should open item content and close the rest when click', () => {
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

    const accordionItem1 = screen.getByText('Accordion title 1');
    const accordionItem2 = screen.getByText('Accordion title 2');

    const text1 = screen.queryByText('Accordion content 1');
    const text2 = screen.queryByText('Accordion content 2');

    expect(text1).not.toBeVisible();
    expect(text2).not.toBeVisible();

    userEvent.click(accordionItem1);

    expect(text1).toBeVisible();
    expect(text2).not.toBeVisible();

    userEvent.click(accordionItem2);

    expect(text1).not.toBeVisible();
    expect(text2).toBeVisible();
  });

  it('should have the item open according to the defaultActivekey', () => {
    render(
      <Accordion size={AccordionSize.Medium} dataQaId="accordion" defaultActiveKey="1">
        <AccordionItem eventKey="1" title="Accordion title 1">
          <div>Accordion content 1</div>
        </AccordionItem>
        <AccordionItem eventKey="2" title="Accordion title 2">
          <div>Accordion content 2</div>
        </AccordionItem>
      </Accordion>
    );

    const text1 = screen.queryByText('Accordion content 1');
    const text2 = screen.queryByText('Accordion content 2');

    expect(text1).toBeVisible();
    expect(text2).not.toBeVisible();
  });
});
