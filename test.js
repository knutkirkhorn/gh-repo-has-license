// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import ghRepoHasLicense from './index.js';

test('check for no errors', async t => {
	try {
		await ghRepoHasLicense('knutkirkhorn/btc-value-cli');
		t.pass();
	} catch {
		t.fail();
	}
});

test('check if there is a license', async t => {
	try {
		const result = await ghRepoHasLicense('knutkirkhorn/btc-value');
		t.true(result);
	} catch {
		t.fail();
	}
});

// License is named 'LICENSE.txt'
test('check license with other name 1', async t => {
	try {
		const result = await ghRepoHasLicense('Microsoft/vscode');
		t.true(result);
	} catch {
		t.fail();
	}
});

// License is named 'license'
test('check license with other name 2', async t => {
	try {
		const result = await ghRepoHasLicense('sindresorhus/got');
		t.true(result);
	} catch {
		t.fail();
	}
});

test('test', async t => {
	try {
		const result = await ghRepoHasLicense('https://github.com/knutkirkhorn/has-license');
		t.true(result);
	} catch {
		t.fail();
	}
});
