import sizeOf from "image-size";

const getImgDimensions = (pathToFile) => {
    const dimensions = sizeOf(pathToFile);
    dimensions.ratio = dimensions.width / dimensions.height;
    return dimensions;
};

export default getImgDimensions;
