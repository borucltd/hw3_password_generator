'use strict';

// Class classDictionary contains definitions for dictionary
// Dictionary is a set of characters which are used to choose from when generating password
class classDictionary {

    // Immutable set of character sets
    lowercare_set = "abcdefghijklmnopqrstuvwxyz";
    uppercase_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numeric_set = "0123456789";
    special_set = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // empty dictionary
    dictionary="";

    // Initiates immutable string dictionary
    constructor(lower, upper, numeric, special) {

        if (lower === false && upper === false && numeric === false && special === false) {

            alert("Error: you should specify some characters !!!");
            
        } else {
            // Include lowercases
            if (lower) {
                this.dictionary+=this.lowercare_set;
            } 
            // Include uppercases
            if (upper){
                this.dictionary+=this.uppercase_set;

            } 
            // Include numbers
            if (numeric) {
                this.dictionary+=this.numeric_set;

            } 
            // Include special characters
            if (special) {
                this.dictionary+=this.special_set;
            } 
        }

    }

    // I wanted to add more randomization... so I though it would be
    // good to shuffle different sets of characters into one array
    // and then select from this array
    // Algorithm taken from https://bost.ocks.org/mike/shuffle/
    // Fisher–Yates Shuffle
    shuffle_dictionary() {

        // Some varia                                                                                       es
        let t, i;
        
        // We need ARRAY and NOT immutable string
        let final_dictionary=Array.from(this.dictionary);

        // Size of dictionary ARRAY
        let dictionary_length = this.final_dictionary;

        // We start shuffling from the END of the dictionary
        while (dictionary_length) {
            
            // Random index from 0 to dictionary length -1
            // This also decrements dictionaty_length
            i = Math.floor(Math.random() * dictionary_length--);
                
            // Actual "current last element"
            t = final_dictionary[dictionary_length];

            // Replace "current last element" with the random one
            final_dictionary[dictionary_length] = final_dictionary[i];

            // Move the "current last element" so we don't loose it
            final_dictionary[i] = t;

        }

        // Returns the final SHUFFLED dictionary
        return final_dictionary;
    }

    // Prints out the object for debugging
    print_2_console() {
        console.log(this.dictionary);
    }

};


// Class classPassword contains definitions for password
class classPassword {

    // Default attributes = values
    minimum_length = 8;
    maximum_length = 128;
    length = 8;

    // Constructor
    constructor(user_length) {
        
        // if we create object without parameter(s) then use the default one(s)
        if ( user_length >= this.minimum_length && user_length <= this.maximum_length  ) {
            this.length  = user_length;
        } else {
            // HERE WE NEED SOMETHING LIKE DYNAMIC HTML
            alert("Error: your length is out of range. Minimum length = " + this.minimum_length + " , maximum length = " + this.maximum_length + " ."); 
        }
    }

    // Generates password from the dictionary
    generate_password(dict) {

        // Some variables
        let dict_length = dict.length;
        let selector=0;

        // Initiate empty array which will be final password
        let ran_password=[];

        // We iterate over final password from the FIRST element
        for (var i = 0; i < this.length; i++) {
            
            // Random index from 0 to length of dictionary
            selector=Math.floor(Math.random() * dict_length + 1);
            // Assign random character from dictionary to ran_password
            ran_password[i] = dict[selector];

        }
    
        // Returns a string generated from the array
        // Password will be stored in the object
        this.password = ran_password.join("");       
    }           
    
    // Dynamic HTML, result is a section where it will be created
    show_password(result) {

        let password_header = document.createElement("H1");
        let password_text = document.createElement("INPUT");
        let password_copy_button = document.createElement("BUTTON");

        password_header.setAttribute('class', 'my-3');
        password_text.setAttribute('value',this.password);
        // Add form-control class which automatically gives me responsivness :) bootstrap !!!
        password_text.setAttribute('class','bg-danger form-control');
        // width of the input element depends on password length
        password_text.setAttribute('size',this.password.length);
        password_copy_button.setAttribute('class','bg-info btn btn-primary form-control mt-3');
        password_copy_button.innerHTML="Copy to clipboard.";

        password_text.innerTex = this.password;


        //password_copy_button.setAttribute( "onClick", "myFunction("+VALUE+");" )

        // Add all HTML elements to section "result"
        result.appendChild(password_header);
        result.appendChild(password_text);
        result.appendChild(password_copy_button);

        password_copy_button.onclick = () => { 

            //select password
            password_text.select();
            //password_text.setSelectionRange(0, 99999); /*For mobile devices*/
            
            // erhmm copy?
            document.execCommand("copy");

            //clear selection (googled that one...)
            password_text.blur();

            //fancy color when copied
            password_text.setAttribute('class','bg-success form-control');
         }

    }
    // Prints out the object for debugging
    print_2_console() {
        console.log(this.password);
    }

};

