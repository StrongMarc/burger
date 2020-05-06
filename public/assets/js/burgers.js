$(function() {
    // Function to update database to change devoured to true
    $(".devourBtn").on("click", function(event) {
        alert("Devoured it was clicked");
        var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      devoured: newSleep
    };
    console.log(id)
    console.log(newSleep)
    console.log(newSleepState)
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed devoured to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

});