hideScene();

function hideScene(){
    document.getElementById("navbar").style.display="block";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";

}

document.getElementById("signup-lock").onclick = function() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
};

document.getElementById("login-lock").onclick = function() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
};


