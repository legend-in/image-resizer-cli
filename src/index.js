import fs from "fs";
import path from "path";
import chalk from "chalk";

import resizeImgAsync from "./resizeImgAsync";
import readArgv from "./readArgv";
import getNewDimensions from "./getNewDimensions";

console.log(chalk.blueBright("Image Resize CLI by JJ\n--------------------"));

// Process stdin as arguments
const argv = readArgv();
const argvIsValid = argv.valid;
const originFile = argv.originFile;
const originDir = argv. originDir;
const outputDir = argv.outputDir;
const setWidth = argv.width;
const setHeight = argv.height;

// Resizing image(s) only if arguments are valid
if (argvIsValid) {
    // Make a new directory if the assigned output directory is not existing
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
        console.log(chalk.bgGray(`Creating directory "${outputDir}"...`));
    }

    // If the input is a single file
    if (originFile) {
        // Set up new dimensions for new image(s)
        const newDimension = getNewDimensions(originFile, setWidth, setHeight);
        resizeImgAsync(originFile, outputDir, newDimension);
        console.log(chalk.blueBright("All jobs are done"));
    } else if (originDir) {
        // If the input is a directory
        fs.readdir(originDir, (error, files) => {
            if (error) {
                console.log(chalk.red(error));
            } else {
                let lastJob = false;
                files.forEach((file, index) => {
                    console.log(chalk.yellow(`Loading image No.${index + 1}: "${file}"...`));
                    const filePath = path.join(originDir, file);
                    // Set up new dimensions for new image(s)
                    const newDimension = getNewDimensions(filePath, setWidth, setHeight);
                    lastJob = (index === files.length - 1);
                    resizeImgAsync(filePath, outputDir, newDimension, lastJob);
                });
            }
        });
    }
}

