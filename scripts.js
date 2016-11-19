//
// $(document).ready(function() {
//
//   $.ajax({
//       type: "GET",
//       url: "https://trektravel.herokuapp.com/pets",
//       cache: false,
//       dataType: "jsonp",
//       success: function(data) {
//         // console.log(data);
//
//         $.each(data, function(index, value) {
//           // var v = JSON.parse(value);
//           console.log(index);
//           $("<li>" + value.name + "</li>").appendTo($("#pets"));
//         });
//       }
//     });
//  });




 // $(document).ready(function() {
 //
 //   $.ajax({
 //       type: "GET",
 //       url: "https://petdibs.herokuapp.com/pets/1",
 //       cache: false,
 //       dataType: "jsonp",
 //       success: function(data) {
 //         // console.log(data);
 //
 //           // var v = JSON.parse(value);
 //           console.log(data);
 //           $("<h3>" + data.name + "</h3><br><h4>" + data.age + "</h4>").appendTo($("#pets"));
 //       }
 //     });
 //  });


 $(document).ready(function(){
  $('form').submit(function(evt) {

    evt.preventDefault();
    var url = $(this).attr("action");
    var formData = $(this).serialize();

    $.ajax(url, {
      data: formData,
      type: "POST",
      crossDomain: true,
      dataType: "jsonp",
      success: function(response){
        console.log(response);
        $('#message').html('<p> Pet added! </p>')
      },
      error: function (xhr, status) {
          alert(formData);
      }
    });

  });
});
