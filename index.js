import defaultBranch from 'default-branch';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import got from 'got';
import * as cheerio from 'cheerio';
import getPackageUserAgent from 'package-user-agent';

const packageUserAgent = await getPackageUserAgent();

async function fallbackMethod(repoUrl) {
	try {
		const response = await got(repoUrl, {headers: packageUserAgent});
		const $ = cheerio.load(response.body);
		const licenseUrlPath = $('a > svg.octicon-law').parent().attr('href');
		const newLicenseUrl = `https://github.com${licenseUrlPath}`;
		await got(newLicenseUrl, {headers: packageUserAgent});
		return true;
	} catch {
		return false;
	}
}

export default async function ghRepoHasLicense(repo) {
	if (!repo.includes('github.com')) {
		// eslint-disable-next-line no-param-reassign
		repo = `https://github.com/${repo}`;
	}

	try {
		const branch = await defaultBranch(repo);
		// Try first to check this url, since it is the most used
		const licenseUrl = `${repo}/blob/${branch}/LICENSE`;
		await got(licenseUrl, {headers: packageUserAgent});
		return true;
	} catch (error) {
		if (error.response.statusCode !== 404) return false;

		return fallbackMethod(repo);
	}
}
