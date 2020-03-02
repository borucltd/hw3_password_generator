// Password Generator Script
// Requires classes.js where class definitions are stored

let user_length=prompt("Provide password length:");
let user_lower=confirm("Do you want to include lower characters?:");
let user_upper=confirm("Do you want to include upper characters?:");
let user_numerical=confirm("Do you want to include numerical characters?:");
let user_special=confirm("Do you want to include special characters?:");

// Create initial dictionary
let dictionary = new classDictionary(user_lower,user_upper,user_numerical,user_special);
// Shuffle characters within the dictionary
random_dictionary = dictionary.shuffle_dictionary();



// Create initial empty password
let password = new classPassword(user_length,user_lower,user_upper,user_numerical,user_special);
 
// Generate and print out password
password.generate_password(random_dictionary);
password.print_2_console();