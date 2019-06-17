# React

This folder contains my tests and experiments with react a frontend UI framework.

This README contains some notes on React.

# Project Setup

Most React projects would be setup in a similar fashion. I use VSCode on Linux for editing code and hence my setup would reflect the same.

## Creating React Project

Creating a new react project is an easy step using create-react-app:

```
$ npx create-react-app <project-name>
```

This creates a project setup with files in a new folder named after the `project-name`. Note that this setup uses yarn as the default package manager.

## Linting and Code Prettifier setup

### VSCode Specific

Install ESLint plugin for VSCode: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

### Project Specific

This must be run on a per project basis. Although you can install it globally as well.

```
yarn add eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D
```

Libraries installed in this command:

- eslint
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react

### Configuration files

#### .eslintrc

This file should be located at the root directory of your react project and is used as settings for eslint. These settings work well for me. Modify them as you please.

```json
{
  "extends": ["react-app"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "no-console": 0,
    "react/no-unused-state": 1
  }
}
```

#### VSCode / settings.json

These are the settings for VSCode. They can be edited by going to settings (`Ctrl +` `) then clicking the`{}` icon.

```json
{
  // ... Other Settings ...

  // ESLint
  // formatting using eslint
  // let editor format using prettier for all other files
  "editor.formatOnSave": true,
  // available through eslint plugin in vscode
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true
}
```

# Useful Libraries

## Axios

It is used for REST API Requests. It is based on ES6 promises.

### Install

```
$ yarn add axios
```

## React Router

It is used to route links through react. It is helpful in Single Page Applications (SPAs).

### Install

```
$ yarn add react-router-dom
```

## Node Sass

Adds support for sass file imports and auto-compiling.

## react-html5-camera-photo

https://www.npmjs.com/package/react-html5-camera-photo

# Other Useful Stuff

## Sample APIs

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Provides sample API and data

# Reference

<https://medium.com/appstud/setup-eslint-and-prettier-together-for-react-and-react-native-projects-in-visual-studio-code-78772d58358d>
