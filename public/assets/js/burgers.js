// $(document).ready(function () {

//   $(".devour-form").on("submit", function (event) {
//     event.preventDefault();

//     var burger_id = $(this).children(".burger_id").val();
//     console.log(burger_id);
//     $.ajax({
//       method: "PUT",
//       url: "/burgers/" + burger_id
//     }).then(function (data) {
//       // reload page to display devoured burger in proper column
//       location.reload();
//     });

//   });
// });

$(function () {

  $('.submit-button').on('click', function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('.burger-input').val().trim(),
      devoured: 0
    }
    console.log(newBurger);

    // send the POST request
    $.ajax('/api/burgers/', {
      type: 'POST',
      data: newBurger
    }).then(
      function () {
        console.log('created new burger');
        location.reload();
      }
    )
  })

  $('.devour-button').on('click', function (event) {

    var id = $(event.target).data('id');
    console.log(id);

    var newDevourState = {
      devoured: true
    };

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newDevourState
    }).then(
      function () {
        console.log(`changed devoured to ${newDevourState}`);
        location.reload();
      }
    )
  })
}); 