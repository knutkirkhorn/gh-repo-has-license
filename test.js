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