// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {

      const id = $(this).data("id");
      const eaten = $(this).data("eaten");
  
      const eatenState = {
        devoured: eaten
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenState
      }).then(
        function() {
          console.log("changed devoured to", eaten);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });

    $(".delete-burger").on("click", function(event) {
      const id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });