// REFERENCE DATA OBJECT:
// export default [
// {
//   paletteName: "Material UI Colors",
//   id: "material-ui-colors",
//   emoji: "🎨",
//   colors: [
//     { name: "red", color: "#F44336" },
//     { name: "pink", color: "#E91E63" },
//     { name: "purple", color: "#9C27B0" },
//     { name: "deep purple", color: "#673AB7" },
//     { name: "indigo", color: "#3F51B5" },
//     { name: "blue", color: "#2196F3" },
//     { name: "light blue", color: "#03A9F4" },
//     { name: "cyan", color: "#00BCD4" },
//     { name: "teal", color: "#009688" },
//     { name: "green", color: "#4CAF50" },
//     { name: "light green", color: "#8BC34A" },
//     { name: "lime", color: "#CDDC39" },
//     { name: "yellow", color: "#FFEB3B" },
//     { name: "amber", color: "#FFC107" },
//     { name: "orange", color: "#FF9800" },
//     { name: "deep orange", color: "#FF5722" },
//     { name: "brown", color: "#795548" },
//     { name: "grey", color: "#9E9E9E" },
//     { name: "blue grey", color: "#607D8B" }
//   ]
// },

import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/**
 * The code below does look a bit complicated but I'll do my best to explain to future me how it all works together.
 * - The generatePalette function relies on the helper function generateScale defined below the former which returns a scale of colors depending on the number of colors we want on that scale.
 * - The generateScale function then relies on another helper function called getRange which gives us the actual range (i.e the starting point, mid point, end point)  of the colors
 * - After all this is done, in the generatePalette function we then finally define our values in the color object i.e the levels (50, 100, 200, etc) and push the color scale into the array
 */

 // main function
function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {
      // eg --> 50: []
      // 100: [],
      // etc
    }
  }
  // loops through levels array
  for (let level of levels) {
    newPalette.colors[level] = []; // sets level to any empty array inside of colors
  }

  // loops through the colors array of the starterPalette
  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse(); // reverses the arrangement of the array

    // loops through the scale array that is returned when we called the generateScale function above
    // {let i} defines the index

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ g/, "-"), // would return something like nephritis-100
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ", 1.0)")
      })
    }

  }

  return newPalette;

}

/**
 * The getRange function generates a range of colors with the endpoint being complete white and the start point being a darkened version of the base color 
 */

// helper function
function getRange(hexColor) {
  const end = '#fff';
  return [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    end
  ];
}

// helper function
function generateScale(hexColor, numOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColors);
}


export { generatePalette };