// Hide some elements of the website
document.getElementById("btn_generate").style.display = "none";

let sections = [ "length","upper","lower","numbers","special"];
for (var i = 0; i < sections.length; i++){

    document.getElementById("section_"+sections[i]).style.display = "none";
}


// Once Start button is clicked, unhide other elements
document.getElementById("btn_start").onclick  = function () {

    document.getElementById("btn_generate").style.display = "block";
  
  };



