# TSdx-Driven, Lerna/Yarn-Managed Monorepo Template

Code-sharing is tough. In part, because [modularity](https://en.wikipedia.org/wiki/Modularity) is key. And modularity is very difficult. And exceedingly tedious. Writing and maintaining reusable code requires a lot of [undifferentiated heavy lifting](https://www.fugue.co/blog/2017-08-30-fugue-reduces-undifferentiated-heavy-lifting.html).

Here we seek to remedy the latter.

[`tsdx`](https://github.com/palmerhq/tsdx) takes the sting out of setting up new `TypeScript` packages. `yarn workspaces` takes the sting out of managing intra-package dependencies. [`lerna`](https://github.com/lerna/lerna) takes the sting out of managing projects with multiple packages. Together, they are [captain planet](https://en.wikipedia.org/wiki/Captain_Planet_and_the_Planeteers).

This repository/template is very much still a work in progress--but, hopefully, it should give you a solid head start.

## How to Use?

Click the [`use this template`](https://help.github.com/en/articles/creating-a-repository-from-a-template) button. You'll get a brand-spankin-new copy with the same directory structure and files--but no git history. Then, you go to to town.

Coming soon...

## Current Devious Behavior

We have altered the `tsdx` default configuration to use `rollup-pluing-ts` in lieu of `rollup-plugin-typescript2` do to an issue related to the way the latter caches build files. See https://github.com/palmerhq/tsdx/issues/200.
