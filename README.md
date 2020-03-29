# image-resizer-cli
> A cli tool for batch resizing images.

## How to use it
1. Clone or download this repository to your local directory
2. cd to image-resizer-cli
3. Initialize npm
```
$ npm init
```
4. Open a command line interface, run: 
```
$ npm start param1 param2 param3 param4
```
 - Type **All FOUR (4)** parameters as the following format, each one is separated by a space character: 
   - `param1`: /path/to/origin/file or directory 
   - `param2`: /path/to/output/directory 
   - `param3`: output image width (0 as auto) 
   - `param4`: output image height (0 as auto)
 
#### Notes
 - It resizes the single image file if `param1` points to an image file, while it resizes all the image files under the path directory if `param1` points to a directory whose files are all images.
 - It makes a new directory if output directory `param2` is not existing.
 - It resizes the image(s) to the proportional ratio (width/height) as the original image, if set either `param3` or `param4` to 0. Or keep the width and height same as original image if both are set to 0.
 - The output image file(s) are named as originalFileName_setWidth_setHeight.png. I.e. `example.png` -> `example_1920_1080.png`.
 
## Example 
![cliExample](https://github.com/legend-in/image-resizer-cli/blob/master/images/cliExample.PNG)
![outputExample](https://github.com/legend-in/image-resizer-cli/blob/master/images/outputExample.PNG)
