

function getTriangleArea(a, h) {

  if (a <= 0 || h <= 0) {
    return ('Nieprawidłowe dane');
  }
  else {
    return a*h/2;  
  }
  }

console.log(getTriangleArea(10, 6));


var triangle1Area = getTriangleArea(2, 9);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(5, -6);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(3,7);
console.log(triangle3Area);

var triangle4Area = getTriangleArea(-3, -7);
console.log(triangle4Area);