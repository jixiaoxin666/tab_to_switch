$("#notice_tit li").click(function() {
  $("#notice_tit li").removeClass("active");
  $(this).addClass("active");
  id = $(this).data(id);
  $(".mod").eq(id-1).hide();
  $(".mod").eq(id-1).show();
})