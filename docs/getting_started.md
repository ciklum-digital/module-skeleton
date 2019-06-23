# Getting started


module-skeleton is a easiest way to start your single/multi package module. Fully integrated flow with lerna, travis, conventional-commit etc. 

Check out [github pages]() for documentation and details.

## Overview

[there the place for OVERVIEW dateils..]

[please fill it for your module]

## Usage

- As a first step clone this repo:
```bash
git clone https://github.com/ciklum-digital/module-skeleton.git
``` 
- As a second step change configuration for next tools:

```json
/* package.json */
{
  "name": "module-skeleton",
  "version": "0.1.0",      
  "description": "Module skeleton | Start your module here",
  ..
  "repository": {
    "type": "git",
    "url": "https://github.com/ciklum-digital/module-skeleton.git"
  },
  "author": "Ciklum Digital / JS Team",
  ..
}
```  
    
```json
/* lerna.json */
{ 
  ..
  "changelog": {
    "repo": "ciklum-digital/module-skeleton",
    ..
    }
  }
  ..
}
```

```html
<!-- docs/index.html -->

<head>
  <title>Module skeleton | Start your module here</title>
  <link rel="shortcut icon" type="image/png" href="assets/images/favicon.png"> 
  ..
  <meta name="description" content="Easy start with new module | Rich module set up configuration | Best practices support">
  <meta name="keywords" content="module, skeleton, module-skeleton, github, travis, lerna, semantic-release">
  ..
  <meta name="og:url" content="https://github.com/ciklum-digital/module-skeleton/">
  ..
  <meta name="og:title" content="Module skeleton | Start your module here">
  <meta name="og:description" content="Easy start with new module | Rich module set up configuration | Best practices support">
  <meta name="og:image" content="https://ciklum-digital.github.io/module-skeleton/assets/images/favicon.png">
  ..
  <link rel="stylesheet" href="assets/styles.css" />
</head>
```

```javascript
/* docs/index.html */

window.$docsify = {                                                                                                     
  homepage: 'getting_started.md',
  repo: 'https://github.com/ciklum-digital/module-skeleton',
  ..
  alias: {
    '/.*/_sidebar.md': '/_sidebar.md',
    '.*?/CODE_OF_CONDUCT': 'https://raw.githubusercontent.com/ciklum-digital/module-skeleton/master/CODE_OF_CONDUCT.md',
    '.*?/CONTRIBUTING': 'https://raw.githubusercontent.com/ciklum-digital/module-skeleton/master/CONTRIBUTING.md',
    '.*?/CHANGELOG': 'https://raw.githubusercontent.com/ciklum-digital/module-skeleton/master/CHANGELOG.md',
  },
  ..
  ga: 'UA-142493578-1', // add app to google analytics 
}                                                                                                                       
```

- As a third step add travis to your repo in [TravisCI](http://travis-ci.com/)


## API

[there the place for API dateils..]

[please fill it for your module]   


## Examples

[there the place for EXAMPLES dateils..]    

[please fill it for your module]   
