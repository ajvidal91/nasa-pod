// function myData(data) {
//   $("ul").append('<li>' + data + '<li>');
// }
    $(document).ready(function() {
      $("#submit").on("click", function(e) {
        //var month = $("#month").val();
        var date = $("#date").val();

        // https: //api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY

        var datarequest = "https://api.nasa.gov/planetary/apod?api_key=r1B2ZmaDaNiabwqntIdmZFHSaAjvZTlhbNJAP805" + "&date=";

        $.ajax({  //the method of exchanging data with the server
          url: datarequest + date,
          success: function(response) {
            console.log(response); // server response
            console.log(response.url);
            var img = $("img");
            img.attr("src", response.url);
          },
          error: function(r) {
            console.log(r); //server response

          }

        });

      });

      });
