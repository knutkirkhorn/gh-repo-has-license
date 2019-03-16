import test from 'ava';
import m from '.';

test('check for no errors', t => {
    return m('Knutakir/btc-value-cli').then(result => {
        t.pass();
    }).catch(() => {
        t.fail();
    });
});

test('check if there is a license', t => {
    return m('Knutakir/btc-value').then(result => {
        t.true(result);
    }).catch(() => {
        t.fail();
    });
});

// license is named 'LICENSE.txt'
test('check license with other name 1', t => {
    return m('Microsoft/vscode').then(result => {
        t.true(result);
    }).catch(() => {
        t.fail();
    });
});

// license is named 'license'
test('check license with other name 2', t => {
    return m('sindresorhus/got').then(result => {
        t.true(result);
    }).catch(() => {
        t.fail();
    });
});