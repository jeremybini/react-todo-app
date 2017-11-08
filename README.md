# React: To Do List

## Introduction
This repository demonstrates a simple to do list built using React and FluxThis.
The tooling around the application is quite robust. It uses `webpack` to bundle
application code, JSX syntax and SCSS styles. Babel compiles ES2015 code into
ES5 and it also compiles JSX back into `React.createElement` calls. Assets are
served by `webpack-dev-server`.

## Installation and Usage
The entire project can be built via NPM scripts. Simply install the dependencies
then start the server and visit http://localhost:4321 to view:

    npm install && npm start

To see a full list of available NPM scripts, use the following command:

    npm run

## Class 1 - Packages and Tooling

### What are we building?
A todo app! More specifically, a todo app built using React, Fluxthis ImmutableJS, and [webpack](https://webpack.js.org/configuration/) to bundle all of our files together.

### Project setup
To have a nice developer experience while building this project, there's some setup that needs to happen first. Primarily, we want to be able to build this project using the most up to date JS syntax and technologies, but still have it be runnable in the browser. Specifically of note are the following:
* __Modularity__: we want to be able to import/export modules on an as-needed basis
* __Dependencies__: we don't want manually manage our module dependencies or have to explicitly add them to our html (this includes all assets - js, css, images)
* __Live Reloading__: we want webpack to handle bundling and serving our files as they change
* __JSX__: one of the great parts of developing react apps is JSX - an XML-like syntax for building out our UI. We want to be able to write jsx, and have it be compiled down to vanilla JS. [Babel](http://babeljs.io/repl/) is particulary useful for this
* __Debugging__: we want to easily track down errors when they occur

## Class 2 - React.JS

### What is React?
React is a view-layer/UI library developed by Facebook. It helps solve a lot of the challenges of developing UI's at scale.

### Why React?
* Declarative
* Component-based
* Cross-platform capabilites
* Removes the complexity of 2-way data binding
* [Virtual DOM](https://calendar.perfplanet.com/2013/diff/): The DOM is slow; React's virtual DOM is fast
* Efficient Diffing Algorithm

### How to React?
* [Elements](https://reactjs.org/docs/rendering-elements.html) - These are the building blocks of a React app
* [JSX](https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects) - We use JSX to create React elements. These elements represent our virtual DOM
* [Components](https://reactjs.org/docs/components-and-props.html) - Independent, reusable pieces of UI. Allow us to isolate functionality. Rendering a component generates a React element.
* [Props](https://reactjs.org/docs/components-and-props.html#rendering-a-component) - Props allow us to pass information to our components
* [State](https://reactjs.org/docs/state-and-lifecycle.html) - React elements can maintain their own internal state. Updating state through `this.setState` calls triggers a rerender.
