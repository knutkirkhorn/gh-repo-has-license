# gh-repo-has-license [![Build Status](https://travis-ci.org/Knutakir/gh-repo-has-license.svg?branch=master)](https://travis-ci.org/Knutakir/gh-repo-has-license)
> Check if a GitHub repository has a license

## Installation
```
$ npm install gh-repo-has-license
```

## Usage
```js
const ghRepoHasLicense = require('gh-repo-has-license');

ghRepoHasLicense('Knutakir/btc-value-cli').then(result => {
    console.log(result);
    // => true
});

ghRepoHasLicense('https://github.com/Knutakir/btc-value-cli').then(result => {
    console.log(result);
    // => true
});
```

## API
### ghRepoHasLicense(repo)
Returns true if the GitHub `repo` has a license. Otherwise it returns false.

## Related
- [has-license](https://github.com/Knutakir/has-license) - Check if a repository has a license
- [default-branch](https://github.com/Knutakir/default-branch) - Get the default branch of a GitHub repository

## License
MIT © [Knut Kirkhorn](LICENSE)
