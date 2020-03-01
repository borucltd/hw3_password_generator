// Password Generator Script
// Requires classes.js where class definitions are stored

// Initiate password object
const pass = new classPassword();
const pass1 = new classPassword(2,10,false,false,false,false);
const dict = new classDictionary();

// debug
pass.print_2_console();
pass1.print_2_console();
dict.print_2_console();