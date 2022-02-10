$(document).ready(function () {
  $(".filter-button").click(function () {
    const value = $(this).attr("data-filter");
    $(".filter-button").removeClass("active");
    $(this).addClass("active");
    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("2000");
      $(".filter")
        .filter("." + value)
        .show("2000");
    }
  });
 
  //     if ($(".filter-button").removeClass("active")) {
  // $(this).removeClass("active");
  // }
  // $(this).addClass("active");
});
