// Hide some elements of the website
document.getElementById("btn_generate").style.display = "hide";

// Once Start button is clicked, unhide other elements
document.getElementById("btn_start").onclick  = function () {

    console.log("WHAT");
    document.getElementById("btn_generate").style.display = "block";
  
  };



