import fs from "fs";
import path from "path";
import chalk from "chalk";
import resizeImg from "resize-img";

const resizeImgAsync = async (originFile, outputDir, dimensions, lastOne) => {
    console.log(chalk.gray(`Processing image: "${originFile}"...`));
    const image = await resizeImg(fs.readFileSync(originFile), dimensions);
    const fileName = path.parse(originFile).base;
    const newFileName = `${fileName.slice(0, fileName.lastIndexOf("."))}_${dimensions.width}_${dimensions.height}${fileName.slice(fileName.lastIndexOf("."))}`;
    const outputFile = `${outputDir}${newFileName}`;
    fs.writeFileSync(outputFile, image);
    console.log(chalk.green(`Image: "${originFile}" resized`));
    if (lastOne) {
        console.log(chalk.bgBlueBright("All jobs are done"));
    }
};

export default resizeImgAsync;