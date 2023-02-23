# gh-repo-has-license

> Check if a GitHub repository has a license

## Installation

```
npm install gh-repo-has-license
```

## Usage

```js
import ghRepoHasLicense from 'gh-repo-has-license';

console.log(await ghRepoHasLicense('knutkirkhorn/btc-value-cli'));
// => true

console.log(await ghRepoHasLicense('https://github.com/knutkirkhorn/btc-value-cli'));
// => true
```

## API

### ghRepoHasLicense(repo)

Returns true if the GitHub `repo` has a license. Otherwise it returns false.

## Related

- [has-license](https://github.com/knutkirkhorn/has-license) - Check if a repository has a license
- [default-branch](https://github.com/knutkirkhorn/default-branch) - Get the default branch of a GitHub repository
