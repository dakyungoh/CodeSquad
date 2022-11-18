function getAreaOfCircle(radius) {
  return radius * radius * 3.14;
}

function getAreaOfRectangle(width, height) {
  return width * height;
}

function getAreaOfSquare(length) {
  return length * length;
}

function getArea(shape, size1, size2) {
  if (shape === "circle") {
    return getAreaOfCircle(size1);
  } else if (shape === "rectangle") {
    return getAreaOfRectangle(size1, size2);
  } else if (shape === "square") {
    return getAreaOfSquare(size1);
  } else {
    console.log("정의되지 않은 도형입니다.");
  }
}

console.log(getArea("circle", 10)); // 314.1592653589793

console.log(getArea("rectangle", 10, 15)); // 150

console.log(getArea("square", 5)); // 25
