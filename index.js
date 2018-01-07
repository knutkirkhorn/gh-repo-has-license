'use strict';
const https = require('https');
const defaultBranch = require('default-branch');

module.exports = repo => {
    if (!repo.includes('github.com')) {
        repo = 'https://github.com/' + repo;
    }

    return new Promise((resolve, reject) => {
        // Get the default branch of the repo
        defaultBranch(repo).then(branch => {
            const licenseUrl = repo + '/blob/' + branch + '/LICENSE';

            // Check if a license exists at that branch
            https.get(licenseUrl, (response) => {
                if (response.statusCode < 200 || response.statusCode > 299) {
                    resolve(false);
                }

                resolve(true);
            }).on('error', (error) => {
                reject(error);
            });
        }).catch(() => {
            // If `default-branch` can't find anything. Url is wrong.
            resolve(false);
        });
    });
};
