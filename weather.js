#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather, getIcon } from './services/api.service.js';

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

const saveCity = async (city) => {
    if (!city.length) {
        printError(`A city isn't passed`);
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City is saved successfully!');
    } catch (error) {
        printError(`City is not saved: ${error.message}`);
    }
}

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        const weatherIcon = weather.weather[0].icon;
        printWeather(weather, getIcon(weatherIcon));
        // console.log("weather:", weather);
    } catch (error) {
        if (error?.response?.status === 404) {
            printError(`${error.message}: city not found `);
        } else if (error?.response?.status === 401) {
            printError(`${error.message}: API-key is not correct `);
        } else {
            printError(`Forecast error: ${error.message}`);
        }
    }
}

function initCLI() {
    const commandLineArguments = process.argv;
    const args = getArgs(commandLineArguments);
    // console.log("process.env:", process.env);

    if (args.h) {
        // Enter help
        return printHelp();
    }
    if (args.s) {
        // Save city
        return saveCity(args.s);
        // getForecast(args.s)
        // checkCity(args.s);
    }
    if (args.t) {
        // Save token
        return saveToken(args.t);
    }

    return getForecast();
    //   Enter weather
}

initCLI();