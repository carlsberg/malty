import React from 'react';
import { Source, DocsContext, Description } from '@storybook/addon-docs';

function capitalize(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, '').toUpperCase();
}

export const ImportPath = () => {
  const context = React.useContext(DocsContext);
  const importPath = context.parameters.importPath.toString();
  let dynamicImportObject = capitalize(
    importPath
      .match(/\.[0-9a-z]*[\-]*[0-9a-z]+$/gim)
      .toString()
      .replace('.', '')
  );
  const importObject = context.parameters.importObject || dynamicImportObject;
  const install = `yarn add '${importPath}'`;
  const path = `import { ${importObject} } from '${importPath}';`;

  return importObject && importPath ? (
    <>
      <Description>
        Make sure, prior to installing any Malty components, you have [Registered the
        Scope](https://carlsberg.invisionapp.com/dsm/carlsberg-digital/malty-design-system/nav/5fa7cb638c01200018358a40/folder/6149b25d01689575201f8885).
      </Description>
      <Description>
        To add this package to your project, install it with [Yarn](https://classic.yarnpkg.com/lang/en/docs/install),
        first:
      </Description>
      <Source language="bash" code={install} dark></Source>
      <Description>Once you have it installed, feel free to import it anywhere as follows:</Description>
      <Source language="ts" code={path} dark></Source>
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
