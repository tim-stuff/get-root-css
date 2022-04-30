
module.exports.printMsg = function() {
    console.log("This is a message from the demo package");
}

module.exports.getRootCssString = (themeObject) => {
    let cssString = "";
    for (const attribute in themeObject) {
        cssString = (typeof themeObject[attribute] === "object") ? `${cssString} ${getRootCssString(themeObject[attribute])}` : `${cssString}--${attribute}:${themeObject[attribute]};`
    }
    return `:root {${cssString}}`;
}