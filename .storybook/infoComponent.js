import { Canvas, Description, DocsContext } from '@storybook/addon-docs';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled(Canvas)`
  background-color: #ffe1e1;
  padding: 0;
  p.sbdocs.sbdocs-p {
    margin: 0px !important;
  }
`;

export const InfoComponent = () => {
  const context = useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const [params] = useState(story.parameters);
  const [info, setInfo] = useState(params.info ? params.info : false);
  console.log(params.info);
  useEffect(() => {
    setTimeout(function () {
      setInfo(params.info ? params.info : false);
    }, 10);
  }, [context]);

  return info ? (
    <>
      <StyledCanvas>
        <Description>{info}</Description>
      </StyledCanvas>
    </>
  ) : (
    <></>
  );
};

export default InfoComponent;
