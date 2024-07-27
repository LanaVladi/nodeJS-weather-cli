#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError(`A token isn't passed`);
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token is saved successfully!');
    } catch (error) {
        printError(`Token is not saved: ${error.message}`);
    }
}

function initCLI() {
    const commandLineArguments = process.argv;
    const args = getArgs(commandLineArguments);
    if (args.h) {
        // Enter help
        printHelp();
    }
    if (args.s) {
        // Save city
    }
    if (args.t) {
        // Save token
        return saveToken(args.t);
    }

    //   Enter weather
}

initCLI();
