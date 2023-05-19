//1
let message = 'Hello World'

console.log(message)

/*
//2

var username, password, role;


function login() {
  
  username = prompt("Username: ");
  password = prompt("Password: ");
  role = prompt("Role: ");

  
  if (!username || !password || !role) {
    alert("Input should not be empty.");
  } else {
    // Switch statement to check user's role
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}


login();

*/
//3
function CalAvg(num1, num2, num3, num4) {
  var average;
  average = (num1 + num2 + num3 + num4) / 4;
  average = Math.round(average);
  console.log("Rounded average:", average);

  if (average <= 74) {
    console.log("Hello, student, your average is", average + ". The letter equivalent is F");
  } else if (average >= 85 && average <= 89) {
    console.log("Hello, student, your average is", average + ". The letter equivalent is B");
  } else if (average >= 90 && average <= 95) {
    console.log("Hello, student, your average is", average + ". The letter equivalent is A");
  } else if (average > 96) {
    console.log("Hello, student, your average is", average + ". The letter equivalent is A+");
  }
}

// Example usage
CalAvg(95, 90, 92, 95);