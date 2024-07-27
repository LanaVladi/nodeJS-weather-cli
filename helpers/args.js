

function getArgs(args) {
    const resultObj = {}; // args.h = 'weather forecast'; // args.s = 'moscow'

    const [executer, file, ...commandLineArguments] = args;

    commandLineArguments.forEach((arg, ind, arr) => {
        if (arg.charAt(0) === '-') {
            if (ind === arr.length - 1) {
                resultObj[arg.substring(1)] = true;
            }
            else if (arr[ind + 1].charAt(0) !== '-') {
                resultObj[arg.substring(1)] = arr[ind + 1]; // { s: moscow }
            } else {
                resultObj[arg.substring(1)] = true;
            }
        }

    });

    return resultObj;
}

export { getArgs };