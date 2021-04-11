import {expectType} from 'tsd';
import ghRepoHasLicense = require('.');

expectType<Promise<boolean>>(ghRepoHasLicense('Knutakir/btc-value-cli'));
expectType<Promise<boolean>>(ghRepoHasLicense('https://github.com/Knutakir/btc-value-cli'));
