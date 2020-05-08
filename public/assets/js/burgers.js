$(function() {
    // EventHandler to update database to change devoured to true
    $(".devourBtn").on("click", function(event) {
      // id for ajax route
      var id = $(this).data("id");
      var burgerGone = $(this).data("burgergone");

      // object for ajax
      var tasty = {
        devoured: burgerGone
      };
      console.log(id)  // see browser
      console.log(burgerGone)
      console.log(tasty)
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: tasty
      }).then(
        function() {
          console.log("changed devoured to", burgerGone);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // EventHandler to add burger 
  $("#submitBtn").on("click", function(event) {
    event.preventDefault();
    var eat = false;

    // object for ajax
    var addDaBurger = {
      // name: "Jalopeno Burger",
      name: $("#burgerInput").val().trim(),
      devoured: eat
    };

    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: addDaBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});