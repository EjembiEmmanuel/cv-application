function hexToRgb(hex) {
  // Remove the hash (#) character if it's included
  hex = hex.replace(/^#/, "");

  // If the hex value is shorthand (e.g., #F00), expand it to the full format (e.g., #FF0000)
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (char) {
        return char + char;
      })
      .join("");
  }

  // Parse the hex value into its red, green, and blue components
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function calculateBrightness(color) {
  const rgb = color.match(/\d+/g); // Extract RGB values
  const brightness =
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
    1000;
  return brightness;
}

export { hexToRgb, calculateBrightness };
