const buildCssString = (themeObject,parentAttribute="") => {
    let cssString = "";
    for (const attribute in themeObject) {
        cssString = (typeof themeObject[attribute] === "object") ? `${cssString} ${buildCssString(themeObject[attribute],`${parentAttribute}-${attribute}`)}` : `${cssString}--${parentAttribute}-${attribute}:${themeObject[attribute]};`
    }
    return cssString;
}

const getRootCss = (themeObject,parentAttribute="") => {
    return `:root {${buildCssString(themeObject,parentAttribute)}}`
}

module.exports = {
    getRootCss,
    buildCssString
}