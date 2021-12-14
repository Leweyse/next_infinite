import { hexToHSL } from "../utils";
import data from "./data/images.json";

const ColorScheme = require('color-scheme');
const scheme = new ColorScheme();

class Img {
    _setValues(rand) {
        this.randImg = data[Math.floor(rand * data.length)];
        this.imageColor = this.randImg.color;
        this.imageHue = hexToHSL(this.imageColor);

        scheme.from_hue(this.imageHue)
            .scheme('mono')
            .variation('light');

        this.colorsArray = scheme.colors();
    }

    _getValues() {
        return {
            img: this.randImg, 
            clr: this.imageColor, 
            clrArr: this.colorsArray
        }
    }
}

export { Img };