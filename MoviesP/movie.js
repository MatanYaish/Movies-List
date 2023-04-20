var base = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';
var apikey = 'JtoqAANtDZP1xsaRtcBNlAKJ3BAZbPQF';

//console.log(base + "api-key=" + apikey + "&query=" + "rambo");

$(document).ready(function () {
  $('.btn').click(function () {
    $('.container').empty();
    if ($('.input').val() == '') {
      alert('Please type a movie name');
    } else {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        data: {
          'api-key': apikey,
          query: $('.input').val(),
        },
        url: base,
        success: function (data) {
          //console.log(data.results[0].display_title);
          //$("p").text(data.results[0].display_title);

          // for(var i = 0; i < data.results.length; i++){
          //     var newName = $("<p>" + data.results[i].display_title + "</p>");
          //     $(".container").append(newName);
          // }

          for (var i = 0; i < data.results.length; i++) {
            console.log(
              "<a href='" +
                data.results[i].link.url +
                "'>" +
                data.results[i].display_title +
                ' </a>'
            );
            var newName = $(
              "<a href='" +
                data.results[i].link.url +
                "' target='_blank'>" +
                data.results[i].display_title +
                ' </a><br><br>'
            );
            $('.container').append(newName);
          }

          // for(var i = 0; i < data.results.length; i++){
          //     if(data.results[i].multimedia != null){
          //         var newImg = $("<img src='" + data.results[i].multimedia.src  + "'><br><br>");
          //         $(".container").append(newImg);
          //     }
          // }
        },
      });
    }
  });
});
