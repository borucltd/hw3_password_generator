// Hide some elements of the website
// Array of sections
let sections = [ "length","upper","lower","numbers","special","password"];

document.getElementById("btn_generate").style.display = "none";


for (var i = 0; i < sections.length; i++){

    document.getElementById("section_"+sections[i]).style.display = "none";
}


// onclick START button
// and initiate variables
document.getElementById("btn_start").onclick  = function () {

    document.getElementById("btn_generate").style.display = "block";

    for (var i = 0; i < sections.length; i++){

        document.getElementById("section_"+sections[i]).style.display = "block";
    }
};


// onclick GENERATE button 
document.getElementById("btn_generate").onclick  = function () {

    // Read values from the form's elements
    let user_length=document.getElementById("password_length").value;
    let user_lower=document.getElementById("check_lower").checked;
    let user_upper=document.getElementById("check_upper").checked;
    let user_numerical=document.getElementById("check_numbers").checked;
    let user_special=document.getElementById("check_special").checked;
    
    // Clear HTML section responsible for password
    document.getElementById("section_password").innerHTML="";

    // Create initial dictionary
    let dictionary = new classDictionary(user_lower,user_upper,user_numerical,user_special);
    
    // Create initial empty password
    let password = new classPassword(user_length);
    
    // Generate and print out password
    password.generate_password(dictionary.shuffle_dictionary());
    // Show password
    password.show_password(document.getElementById("section_password"));
   
    //password.print_2_console();

};


