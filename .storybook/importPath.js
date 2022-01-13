import React, { useState, useLayoutEffect } from 'react';
import { Source, DocsContext, Description } from '@storybook/addon-docs';

export const ImportPath = () => {
  const context = React.useContext(DocsContext);
  const [story] = useState(context.getStoryContext(context.storyById(context.id)));
  const [params] = useState(story.parameters);
  const [path, setPath] = useState(params.importPath.toString());
  const [object, setObject] = useState(params.importObject.replace(/\s+/g, ''));
  const [installStr, setInstallStr] = useState(`yarn add '${path}'`);
  const [pathStr, setPathStr] = useState(`import { ${object} } from '${path}';`);

  useLayoutEffect(() => {
    setPath(params.importPath.toString());
    setObject(params.importObject.replace(/\s+/g, ''));
  }, [params.importPath, params.importObject]);

  useLayoutEffect(() => {
    setInstallStr(`yarn add '${path}'`);
    setPathStr(`import { ${object} } from '${path}';`);
  }, [path, object]);

  return installStr && pathStr ? (
    <>
      <Description>
        Make sure, prior to installing any Malty components, you have [Registered the
        Scope](https://carlsberg.invisionapp.com/dsm/carlsberg-digital/malty-design-system/nav/5fa7cb638c01200018358a40/folder/6149b25d01689575201f8885).
      </Description>
      <Description>
        To add this package to your project, install it with [Yarn](https://classic.yarnpkg.com/lang/en/docs/install),
        first:
      </Description>
      <Source language="bash" code={installStr} dark></Source>
      <Description>Once you have it installed, feel free to import it anywhere as follows:</Description>
      <Source language="ts" code={pathStr} dark></Source>
      <Description>
        After having successfully installed and imported the component into your project, feel free to use it as shown
        below:
      </Description>
    </>
  ) : (
    <></>
  );
};

export default ImportPath;
