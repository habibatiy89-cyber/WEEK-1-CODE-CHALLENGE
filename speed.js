

// Set the speed of the car 
const speed = 80; 

// Check if the speed is below the speed limit
if (speed < 70) {
  // If speed is less than 70 km/h, everything is fine
  console.log("Ok");
} else {
  // If speed is 70 or above, calculate demerit points
  // 1 point for every 5 km/h above 70
  const points = Math.floor((speed - 70) / 5);

  // Check if the demerit points exceed the limit
  if (points > 12) {
    // If more than 12 points, license is suspended
    console.log("License suspended");
  } else {
    // Otherwise, print the number of points
    console.log(`Points: ${points}`);
  }
}
