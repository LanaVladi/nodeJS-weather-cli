import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';


// ЗАПРОС С ПОМОЩЬЮ  import https from 'https';

// async function getWeather(city) {
//     const APIKey = await getKeyValue(TOKEN_DICTIONARY.token);

//     return new Promise((resolve, reject) => {

//         if (!APIKey) {
//             throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
//             // The API key is not set, set it via the command
//         }

//         // const URL = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}';
//         const url = new URL(baseURL);
//         url.searchParams.append('q', city);
//         url.searchParams.append('appid', APIKey);
//         url.searchParams.append('lang', "en");
//         url.searchParams.append('units', "metric");

//         https.get(url, (response) => {
//             let result = '';

//             response.on('data', (chunk) => {
//                 resolve(chunk);
//                 result += chunk;
//             })

//             response.on('end', () => {
//                 console.log("result:", JSON.parse(result));
//             })

//             response.on('error', () => {
//                 console.log("error");
//                 reject(new Error('ошибка'));
//             })
//         })
//     }
//     )
// }


// ЗАПРОС С ПОМОЩЬЮ  axios;

async function getWeather(city) {
    const APIKey = await getKeyValue(TOKEN_DICTIONARY.token);

    if (!APIKey) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
        // The API key is not set, set it via the command
    }

    const { data } = await axios.get(baseURL, {
        params: {
            q: city,
            appid: APIKey,
            lang: "en",
            units: "metric",
        }
    });

    // console.log("data:", data);
    return data;
}

export { getWeather };
