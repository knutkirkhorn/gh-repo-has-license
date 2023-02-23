import {expectType} from 'tsd';
import ghRepoHasLicense from './index.js';

expectType<Promise<boolean>>(ghRepoHasLicense('knutkirkhorn/btc-value-cli'));
expectType<Promise<boolean>>(ghRepoHasLicense('https://github.com/knutkirkhorn/btc-value-cli'));
