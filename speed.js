

// Set the speed of the car 
// Function to check speed and assign demerit points
function checkSpeed(speed) {
  // Step 1: Check if the speed is below 70 km/h
  if (speed < 70) {
    console.log("Ok"); // Safe speed
  } else {
    // Step 2: Calculate demerit points
    // Formula: 1 point for every 5 km/h above 70
    const points = Math.floor((speed - 70) / 5);

    // Step 3: Check if demerit points exceed 12
    if (points > 12) {
      console.log("License suspended"); // Too many points
    } else {
      console.log(`Points: ${points}`); // Print calculated points
    }
  }
}
checkSpeed(80);
checkSpeed(90);


