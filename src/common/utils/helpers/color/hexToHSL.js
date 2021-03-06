function hexToHSL(hex) {

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255; g /= 255; b /= 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);

    let h, l = (max + min) / 2;

    if (max === min) h = 0; // achromatic
    else {
        let d = max - min;

        h = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            default: break;
        }

        h /= 6;
    }

    return Math.round(240*h);
}

export default hexToHSL;