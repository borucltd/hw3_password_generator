// Password Generator Script
// Requires classes.js where class definitions are stored

// Initiate password object


let user_length;
let user_upper,user_lower,user_numerical,user_special;


user_length=prompt("Provide length:");
user_lower=confirm("Do you want to include lower characters?:");
user_upper=confirm("Do you want to include upper characters?:");
user_numerical=confirm("Do you want to include numerical characters?:");
user_special=confirm("Do you want to include special characters?:");

let dictionary = new classDictionary(user_lower,user_upper,user_numerical,user_special);
let random_dictionary = dictionary.shuffle_dictionary();
let password = new classPassword(user_length,user_lower,user_upper,user_numerical,user_special);
 

console.log(password.generate_password(random_dictionary));