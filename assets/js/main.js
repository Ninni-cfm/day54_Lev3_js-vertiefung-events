/*
JS Vertiefung CodeFlow Übung lev3_1: Dynamische Website - Aufgabenstellung

Schreibe wieder eine kleine App, die die Hintergrundfarbe ändert.
Schreibe 3 Funktionen:
    1. Ändere die Hintergrundfarbe, wenn auf einen Button geklickt wird.
    2. Ändere die Hintergrundfarbe wenn die Regler verschoben werden in den jeweiligen Farbwert.
    3. konvertiere Dezimal zu Hex.

Assets:
    * HTML CSS Code befindet sich im Kommentar
*/


//****************************************************************************
// a global counter for each button click
let count = 0;


//****************************************************************************
// color change button clicked
function changeBackground(bgColor) {

    setBackground(bgColor);
    document.getElementById("demo").textContent = `Du hast die Farbe ${++count} mal gewechselt!`;
}


//****************************************************************************
// a slider has changed, set the body background color
function changeHandle() {

    let rgb = [
        Number(document.getElementById("rot").value),
        Number(document.getElementById("grun").value),
        Number(document.getElementById("blau").value)
    ];
    document.body.style.backgroundColor = hexColor(rgb);
    document.getElementById("demo").textContent = `${rgbColor(rgb)} = ${hexColor(rgb)}`;
}


//****************************************************************************
// set the body background color and adjust the sliders
function setBackground(bgColor) {

    document.body.style.backgroundColor = bgColor;

    let color = getComputedStyle(document.body).getPropertyValue("background-color");
    let rgb = getRgbValues(color)

    document.getElementById("rot").value = rgb[0];
    document.getElementById("grun").value = rgb[1];
    document.getElementById("blau").value = rgb[2];
}


//****************************************************************************
// get the values for each color channel from rgb(...)
function getRgbValues(color) {

    // define an array for the single color channels
    let rgb = [0, 0, 0];
    let tmp = color.replace("rgb(", "").replace(")", "").split(',');

    for (let i = 0; i < tmp.length; i++)
        rgb[i] = Number(tmp[i]);

    return rgb;
}


//****************************************************************************
// build a hex color string from RGB values
function hexColor(rgbColor) {
    return '#' + number2Hex(
        (rgbColor[0] * 256 * 256) +
        (rgbColor[1] * 256) +
        rgbColor[2]);

}


//****************************************************************************
// build a rgb color string from RGB values
function rgbColor(rgbValues) {
    return `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
}

//****************************************************************************
// hex <-> dec conversions
function hex2Number(hex) {
    return parseInt(hex, 16);
}
function number2Hex(num) {
    return num.toString(16).padStart(6, '0');
}