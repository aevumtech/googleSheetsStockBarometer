/* Streaks are important for swing traders because 4 green days intrinsically means a red day is coming.
In my sheet, each row has a cell that outputs 1 if green day or -1 if red day.
Streak takes an array of those cells and outputs the streak. 
If streak is 4, but then has a red day, it comes -1.
If streak is -3, but then has a green day, it comes a 1.
*/
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