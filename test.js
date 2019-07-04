import test from 'ava';
import ghRepoHasLicense from '.';

test('check for no errors', async t => {
    try {
        await ghRepoHasLicense('Knutakir/btc-value-cli');
        t.pass();
    } catch (error) {
        t.fail();
    }
});

test('check if there is a license', async t => {
    try {
        const result = await ghRepoHasLicense('Knutakir/btc-value');
        t.true(result);
    } catch (error) {
        t.fail();
    }
});

// License is named 'LICENSE.txt'
test('check license with other name 1', async t => {
    try {
        const result = await ghRepoHasLicense('Microsoft/vscode');
        t.true(result);
    } catch (error) {
        t.fail();
    }
});

// License is named 'license'
test('check license with other name 2', async t => {
    try {
        const result = await ghRepoHasLicense('sindresorhus/got');
        t.true(result);
    } catch (error) {
        t.fail();
    }
});

test('test', async t => {
    try {
        const result = await ghRepoHasLicense('https://github.com/Knutakir/has-license');
        t.true(result);
    } catch (error) {
        t.fail();
    }
});