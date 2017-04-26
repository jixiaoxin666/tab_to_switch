$(".tit").click(function() {
    $(".tit").removeClass("active");
    $(this).addClass("active");
    id = $(this).data("id");
    $(".mod").hide();
    $(".mod").eq(id-1).show();
})