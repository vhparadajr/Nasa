// user can input

// user clicks button search api for photo of user date
$(document).ready(function(){

  // $("button").on("click", function(){
  //   var date = $("#date").val();
  //   var source = "https://api.nasa.gov/planetary/apod?api_key=G1HURmLK4MdyhAPtU0Cze9d9asWjfNuTy2WRpYsW&date=" + date;
  //   // alert(mez);
  //   $.get(source, function(res){
  //     $("img").attr("src",res.hdurl);
  //   });
  // });

  $("#button").on("click", function(){

  var date = $("#date").val()
  var apiKey = "19bDUl7xNf4xU7WyuFHflwRuLF4EstBCziflq6c2";
  var apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date;

  $.ajax({
    url: apiURL,
    // Work with the response
    success: function(response){
      // console.log( response ); // server response
      console.log(response.hdurl)

      $("img").attr('src',response.hdurl)

    },
    error: function(r){
      console.log(r)
    }
    });
  });








});
