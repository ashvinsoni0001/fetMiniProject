$(document).ready(function(){
        $("#logout").click(function () {
            sessionStorage.clear();
            console.log("success logout");
        })
})

 