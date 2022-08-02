# Malty Contribution

If you need help on how to run your local environment, please see the README.md at the root of this repository.

### Notes to keep in mind:

- **You don't have to clone this repo** in order to use Malty, and this Component Library.
- Development of components for this library **must be in close coordination with the Design System Team**, and should only happen after POs have aligned.
- This repository should be considered our file system, and the means by which we manage contributions and maintainance of components in [Carlsberg Group's Bit.dev Cloud](https://bit.dev/carlsberggroup).

## Contribution model

For more details on our Contribution model, please [see this](https://carlsberggbs.atlassian.net/l/c/yYD0ZEAd).

### Roles

#### Consumer

As a consumer we need your feedback. As an “outsider” you are the one we need to tell us what you are missing from Malty, and what you feel our priorities should be.

#### Contributor

As a contributor to Malty, you’re helping build Malty, adding features, components, and fixing bugs. It is crucial that we work in close collaboration, and help not only keep a very consistent and clean codebase, but also help inform and define what our ground rules should be.

#### Maintainer

Maintainers will provide a broader look at our mono-repo, and Component Library. They will also help us keep our codebase up to date, and make sure we are always on the cutting edge of the latest technologies, in the context of Malty.
The idea is for top contributing Principal, Lead or Senior FE Devs to become Maintainers.

#### Roles workflows

For more on these roles, and their workflow, please [see this](https://malty.carlsberggroup.com/5715d933c/v/0/p/61b924-development/b/791beb).

## Gitflow

In the context of our current Bit workflow, Git is our file system, and an integral part of our approval process. Committing code to the repo pushes the code to Bit, through GH Actions, and makes them available in our @carlsberggroup private registry. It also triggers a build and deploy for the MTA (Malty Test App). Therefore, when committing new code, or changes to existing components, these need to be committed to a new feature branch (please always follow the feature/\* branch naming convention), and approved, before changes can be merged into our main branch, and pushed to Bit and MTA.

### What is Trunk-based Development?

> Trunk-based development is a version control management practice where developers merge small, frequent updates to a core “trunk” or main branch. Since it streamlines merging and integration phases, it helps achieve CI/CD and increases software delivery and organizational performance.

Please read more about it [here](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development).

## Governance workflow

To read on this topic, please do so [here](https://malty.carlsberggroup.com/5715d933c/v/0/p/61b924-development/b/791beb).
