# ex.rsvim

<a href="https://www.npmjs.com/package/ex.rsvim"><img alt="npmjs" src="https://img.shields.io/npm/v/ex.rsvim" /></a>
<a href="https://github.com/rsvim-dev/ex.rsvim/actions/workflows/ci.yml"><img alt="ci.yml" src="https://img.shields.io/github/actions/workflow/status/rsvim-dev/ex.rsvim/ci.yml?branch=main&label=ci" /></a>

## About

Implements [Vim](https://www.vim.org/)'s builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) for Rsvim, provide a compatible user experience in command-line.

## Installation

First go to Rsvim config home directory:

```bash
cd $XDG_CONFIG_HOME/rsvim
# or
cd $HOME/.rsvim
```

Then install with either `git` or `npm`:

> Plugin version is compatible with the Rsvim version, e.g. `ex.rsvim 0.1` for `Rsvim 0.1`.

### git

```bash
# tag
git clone --branch=v0.2.1 https://github.com/rsvim/ex.rsvim

# develop
git clone --branch=main https://github.com/rsvim/ex.rsvim
```

### npm

```bash
# specific version
npm install ex.rsvim@0.2.1

# latest version
npm install ex.rsvim
```

## Setup

Setup in your config entry script:

```javascript
import ex from "ex.rsvim";
ex.setup();
```

The `setup` function accepts an optional object, by default is:

```typescript
const DefaultSetupOptions: SetupOptions = {
  force: true,
};
```

You can pass your custom options when setup:

```javascript
import ex from "ex.rsvim";
ex.setup({
  // Your configurations here...
});
```

## Command Index

There are a lot of ex commands, which cannot be done all at once. This section trace the status of each command with below symbols:

- ✅ Almost compatible
- 🔰 Basically usable
- 🚧 Working in Progress
- 🔴 Missing

| Status | Command     | Alias | Description                       | Since Version |
| ------ | ----------- | ----- | --------------------------------- | ------------- |
| 🔰     | `quit`      | `q`   | Quit editor                       | v0.1          |
| 🔰     | `write`     | `w`   | Save current buffer to filesystem | v0.1          |
| 🔰     | `writeQuit` | `wq`  | Save current buffer and quit      | v0.2          |

## Contribution

Contributions are always welcomed :)

### Development Environment

Please setup the development environment with:

1. Install [mise](https://github.com/jdx/mise).
2. Run `mise i` to install python, node and other npm cli tools.
3. Run `npm i` to install dependencies.

Here are some useful commands:

- `npm run prettier`: Format source code.
- `npm run tsc`: Compile typescript to javascript and `.d.ts` declarations.
- `npm version major|minor|patch --no-git-tag-version`: Bump version (without creating a git tag).

The project structure is:

```
|-lib    // Compiled javascript files
|-src    // Typescript source files
|-types  // Typescript type declarations
```

Please **DO NOT** manually edit files under `lib` and `types`.

## Supporting the Project

If you like RSVIM, please consider sponsoring it. Your support encourages contributors and maintainers of this project, and other fees or efforts spent on it.

- [GitHub Sponsor](https://github.com/sponsors/rsvim)
- [Open Collective](https://opencollective.com/rsvim)

## License

Licensed under "Vim License".
