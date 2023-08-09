var arr = [1, 3, 5, 7, 9, 11];
function make_avg(array) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(make_avg(1, 3, 5, 7, 9, 11));

var signal = "green";
switch (signal) {
  case "green":
    console.log("lets cross the road");
    break;
  case "yellow":
    console.log("lets wait for the signal");
    break;
  case "red":
    console.log("lets not cross the road");
    break;
}
