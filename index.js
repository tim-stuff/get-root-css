
const getRootCssString = (themeObject) => {
    let cssString = "";
    for (const attribute in themeObject) {
        cssString = (typeof themeObject[attribute] === "object") ? `${cssString} ${getRootCssString(themeObject[attribute])}` : `${cssString}--${attribute}:${themeObject[attribute]};`
    }
    return `:root {${cssString}}`;
}

export default getRootCssString;