$(document).ready(function () {
    var recordIndex = undefined;

    loadTableVehicle()

    let vehicleCodeError = true;
    let licenseNumberError = true;
    let vehicleCategoryError = true;
    let vehicleFuelTypeError = true;
    let vehicleStatusError = true;
    let vehicleStaffError = true;
    let vehicleRemarksError = true;

    function loadTableVehicle() {
        $('#vehicle-table').empty();
        console.log("Loading table...");

        $.ajax({
            url: "http://localhost:8081/green-shadow/api/v1/vehicle",
            method: "GET",
            success: function (results) {
                $('#vehicle-table').empty();
                results.forEach(function (post) {
                    var record = `<tr>
                                    <td>${post.vehicleCode}</td>     
                                    <td>${post.licensePlate}</td>
                                    <td>${post.category}</td>     
                                    <td>${post.fuelType}</td>
                                    <td>${post.status}</td>     
                                    <td>${post.staffId}</td>
                                    <td>${post.remarks}</td>
                                </tr>`;

                    $('#vehicle-table').append(record);
                });
                $('#vehicleCount').text(results.length);
            },
            error: function (error) {
                console.log(error);
                alert("An error occurred while fetching the posts.");
            }
        });
    }

    $("#add-vehicle-btn").click(function () {
        validateVehicleCode()
        validateLicenseNumber()
        validateVehicleCategory()
        validateVehicleFuelType()
        validateVehicleStatus()
        validateVehicleStaff()
        validateVehicleRemarks()
        if (!vehicleCodeError === true && licenseNumberError === true && vehicleCategoryError === true && vehicleFuelTypeError === true && vehicleStatusError === true && vehicleStaffError === true && vehicleRemarksError === true) {
            var vehicleCode = $("#vehicleCode").val();
            var vehicleLicenseNumber = $("#vehicleLicenseNumber").val();
            var vehicleCategory = $("#vehicleCategory").val();
            var vehicleFuelType = $("#vehicleFuelType option:selected").text();
            var vehicleStatus = $("#vehicleStatus option:selected").text();
            var vehicleStaff = $("#vehicleStaffSelectID option:selected").text();
            var vehicleRemarks = $("#vehicleRemarks").val();

            $.ajax({
                url: "http://localhost:8081/green-shadow/api/v1/vehicle/"+vehicleCode,
                type: "GET",
                headers: {"Content-Type": "application/json"},
                success: (res) => {
                    if (res && JSON.stringify(res).toLowerCase().includes("not found")) {
                        var form = new FormData();
                        form.append("vehicleCode", vehicleCode);
                        form.append("licensePlate", vehicleLicenseNumber);
                        form.append("category", vehicleCategory);
                        form.append("fuelType", vehicleFuelType);
                        form.append("status", vehicleStatus);
                        form.append("staff", vehicleStaff);
                        form.append("remarks", vehicleRemarks);

                        var settings = {
                            "url": "http://localhost:8081/green-shadow/api/v1/vehicle",
                            "method": "POST",
                            "timeout": 0,
                            "processData": false,
                            "mimeType": "multipart/form-data",
                            "contentType": false,
                            "data": form
                        };

                        $.ajax(settings).done(function (response) {
                            loadTableVehicle();
                            alert("Successfully added the vehicle!");
                            console.log("Response:", response);
                        }).fail(function (error) {
                            alert("Failed to add the vehicle!");
                            console.error("Error:", error);
                        });
                    } else{
                        console.log("vehicle already exists");
                    }
                },
                error: (res) => {
                    console.error(res);
                }
            });



            // Debug logs
            console.log("Vehicle Code:", vehicleCode);
            console.log("Vehicle License Number:", vehicleLicenseNumber);
            console.log("Vehicle Category:", vehicleCategory);
            console.log("Vehicle Fuel Type:", vehicleFuelType);
            console.log("Vehicle Status:", vehicleStatus);
            console.log("Vehicle Staff:", vehicleStaff);
            console.log("Vehicle Remarks:", vehicleRemarks);

        }
    });
})

