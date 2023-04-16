let musicData = "";
$(document).ready(function(){
    let content ="";

    $.ajax({
        url:"http://localhost:3000/music",
        type:"get",
        success:(response,status)=>{
            console.log(response);
            musicData=response;
            response.forEach(element => {
                          content += `
                          
                          <div class="col d-flex justify-content-evenly">
                          <div class="card" style="width: 18rem;">
                          <img src="${element.poster}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title" id="movieName">${element.title}</h5>
                           <a href="#player" id="watchButton" class="btn btn-danger" onClick="playVideo(${element.id})">Play Now</a>&nbsp;
                           <a href="#player" id="watchButton" class="btn btn-danger" onClick="playVideo(${element.id})"><span class="bi bi-heart"></span></a>
                           </div>
                          </div>
                          </div>
                        
                        
                          `
                        console.log("Added");
            });
            $(".row").html(content);
        }
    })
})

function playVideo(id){
    console.log(id);
    let music = musicData.find(mov => mov.id == id);
    console.log(music);
    let videoUrl = music.url;
    console.log(videoUrl);
    document.getElementById("player").setAttribute("src", videoUrl);
}