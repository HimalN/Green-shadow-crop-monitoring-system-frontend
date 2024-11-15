$("#login").css({ display: "block" });
$("#signup").css({ display: "none" });
$("#navbar").css({ display: "none" });
$("#dashboard").css({ display: "none" });
$("#field").css({ display: "none" });
$("#crop").css({ display: "none" });
$("#staff").css({ display: "none" });
$("#vehicle").css({ display: "none" });
$("#equipment").css({ display: "none" });
$("#log").css({ display: "none" });
$("#user").css({ display: "none" });

$('#submit-button').on('click', () => {
    $("#login").css({ display: "none" });
    $("#signup").css({ display: "none" });
    $("#navbar").css({ display: "block" });
    $("#dashboard").css({ display: "block" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#signup-submit-button').on('click', () => {
    $("#login").css({ display: "none" });
    $("#signup").css({ display: "none" });
    $("#navbar").css({ display: "block" });
    $("#dashboard").css({ display: "block" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#logout').on('click', () =>{
    $("#login").css({ display: "block" });
    $("#signup").css({ display: "none" });
    $("#navbar").css({ display: "none" });
    $("#dashboard").css({ display: "none" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#nav-dashboard').on('click', () =>{
    $("#dashboard").css({ display: "block" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#nav-field').on('click', () =>{
    $("#dashboard").css({ display: "none" });
    $("#field").css({ display: "block" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#nav-crop').on('click', () =>{
    $("#dashboard").css({ display: "none" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "block" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#nav-staff').on('click', () =>{
    $("#dashboard").css({ display: "none" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "block" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#nav-vehicle').on('click', () =>{
    $("#dashboard").css({ display: "none" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "block" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#nav-equipment').on('click', () =>{
    $("#dashboard").css({ display: "none" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "block" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "none" });
});
$('#nav-log').on('click', () =>{
    $("#dashboard").css({ display: "none" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "block" });
    $("#user").css({ display: "none" });
});
$('#nav-user').on('click', () =>{
    $("#dashboard").css({ display: "none" });
    $("#field").css({ display: "none" });
    $("#crop").css({ display: "none" });
    $("#staff").css({ display: "none" });
    $("#vehicle").css({ display: "none" });
    $("#equipment").css({ display: "none" });
    $("#log").css({ display: "none" });
    $("#user").css({ display: "block" });
});
document.getElementById("signup-lock").onclick = function() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
};

document.getElementById("login-lock").onclick = function() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
};



