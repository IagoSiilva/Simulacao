$(document).ready(function () {
  $(".siga-nos").hide();
  $(".menu").hide();

  $(".nav-menu").click(function () {
    $(".menu").toggle("slow");
    $(".siga-nos").hide();
  });
  $(".nav-siga-nos").click(function () {
    $(".siga-nos").toggle("slow");
    $(".menu").hide();
  });
  $(".fechar").on("click", (e) => {
    $(e.target).fadeOut("slow");
    $(".propaganda").fadeOut("slow");
  });

  var img1 = $(".img1");
  var img2 = $(".img2");
  var img3 = $(".img3");
  var img4 = $(".img4");

  var mini1 = $("mini1");
  var mini2 = $("mini2");
  var mini3 = $("mini3");
  var mini4 = $("mini4");

  img2.hide();
  img3.hide();
  img4.hide();

  $(".mini1").on("click", () => {
    img1.show();
    img2.hide();
    img3.hide();
    img4.hide();

    mini1.addClass("selected");
    mini2.removeClass("selected");
    mini3.removeClass("selected");
    mini4.removeClass("selected");
  });

  $(".mini2").on("click", () => {
    img1.hide();
    img2.show();
    img3.hide();
    img4.hide();

    mini1.addClass("selected");
    mini2.removeClass("selected");
    mini3.removeClass("selected");
    mini4.removeClass("selected");
  });
  $(".mini3").on("click", () => {
    img1.hide();
    img2.hide();
    img3.show();
    img4.hide();

    mini1.removeClass("selected");
    mini2.removeClass("selected");
    mini3.addClass("selected");
    mini4.removeClass("selected");
  });
  $(".mini4").on("click", () => {
    img1.hide();
    img2.hide();
    img3.hide();
    img4.show();

    mini1.removeClass("selected");
    mini2.removeClass("selected");
    mini3.removeClass("selected");
    mini4.addClass("selected");
  });
});
