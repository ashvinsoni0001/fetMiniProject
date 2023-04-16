let movieData = "";
$(document).ready(function(){ 
    let content ="";

    $.ajax({
        url:"http://localhost:3000/movies",
        type:"get",
        success:(response,status)=>{
         
            console.log(response);
            movieData=response;
            response.forEach(element => {
               
                        //     content += `
                        //     <div class="movies-list">
                                
                        //     <div class="card-container">
                        //     <div class="card">
                        //     <img src="${element.poster}" class="card-img" alt="">
                        //         <div class="card-body">
                        //         <h2 class="name" id="movieName">${element.title}</h2>
                        //         <a href="#player" id="watchButton" class="watchlist-btn" onClick="playVideo(${element.id})">Play Now</a>
                        //         </div>
                        //     </div>
                        //     </div>
                        //     </div>`
                        //   console.log("Added");


                          content += `
                          
                          <div class="col d-flex justify-content-evenly">
                          <div class="card" style="width: 18rem;">
                          <img src="${element.poster}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title" id="movieName">${element.title}</h5>
                           <a href="#player" id="watchButton" class="btn btn-danger" onClick="playVideo(${element.id})">Play Now</a>&nbsp;
                           <a href="#player" id="watchButton" class="btn btn-danger" onClick="addToFavorite(${element.id})"><span class="bi bi-heart"></span></a>
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
    let movie = movieData.find(mov => mov.id == id);
    console.log(movie);
    let videoUrl = movie.url;
     let movieDesc=movie.desc;
    console.log(videoUrl);
    window.location.replace("../html/video.html");
    let nameMovie=movie.title;
    let yearMovie=movie.year;
 
    
    sessionStorage.setItem("videoUrl",videoUrl);
     sessionStorage.setItem("movieDesc",movieDesc);
     sessionStorage.setItem("nameMovie",nameMovie);
     sessionStorage.setItem("yearMovie",yearMovie);

     

   
}
function addToFavorite(id){
  $.ajax({
     url:"http://localhost:3000/movies/" +id,
    type:'get',
    success:function(response){
      $.ajax({
        url:"http://localhost:3000/favMovie",
        type:"post",
        data:{
          "email":sessionStorage.getItem("email"),
          "personId":sessionStorage.getItem("val"),
          "movid":parseInt(response.id),
          "title":response.title,
          "url":response.url,
          "poster":response.poster
        },
        error:function(){
          console.log("error");
          
        }
      })

        }
      })
    }
          
    $(document).ready(function(){
      let videoUrl=sessionStorage.getItem("videoUrl");
      $("#show").attr("src",videoUrl);
      let movieDesc=sessionStorage.getItem("movieDesc");
      $("#description").html(movieDesc);
      let nameMovie=sessionStorage.getItem("nameMovie");
      $("#nameMovie").html(nameMovie);
      let yearMovie=sessionStorage.getItem("yearMovie");
      $("#yearMovie").html(yearMovie);

  })
                
            