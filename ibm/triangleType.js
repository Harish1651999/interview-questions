// Question 11: In the assembly line, the factory assembles three parts a b' 'c'
// of a triangle toy. A valid toy is one where the two shorter sides added together
// are greater in length than the longest side.

function triangleType(triangleToy) {
  const ans = [];
  for (const sides of triangleToy) {
    const [side1, side2, side3] = sides.split(" ").map(Number);

    if (
      side1 + side2 > side3 &&
      side2 + side3 > side1 &&
      side1 + side3 > side2
    ) {
      if (side1 === side2 && side2 === side3) {
        ans.push("Equilateral");
      } else if (side1 === side2 || side2 === side3 || side3 === side1) {
        ans.push("Isosceles");
      } else {
        ans.push("None of these");
      }
    } else {
      ans.push("None of these");
    }
  }
  return ans;
}

let triangleToy = ["2 2 1", "3 3 3", "3 4 5", "1 1 3"];
console.log(triangleType(triangleToy));
