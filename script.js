//console.log("Hello on my test page!")


// let userAge = prompt("Enter your age here:")

// if (userAge >= 18) {
// console.log("You over 18, Welcome")
// }
// else if (userAge < 18) {
//     console.log("Sorry, you can not be here, get out!")
// }

/* const age = prompt("Enter your age:")

if (age < 5) {
    console.log("You pass for Free kid!")
} else if (age < 10) {
    console.log("Pay 10$")
} else if (age < 65) {
    console.log("Good morning, 20$ please")
} else if (age >= 65) {
    console.log("Senior, you pay only 10$")
} */

const password = prompt("Please enter new password here:")

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password!")
    } else {
        console.log("Remove spaces!")
    }
} else {
    console.log("Password must have more than 6 chararters")
}

