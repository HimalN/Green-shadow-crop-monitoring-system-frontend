import { loadTableField } from "./FieldController.js";
import { loadTableCrop } from "./CropController.js";
import { loadTableVehicle } from "./VehicleController.js";
import { loadTableEquipment } from "./EquipmentController.js";
import { loadTableLog } from "./LogController.js";
import { loadTableStaff } from "./StaffController.js";


// $(document).ready(function () {

    $("#login-submit-btn").on("click", function () {

        const email = $("#login-email").val();
        const password = $("#login-password").val();


        if (!email || !password) {
            alert("Please enter both email and password.");
        }


        var settings = {
            "url": "http://localhost:8081/green-shadow/api/v1/auth/signIn",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "email": email,
              "password": password
            }),
          };
          
        $.ajax(settings)
            .done(function (response) {
                const token = response.token;
                console.log(response);
                if (token) {
                    document.cookie = "token= "+token;
                    console.log("Token received: ", token);
                    alert("Login Success !!");
                    
                    loadTableField()
                    loadTableCrop()
                    loadTableVehicle()
                    loadTableEquipment()
                    loadTableLog()
                    loadTableStaff()

                    $("#navbar").css({ display: "block" });
                    $("#login").css({ display: "none" });
                    $("#signup").css({ display: "none" });
                    $("#dashboard").css({ display: "block" });
                    $("#staff").css({ display: "none" });
                    $("#fielde").css({ display: "none" });
                    $("#crop").css({ display: "none" });
                    $("#vehicle").css({ display: "none" });
                    $("#equipment").css({ display: "none" });
                    $("#log").css({ display: "none" });
                    $("#user").css({ display: "none" });
                    
                } else {
                    alert("Login successful, but token not received.");
                }
            })
            .fail(function (response) {
                alert("Login failed, please try again.");
            });

    });

    $("#register-submit-btn").on("click", function (e) {
        e.preventDefault();

        const email = $("#register-email").val();
        const role = $("#registerStaffRoleSelect option:selected").val();
        const password = $("#register-password").val();

        console.log(email)
        console.log(password)

        // Create a FormData object to handle multipart/form-data
        const formData = new FormData();

        // Append email and password to the FormData object
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role", role);


        if (!role || !email || !password) {
            alert("Please enter both email and password.");
            return;
        }


        $.ajax({
            url: "http://localhost:8081/green-shadow/api/v1/auth/signup",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                const token = response.token;
                if (token) {
                    localStorage.setItem("jwtToken", token);
                    console.log("Token received: ", token);
                    alert("Register Success !!");

                } else {
                    alert("Signup successful, token not recieved.");
                }
            },
            error: function () {
                alert("Signup failed, please try again.");
            },
        });
    });

// });