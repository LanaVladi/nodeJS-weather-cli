import { homedir } from 'os'; // библиотека для работы с ОС
import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path'; // библиотека для работы с путями, решит все вопросы по вложенности, форматами различных ОС

// process - глобальный переменная nodeJS
// console.log(process.argv); // initCLI started:
// [
//     'C:\\Users\\svetl\\AppData\\Roaming\\nvm\\v20.12.0\\node.exe',
//     'D:\\epam\\EPAM RD Lab\\Node js\\weather-cli\\nodeJS-weather-cli\\weather.js'
//   ]

const filePath = join(homedir(), 'weather-data.json');

// console.log("homedir:", homedir());
// Returns the string path of the current user's home directory // homedir: C:\Users\svetl
// console.log("join:", join(homedir(), 'weather-data.json'));

// Join all arguments together and normalize the resulting path. // join: C:\Users\svetl\weather-data.json 
// просто сконкантенировала строки

// console.log("join:", join(homedir(), '../weather-data.json'));
// join: C:\Users\weather-data.json // на уровень выше вложила строку //  .. - шаг назад

console.log("basename(filePath):", basename(filePath)); // название последнего файла
// basename(filePath): weather-data.json

console.log("dirname(filePath):", dirname(filePath)); // директории файла
// dirname(filePath): C:\Users\svetl

console.log("extname(filePath):", extname(filePath)); // расширение файла
// extname(filePath): .json

console.log("relative(filePath, dirname(filePath)):", relative(filePath, dirname(filePath))); // относительный путь между двумя путями
// relative(filePath, dirname(filePath)): ..

console.log("isAbsolute(filePath):", isAbsolute(filePath)); // проверяет абсолютный ли путь, True - да
// isAbsolute(filePath): true

console.log("resolve('..'):", resolve('..')); // показывает путь расположения папки, в которой мы находимся; 
// путь относительно текущей папки исполнения 
// resolve('..'): D:\epam\EPAM RD Lab\Node js\weather-cli

console.log("sep:", sep); // The platform-specific file separator. '\' or '/'. // универсальный разделитель путей, 
// зависящий от ОС // windows - sep: \, MacOS - /


// console.log("basename():", basename(filePath));
// // const filePath = join(homedir());
// // basename(): svetl

