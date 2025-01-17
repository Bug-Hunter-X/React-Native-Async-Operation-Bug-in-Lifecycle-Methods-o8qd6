# React Native Asynchronous Operation Bug

This repository demonstrates a common bug in React Native applications involving asynchronous operations within component lifecycle methods.  The bug occurs when a network request or other asynchronous task is initiated, and the component unmounts before the request completes. This leads to errors because the application tries to update state or access a component that no longer exists.

The `Bug.js` file showcases the buggy code, while `BugSolution.js` presents a corrected version that prevents these issues.

## How to reproduce the bug
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the application.
4. Quickly navigate away from the screen; you may see a console error, indicating the error. 

## How to fix the bug
The solution involves using a cleanup function and React's effect hook to cancel asynchronous operations when the component unmounts.  The solution is detailed in the `BugSolution.js` file.