# Stopover

Personal project aiming to build Electron.js & React.js application which will display realtime stop and routing data of [HSL](https://www.hsl.fi/en "Helsingin seudun liikenne - Helsinki Region Transport") by using the public API provided by the [Digitransit](https://digitransit.fi/en/).

## Stack

React, Electron, React Router, Apollo GraphQL client

## Status

![Page version](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/RedFoxFinn/stopover/dev/package.json&query=version&color=61bd51&label=version)

## Scripts

script | functionality
-------|--------------
`react-start` | starts development version of the react application
`react-build` | builds production version of the react application
`react-test` | starts testing tools for the development version of the react application
`lint` | runs eslint for the project with option `--fix`
`cm` | runs `git-cz` to create commit
`electron-build` | runs `electron-builder` to create production build of the electron application
`versioning` | runs `standard-version` to complete version update
`release` | runs set of commands to commit, update versioning, create production builds of react application and electron application
`build` | runs commands to create production builds of react and electron applications
`start` | runs special command using `concurrently` to start react & electron application