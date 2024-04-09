// Prisoners are standing a Cartesian coordinate system present inside a jail. Each prisoner stands at a
// unique point with both the coordinates (x.y) being integers. Each pointer should be at a position
// that forms a rectangle or square with 3 other prisoners.

function missingPrisoner(locations) {
  const x_coords = new Set();
  const y_coords = new Set();

  // Populate sets of x and y coordinates
  for (const loc of locations) {
    x_coords.add(loc[0]);
    y_coords.add(loc[1]);
  }

  // Find missing x coordinate
  let missing_x = 0;
  for (const x of x_coords) {
    let count = 0;
    for (const loc of locations) {
      if (loc[0] === x) {
        count++;
      }
    }
    if (count === 1) {
      missing_x = x;
      break;
    }
  }

  // Find missing y coordinate
  let missing_y = 0;
  for (const y of y_coords) {
    let count = 0;
    for (const loc of locations) {
      if (loc[1] === y) {
        count++;
      }
    }
    if (count === 1) {
      missing_y = y;
      break;
    }
  }

  return [missing_x, missing_y];
}

// Example usage:
const locations = [
  [1, 1],
  [1, 2],
  [2, 1],
  [4, 4],
  [4, 6],
  [9, 4],
  [9, 6],
];
const result = missingPrisoner(locations);
console.log(result); // Output: [2, 2]
