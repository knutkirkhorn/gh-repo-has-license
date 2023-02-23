/**
Check if a GitHub repository has a license
@param repo - GitHub repository.
@returns Returns true if the GitHub `repo` has a license. Otherwise it returns false.
@example
```
import ghRepoHasLicense from 'gh-repo-has-license';

console.log(await ghRepoHasLicense('knutkirkhorn/btc-value-cli'));
// => true

console.log(await ghRepoHasLicense('https://github.com/knutkirkhorn/btc-value-cli'));
// => true
```
*/
export default function ghRepoHasLicense(repo: string): Promise<boolean>;
