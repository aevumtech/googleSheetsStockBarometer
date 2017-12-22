function streak(input) {
  if (input.map) {            // Test whether input is an array.
    var streakSum = 0;
    for (i = 0; i < input.length; i++) {
      //streakSum += parseInt(input[i]);
      if ((streakSum > 0 & input[i] == -1) || (streakSum < 0 & input[i] == 1)) {
        streakSum = 0;
      } 
      streakSum += parseInt(input[i]);
      
    }  
    return streakSum; 
  } else {
    return "You didn't select a group of cells. Check your input";
  }
}

function grabCurrent50SMA(input, input2) {
  var sum = 0;
  if (input.map) {
    for (i = 0; i < input.length; i++) {
      sum += parseInt(input[i]);
    }  
    sum += input2;
    return sum / 50;
  } else {
    return "You did not return 50 dates";
  }  
}
function grabPrevious50SMA() {
}  
function grabCurrent100SMA() {
}  
function grabPrevious100SMA() {
}
function grabCurrent200SMA() {
}  
function grabPrevious200SMA() {
}  