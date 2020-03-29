import getImgDimensions from "./getImgDimensions";

const getNewDimensions = (originFile, setWidth, setHeight) => {
    const newDimension = {};
    const imgDimensions = getImgDimensions(originFile);
    if (setWidth == 0 && setHeight == 0) {
        newDimension.width = imgDimensions.width;
        newDimension.height = imgDimensions.height;
    } else if (setWidth == 0) {
        newDimension.width = setHeight * imgDimensions.ratio;
        newDimension.height = setHeight;
    } else if (setHeight == 0) {
        newDimension.width = setWidth;
        newDimension.height = setWidth / imgDimensions.ratio;
    } else {
        newDimension.width = setWidth;
        newDimension.height = setHeight;
    }
    newDimension.width = parseInt(newDimension.width);
    newDimension.height = parseInt(newDimension.height);
    return newDimension;
};

export default getNewDimensions;
