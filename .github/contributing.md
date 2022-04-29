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

As a contributor to Malty, you’re helping build Malty, adding features or components. It is crucial that we work in close collaboration, and help not only keep a very consistent and clean codebase, but also help inform and define what our ground rules should be.

#### Maintainer

Maintainers will provide a broader look at our mono-repo, and Component Library. They will also help us keep our codebase up to date, and to make sure we are always on the cutting edge of the latest technologies, in the context of Malty.
The idea is for top contributing Principal, Lead or Senior FE Devs to become Maintainers.

#### Roles workflows

For more on these roles, and their workflow, please [see this](https://carlsberggbs.atlassian.net/l/c/1jF2kGaT).

## Gitflow

At the core of our contribution model is Gitflow. We use Gitflow to manage our contributions, and maintain our codebase. I will not get into details of Gitflow, as I will assume all to be familiar with it, but I will outline the general flow of the process. You can read all about Gitflow, [here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

### What is Gitflow?

> Giflow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by Vincent Driessen at nvie. Compared to trunk-based development, Giflow has numerous, longer-lived branches and larger commits. Under this model, developers create a feature branch and delay merging it to the main trunk branch until the feature is complete. These long-lived feature branches require more collaboration to merge and have a higher risk of deviating from the trunk branch. They can also introduce conflicting updates.

### Develop and main branches

> Instead of a single `main` branch, this workflow uses two branches to record the history of the project. The `main` branch stores the official release history, and the `develop` branch serves as an integration branch for features. It's also convenient to tag all commits in the `main` branch with a version number.

### Feature branches

> Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, instead of branching off of `main`, `feature` branches use `develop` as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with `main`.

### Hotfix branches

> Maintenance or `“hotfix”` branches are used to quickly patch production releases. `Hotfix` branches are a lot like `release` branches and `feature` branches except they're based on main instead of `develop`. This is the only branch that should fork directly off of `main`. As soon as the fix is complete, it should be merged into both `main` and `develop`, and `main` should be tagged with an updated version number.

### Release branches

We don't expect to use realease branches, as there is no publishing or releasing of our code. Again, packaging and distribution is handled by [Bit.dev](https://bit.dev/carlsberggroup), and official Malty releases will be marked by a release of a [DSM version](https://malty.carlsberggroup.com/5715d933c/p/65f283-release-notes).

For more details on Gitflow, please [read here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

## Governance workflow

To read on this topic, please do so [here](https://carlsberggbs.atlassian.net/l/c/nUhLC8NP).
