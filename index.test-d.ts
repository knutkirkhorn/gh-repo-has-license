import {expectType} from 'tsd';
import ghRepoHasLicense = require('.');

expectType<Promise<boolean>>(ghRepoHasLicense('knutkirkhorn/btc-value-cli'));
expectType<Promise<boolean>>(ghRepoHasLicense('https://github.com/knutkirkhorn/btc-value-cli'));
