function streak(input) {
  if (input.map) {            
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
function getSMA(input, input2) {
  return "test approved";
}  


function grabCurrent50SMA(input, input2) {
  var sum = 0;
  if (input.map) {  
    for (i = 0; i < input.length; i++) {
      sum += parseFloat(input[i]);
    }
    sum += parseFloat(input2);
    return sum/50;
    /* JUNK CODE, but perhaps useful legacy
    for (i = 0; i < input.length; i++) {
      //sum += parseFloat(input[i]);
      if (i == 49) {
        return "what?";
        return parseFloat(input[i]);
      }
    }  
    sum += input.length;
    */
    //sum += parseFloat(input2);
  } else {
    return "You did not return 50 dates";
  }  
}

function grabCurrent100SMA(input, input2) {
  return getSMA(input, input2);
}  

function grabCurrent200SMA() {
}  
  