//function myFunction() {
    var endN = prompt("What number would you like to end at?", "1");
    var endNum = parseInt(endN);

   for (var i =1;i<=endNum;i++){
 if (endNum % 1!= 0){
  console.log("Please do not use a decimal value");
 }
 else if (i%3==0 && i%5==0){
    console.log("fizz buzz");
}
 else if (i%3==0){
  console.log("fizz");
  }
  else if (i%5==0){
    console.log("buzz");
  }
  else {
    console.log(i);
  }
}
//    }
