$(function() {
    // Function to update database to change devoured to true
    $(".devourBtn").on("click", function(event) {
        alert("Devoured it was clicked");
        var id = $(this).data("id");
    var burgerGone = $(this).data("burgergone");

    var tasty = {
      devoured: burgerGone
    };
    console.log(id)
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

});