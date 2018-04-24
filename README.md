
# Visual Proofs

Visual explanations for proofs

## Build Tools

- Language - ES6+<br>
- Styling - [Sass](http://sass-lang.com/)<br>
- Task Runner - [Gulp](http://gulpjs.com/)<br>
- Bundling - [Browserify](http://browserify.org/)<br>
- Testing - [Jest](https://facebook.github.io/jest/)<br>

## Style Guide

[Standard](https://standardjs.com/)

## Available Scripts

### `npm run watch`

Generates static files in the `public` folder.
Serves the files at http://localhost:8080.

The page will reload if you make edits.
Compile errors will show in the console.

### `npm run build`

Generates static files in the `public` folder.

### `npm test`

Starts Jest in interactive mode.

## Folder Structure

```bash
├─ gulp_tasks/           # Gulp tasks
├─ public/               # Distribution bundle
├─ src/                  # Main source folder
│  ├─ js/                # JavaScript folder
│  │  └─ main.js         # JavaScript entry point
│  ├─ main.scss          # Sass styles
│  └─ index.html         # HTML entry point
├─ test/                 # Test folder
│  └─ js/                # JavaScript test folder
│     └─ file.test.js    # JavaScript test files
├─ gulpfile.js           # Gulp entry point
├─ LICENSE
├─ README.md
└─...                    # Configuration files
```

## Useful References

- Support es6 modules and bundles:
[link](https://web.archive.org/web/20180423230214/https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/)
- Gulp recipes:
[link](https://github.com/gulpjs/gulp/tree/master/docs/recipes)
  - split-tasks-across-multiple-files.md
  - browserify-transforms.md.
- Help Gulp handle errors:
  - Swallow Browserify errors:
  [link](https://gist.github.com/shovon/c876f9760c6bc74c96b4)
  - Gulp Plumber:
  [link](https://scotch.io/tutorials/prevent-errors-from-crashing-gulp-watch)
- Jest documentation:
[link](https://facebook.github.io/jest/docs/en/getting-started.html)

## License

© 2018 Jarett Lee All Rights Reserved
