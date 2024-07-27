import chalk from 'chalk';

function printError(error) {
    console.log(chalk.bgRed(" ERROR :"), error);
}


function printSuccess(message) {
    console.log(chalk.bgGreen(" SUCCESS :"), message);
}


function printHelp(message) {
    console.log(
        `${chalk.bgYellow(" HELP :")}
        Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
        `);
};


export { printError, printSuccess, printHelp };
