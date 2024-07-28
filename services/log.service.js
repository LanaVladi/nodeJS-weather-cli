import chalk from 'chalk';
import dedent from "dedent";

function printError(error) {
    console.log(chalk.bgRed(" ERROR :"), error);
}


function printSuccess(message) {
    console.log(chalk.bgGreen(" SUCCESS :"), message);
}


function printHelp(message) {
    console.log(
        dedent`${chalk.bgYellow(" HELP :")}
        Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
        `);
};

function printWeather(response, icon) {
    console.log(
        dedent`${chalk.bgBlueBright(" WEATHER :")}
        Погода в городе ${response.name} ${icon}  ${response.weather[0].description}
        Температура: ${response.main.temp} (ощущается как ${response.main.feels_like})
		Влажность: ${response.main.humidity}%
		Скорость ветра: ${response.wind.speed}
		`);
};


export { printError, printSuccess, printHelp, printWeather };
