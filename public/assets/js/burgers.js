$("create-form").addEventListener("submit", (event) => {
    event.preventDefault();
    var newBurger = {
        burger_name: $("entry").val().trim()
    }
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("added new burger");
        location.reload();
    })
})