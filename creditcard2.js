var ccNumber = "4024007167498756";
var finalCheck;
var sumCheck;

function subNine(n) {
  if (n > 9) {
    n -= 9;
  }
  return n;
}
  var number = parseInt(ccNumber, 10);

function creditCardValidation(ccNumber) {

  for (var i=ccNumber.length - 2; i>=0; i--) {
    var xCheck = ccNumber.charAt(i);
      console.log(i);
      if(((i+1) % 2) == 1) {
        xCheck *= 2;
        xCheck = subNine(xCheck);

        console.log("odd");
      }
      sumCheck = parseInt(xCheck, 10);
      finalCheck = finalCheck + sumCheck;
      console.log("final is " + finalCheck);
  }
  return (10-(finalCheck % 10));

}
