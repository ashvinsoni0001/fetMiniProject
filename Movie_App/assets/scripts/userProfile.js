$(document).ready(function () {

    $("#confirm-btn").click(function () {

        let sessionID = sessionStorage.getItem("val");
        $.ajax({
            url: "http://localhost:3000/array/" + sessionID,
            type: "put",
            data: {

                name: $("#userName").val(),
                city: $("#userCity").val(),
                email: $("#userEmail").val(),
                password: $("#userPassword").val()
            },
            success: function (response, status, xhr) {
                console.log(response);
            },
            error: function (status) {
                alert("error" + status);
            },
        });
    });
});

function showProfile() {

    let sessionID =  sessionStorage.getItem("val") ;
    alert(sessionID);
    $.ajax({
        url: "http://localhost:3000/array/" + sessionID,
        type: "get",
        success: function (response, status, xhr) {
            console.log(response);
            $("#user").val(response.id);
            $("#userName").val(response.name);
            $("#userCity").val(response.city);
            $("#userEmail").val(response.email);
            $("#userPassword").val(response.password);
            $("#userPassword").prop("disabled", true);
            $("#userName").prop("disabled", true);
            $("#userCity").prop("disabled", true);
            $("#userEmail").prop("disabled", true);

        },
        error: function (status) {
            alert("error" + status);
        },
    });
}

function editProfile() {

    let sessionID = sessionStorage.getItem("val");
    $.ajax({

        url: "http://localhost:3000/array/" + sessionID,
        type: "get",
        success: function (response, status, xhr) {
            console.log(response);

            $("#userPassword").prop("disabled", false);
            $("#userName").prop("disabled", false);
            $("#userCity").prop("disabled", false);
            $("#userEmail").prop("disabled", false);


        },
        error: function (status) {
            alert("error" + status);
        },
    });
}