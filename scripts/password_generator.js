// Hide some elements of the website
// Array of sections
let sections = [ "length","upper","lower","numbers","special","progressbar"];

document.getElementById("btn_generate").style.display = "none";


for (var i = 0; i < sections.length; i++){

    document.getElementById("section_"+sections[i]).style.display = "none";
}


// Once Start button is clicked, unhide other elements
// and initiate variables
document.getElementById("btn_start").onclick  = function () {

    document.getElementById("btn_generate").style.display = "block";

    for (var i = 0; i < sections.length; i++){

        document.getElementById("section_"+sections[i]).style.display = "block";
    }

    
};




// Once Generate button is clicked, do what it is suppose to do
document.getElementById("btn_generate").onclick  = function () {

    let user_length=document.getElementById("password_length").value;
    let user_lower=document.getElementById("check_lower").value;
    let user_upper=document.getElementById("check_upper").value;
    let user_numerical=document.getElementById("check_numbers").value;
    let user_special=document.getElementById("check_special").value;

    // Create initial dictionary
    let dictionary = new classDictionary(user_lower,user_upper,user_numerical,user_special);
    // Shuffle characters within the dictionary
    random_dictionary = dictionary.shuffle_dictionary();

    // Create initial empty password
    let password = new classPassword(user_length,user_lower,user_upper,user_numerical,user_special);
    
    // Generate and print out password
    password.generate_password(random_dictionary);
    password.print_2_console();

};


