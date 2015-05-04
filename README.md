# Build a Website with Express.js + Bluemix

## Set up your Mac

- Install Homebrew 
  - http://brew.sh/
- Install Node.js and NPM with Homebrew
  - http://blog.teamtreehouse.com/install-node-js-npm-mac
  - `brew install node`

## Set up your project file structure

- Create a folder for your website 
- Create a `public` 
- folder `CSS` subfolder.

## First HTML page

- Create index.html
- Link to CSS file

## Multiple HTML pages

- Create about.html
- Link to CSS file 
- index: <a href="/about.html">About</a>
- about: <a href="/index.html">Home</a>

## Express.js yo self 

- package.json
- express.js
  - node_modules
- nodemon
- writing npm scripts
- app.js

### app.js

- Require `node_modules`
- Serve static assets
- Router
- Webserver (Host, Port, listening)

### Refactor HTML page links
- index: <a href="/about">About</a>
- about: <a href="/">Home</a>

## Deploy to Bluemix

### Install cf-cli with homebrew

- https://github.com/cloudfoundry/cli/blob/master/README.md
- `brew tap pivotal/tap`
- `brew install cloudfoundry-cli` 

### Manifest File

- Create a manifest.yml file
- http://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html
- `cf api https://api.ng.bluemix.net`
- `cf login`
- Create .cfignore file (for node_modules)
- `cf push`
- wait
