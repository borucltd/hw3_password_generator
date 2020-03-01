// Class classPassword contains definition for password objects
class classPassword {

    // Default attributes = values
    minimum_length = 1;
    maximum_length = 128;
    lowercase_characters = true;
    uppercase_characters = true;
    numeric_characters = true;
    special_characters = true;

    // Constructor
    constructor(min_l, max_l, lower, upper, numeric, special) {
        
        // if constructor without parameter(s) then use the default one(s)
        this.minimum_length = (typeof min_l === 'undefined') ? this.minimum_length : min_l;
        this.maximum_length = (typeof max_l === 'undefined') ? this.maximum_length : max_l;
        this.lowercase_characters = (typeof lower === 'undefined') ? this.lowercase_characters : lower ;
        this.uppercase_characters = (typeof upper === 'undefined') ? this.uppercase_characters : upper;
        this.numeric_characters = (typeof numeric === 'undefined') ? this.numeric_characters : numeric;
        this.special_characters = (typeof special === 'undefined') ? this.special_characters : special;

        // initial password to be always empty_password
        this.password = "empty_password";
    }

    // Methods
    generate_password() {

        console.log("generating password");

    }
    print_2_console() {
        console.log(this);
    }

};

// Class classDictionary contains definitions for dictionary
// Dictionary is a set of characters which are used to choose from when generating password
class classDictionary {
    constructor(min_l, max_l, lower, upper, numeric, special) {
        
        // we always use pre-defined sets of characters
        this.lowercare_set = "abcdefghijklmnopqrstuvwxyz";
        this.uppercase_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        this.numeric_set = "0123456789";
        // before " I had to add \
        this.special_set = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    }

    print_2_console() {
        console.log(this);
    }

};

