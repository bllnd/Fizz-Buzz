function fizzbuzz() {
  var endN = parseInt(prompt("What number would you like to end at?"));

  if (endN % 1 != 0) {
    console.log("Please do not use a decimal value");
  }

  for (var i = 1; i <= endN; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizz buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
//Latest edit
