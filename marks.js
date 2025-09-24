//function to calculate a grade based on amrks

function calculateGrade(marks) {
  //check if the grade is between 80 and 100
  if (marks > 79 && marks <= 100) {
    return "Grade: A";
    //check if the grade is between 79 and 60
  } else if (marks >= 60 && marks <= 79) {
    return "Grade: B";
    //check if the grade is between 50 and 59
  } else if (marks >= 50 && marks <= 59) {
    return "Grade: C";
    //check if the grade is between 40 and 49
  } else if (marks >= 40 && marks <= 49) {
    return "Grade: D";
    //check if the grade is less than 40
  } else if (marks >= 0 && marks < 40) {
    return "Grade: E";
  } else {
    return "Invalid Marks";
  }
}

// Example
console.log(calculateGrade(90)); //out put grade A
console.log(calculateGrade(75)); //outpit grade B
console.log(calculateGrade(35)); //output grade E
console.log(calculateGrade(120)); //output invalid marks
