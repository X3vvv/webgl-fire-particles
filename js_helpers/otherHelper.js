/**
 * Set the element as 'undefined', so that deleteMarked() will delete it from the
 * @param {Array} array any array
 * @param {int} index index of an element of the array
 */
function markForDeletion(array, index) {
  array[index] = undefined;
}

/**
 * Clean array by deleting all 'undefined' elements.
 * @param {Array} array any array
 * @returns cleaned array
 */
function deleteMarked(array) {
  var newIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      array[newIndex] = array[i];
      newIndex += 1;
    }
  }
  return array.slice(0, newIndex);
}


// hsv to rgb
function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (h && s === undefined && v === undefined) {
    s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return {
    r: r,
    g: g,
    b: b
  };
}

function convertHue(hue) {
  hue /= 360.0;
  if (hue < 0)
    hue += 1.0;
  return hue;
}

function componentToHex(c) {
  var hex = Math.round(c * 255).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(c) {
  return "#" + componentToHex(c.r) + componentToHex(c.g) + componentToHex(c.b);
}

// function time() {
//   // return Unix timestamp, milliseconds
//   return new Date().getTime();
// }

/**
 * Compatible way of implement requesAnimFrame.
 * Code from: https://www.cnblogs.com/zhangycun/p/7809633.html
 */
// window.requestAnimFrame = (function () {
//   return window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     function (callback) {
//       window.setTimeout(callback, 6000 / 60);
//     };
// })();