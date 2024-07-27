import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city'
}

async function saveKeyValue(key, value) {
    let data = {};
    data[key] = value;
    if (await isFileExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data)); // записываем данные в определенную папку
}

async function getKeyValue(key) {
    if (await isFileExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
}

async function isFileExist(path) {
    try {
        await promises.stat(path);
        console.log("A filePath is exist");
        return true;
    } catch (error) {
        console.log("Error: a filePath doesn't exist", error);
    }
}

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
