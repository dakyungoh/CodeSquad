// 문제 3
function convertToInches(fromMeter) {
  return fromMeter / 0.0254;
}

const meterValue = 1.5;
console.log(meterValue + "m -> " + convertToInches(meterValue) + "inch");
