$(document).ready(function () {
  $("#mnt1").click(function () {
    $("#mnt1").addClass("selectedMnt");
    $("#mnt2").removeClass("selectedMnt");
    $(".mnt1").hide();
    $("#display2").hide();
    $("#display1").show();
  });
  $("#mnt2").click(function () {
    $("#mnt2").addClass("selectedMnt");
    $("#mnt1").removeClass("selectedMnt");
    $("#display1").hide();
    $("#display2").show();
  });

  $("#slideshow ").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,

    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
function burger1Click() {
  var x = document.getElementById("burgerLink1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function burger2Click() {
  var x = document.getElementById("burgerLink2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
