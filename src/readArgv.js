import fs from "fs";
import chalk from "chalk";

const readArgv = () => {
    const myArgv = process.argv.slice(2);
    let isValid = myArgv.length === 4;
    const argv = {};
    if (!isValid) {
        console.log(chalk.red("Pease type the all FOUR(4) parameters as the following format, each is separated by a space character: \n1. /path/to/origin/file or directory \n2. /path/to/output/directory \n3. output image width (0 as auto) \n4. output image height (0 as auto)"));
    } else {
        // Check if the first parameter is a valid path to a file or directiory
        if (!fs.existsSync(myArgv[0])) {
            isValid = false;
            console.log(chalk.red("Origin file or directory is not existing!"));
        } else {
            const fsStat = fs.statSync(myArgv[0]);
            if (fsStat.isFile()) {
                argv.originFile = myArgv[0];
            } else if (fsStat.isDirectory()) {
                argv.originDir = myArgv[0];
            }
            const restArgv = {
                outputDir: myArgv[1],
                width: myArgv[2],
                height: myArgv[3]
            };
            Object.assign(argv, restArgv);
        }
    }
    argv.valid = isValid;
    return argv;
}
    
export default readArgv;
