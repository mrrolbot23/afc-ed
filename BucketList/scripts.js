//UPDATE toggle "completed" class
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//DELETE
$("ul").on("click", "span", function () {
  $(this).parent().remove();
});

//CREATE
$("input").keypress(function(event) {
    let listItem = $(this).val().trim()
    if (event.which === 13 && listItem) {
        let listItem = $(this).val();
        $("ul").append(`<li>${listItem}<span><i class="fa-solid fa-trash-can"></i></span></li>`)
        $(this).val("");
    }
})
