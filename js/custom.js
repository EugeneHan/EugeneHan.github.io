// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        var links = document.querySelectorAll(".navbar-custom a");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "#FFF"
        }
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        var links = document.querySelectorAll(".navbar-custom a");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "#000"
        }
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);


// $((document).on($(".navbar-header").css("background-color") == "#000") function(e) {
//     alert('detected'); 
//     var links = document.querySelectorAll(".navbar-custom a");
//     for (var i = 0; i < links.length; i++) {
//         links[i].style.color = "#FFF"
//     }
// });


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});