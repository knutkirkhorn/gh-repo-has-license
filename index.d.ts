/**
Check if a GitHub repository has a license
@param repo - GitHub repository.
@returns Returns true if the GitHub `repo` has a license. Otherwise it returns false.
@example
```
import ghRepoHasLicense from 'gh-repo-has-license';

ghRepoHasLicense('Knutakir/btc-value-cli').then(result => {
    console.log(result);
    // => true
});

ghRepoHasLicense('https://github.com/Knutakir/btc-value-cli').then(result => {
    console.log(result);
    // => true
});
```
*/
declare function ghRepoHasLicense(repo: string): Promise<boolean>;

export = ghRepoHasLicense;
