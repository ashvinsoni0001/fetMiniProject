let email=sessionStorage.getItem("email");
$(document).ready(function(){
    $.ajax({
        url:"http://localhost:3000/favMovie",
        type:'get',
        success:(response)=> {
            let x=[];
            for(const a of response) {
                x.push(parseInt(a.movid));
            }
            let array=[... new Set(x)];
            let content="";
            for(const p of array)
            {
                for(const a of response){
                    if((p==a.movid) && (a.email === email)) {
                        content+=`<div class="col d-flex justify-content-evenly">
                        <div class="card" style="width: 18rem;">
                        <img src="${a.poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title" id="movieName">${a.title}</h5>
                         <a href="#player" id="watchButton" class="btn btn-danger" onClick="playVideo(${a.id})">Play Now</a>&nbsp;
                         </div>
                         </div>
                       </div>
                       
                         `
                    }
                }
            }
                $(".row").html(content);
            },
         

        

    });
});