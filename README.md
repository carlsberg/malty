# Malty Component Library

Malty is a Design System, and the code contained in this repository is its Component Library.

### Notes to keep in mind:
- **You don't have to clone this repo** in order to use Malty, and this Component Library.
- Development of components for this library **must be in close coordination with the Design System Team**, and should only happen after POs have aligned.
- This repository should be considered a backup mechanism for our [Carlsberg Group's Bit.dev Cloud](https://bit.dev/carlsberggroup) library, not its primary library management system.

## Installation

Use [Bit](https://pip.pypa.io/en/stable/) to install all dependencies, and compile all components locally, and run your local Dev server.

Start installing all necessary dependencies:

```bash
bit install
```

Then compile all components locally, for local development:
```bash
bit compile
```

You can then start your local Dev server:
```bash
bit start
```

## Usage
> asda
```typescript
import React from 'react';
import { Component, ComponentProps } from '@carlsberggroup/malty.atoms.component';

export const Component = ({
  children
}: ComponentProps) => {

  const renderComponent = () => (
    <Component>
      childen
    </Component>
  )
};
```

## Governance and contribution

To read on this topic, please do so [here](https://carlsberg.invisionapp.com/dsm/carlsberg-digital/malty-design-system/nav/5fa7cb638c01200018358a40/folder/605dbbd9bc924df105728340).
