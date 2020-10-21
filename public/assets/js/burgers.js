$(function() {
    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#entry").val().trim()
        }
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("added new burger");
            location.reload();
        })
    })
    $(".devour").on("click", (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute("data-id");
        $.ajax("api/burgers/" + id, {
            type: "PUT"
        }).then(() => {
            console.log("devoured burger");
            location.reload();
        })
    })
})