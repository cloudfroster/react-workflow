## React-workflow

> React-workflow is an opinionated
> boilerplate for web development built on top of Facebook's
> [React](https://facebook.github.io/react/) library,
> [Node.js](https://nodejs.org/) / [Express](http://expressjs.com/) server
> and [redux](https://github.com/rackt/redux) architecture. Containing
> modern web development tools such as [Webpack](http://webpack.github.io/),
> [Babel](http://babeljs.io/) and [BrowserSync](http://www.browsersync.io/).
> [gh-pages](https://github.com/tschaub/gh-pages) to deploy site to git branch.
> Helping you to stay productive following the best practices. A solid starting
> point for both professionals and newcomers to the industry.
> not a isomorphic application.

### Directory Layout

```
.
├── /node_modules/              # 3rd-party libraries and utilities
├── /build/                     # build files
├── /client/                    # The source code of the application for client
├── /server/                    # The source code of express server
├── /tasks/                     # Build automation scripts and utilities
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /webpack.config.js      # Webpack configuration for application bundles
│   ├── /server.js              # Launches the Node.js/Express web server
│   └── /deploy.js              # bundle and deploy build files to git branch
│   └── /publish.js             # deploy build files to git branch
│   └── /browserSync.js         # browserSync tools and webpack middleware
│   └── /start.js               # Launches the development web server with "live reload"
│── package.json                # The list of 3rd party libraries and utilities
└── processes.json              # production settings for PM2
```

### Getting Started

Just clone the repo and run :
```shell
$ npm install
...
$ npm start
```

### other commder

```shell
$ npm run deploy  (deploy your site to your git `production` branch)
```

### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
  * [Flow - A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/)
  * [ES6 Features](https://github.com/lukehoban/es6features#readme)

### Support

  * Email:844033231@qq.com

### License

Copyright © 2014-2015 marchen. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/chen844033231/react-workflow/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.
