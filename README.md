# Malty Component Library

Malty is a Design System, and the code contained in this repository is its Component Library.

### Notes to keep in mind:

- **You don't have to clone this repo** in order to use Malty, and this Component Library.
- Development of components for this library **must be in close coordination with Malty's Maintainers**, and should only happen after previous coordination in [Malty's GitHub Discussions](https://github.com/CarlsbergGBS/cx-component-library/discussions) or an [issue](https://github.com/CarlsbergGBS/cx-component-library/issues) has been created and approved to move forward.
- This repository should be considered our file system, and the means by which we manage contributions and maintainance of components in [Malty Carlsberg Group's](https://malty.carlsberggroup.com/).

<!-- GETTING STARTED -->

## Getting Started
This project uses Lerna to manage the monorepo packages and GitHub Packages to publish each component. 

### Install

Clone the repo

```sh
git clone https://github.com/CarlsbergGBS/cx-component-library
```

Install packages

```sh
yarn install
```

Build packages

```sh
yarn build
```

### Run storybook local env.

To start your local dev. server:

```bash
yarn start
```

To build Storybook static files:

```bash
yarn build-storybook
```

### Testing

To run tests on your local code:

```bash
yarn test
```

Alternatively you can add the `--watch` flag for continued refresh and testing, as well as the `-u` flag to update your snapshots, when relevant and needed.

## Usage

```typescript
import React from 'react';
import { Component, ComponentProps } from '@carlsberggbs/malty.atoms.component';

export const component = ({ children }: ComponentProps) => {
  const renderComponent = () => <Component>{childen}</Component>;
};
```
