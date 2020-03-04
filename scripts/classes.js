// Class classDictionary contains definitions for dictionary
// Dictionary is a set of characters which are used to choose from when generating password
class classDictionary {

    // Immutable set of character sets
    lowercare_set = "abcdefghijklmnopqrstuvwxyz";
    uppercase_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numeric_set = "0123456789";
    special_set = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
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

        // Some variables
        let t, i;
        let dictionary_length = this.dictionary.length;
        
        // We need ARRAY and NOT immutable string
        let final_dictionary=Array.from(this.dictionary);

        // While there remain elements to shuffle…
        while (dictionary_length) {
            
            // Pick a remaining element…
            i = Math.floor(Math.random() * dictionary_length--);
                
            // And swap it with the current element.
            t = final_dictionary[dictionary_length];
            final_dictionary[dictionary_length] = final_dictionary[i];
            final_dictionary[i] = t;

        }

        // Returns the final dictionary
        this.dictionary = final_dictionary;
        return final_dictionary;
    }

    // Prints out the object
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
            alert("Error: your length is out of range. Minimum length = " + this.minimum_length + " , maximum length = " + this.maximum_length + " ."); 
        }
    }

    // Generates password from the dictionary
    generate_password(dict,bar) {

        // Some variables
        let dict_length = dict.length;
        let selector=0;

        // Initiate empty array which will be final password
        let ran_password=[];

        // We iterate over final password
        for (var i = 0; i < this.length; i++) {
            
            // Random index from 0 to length of dictionary
            selector=Math.floor(Math.random() * dict_length + 1);
            // Assign random character from dictionary to ran_password
            ran_password[i] = dict[selector];

            // update progress_bar
          //  console.log(bar.aria-valuenow);
        }
    
        // Returns a string generated from the array
        this.password = ran_password.join("");
    }           
    
    // Prints out the object
    print_2_console() {
        console.log(this.password);
    }

};

