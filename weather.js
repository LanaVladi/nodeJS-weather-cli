#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';

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
    }
    //   Enter weather

}

initCLI();

