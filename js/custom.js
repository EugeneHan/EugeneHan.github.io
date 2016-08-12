// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    var width = window.innerWidth;
    if (width <= 768) {
        var links = document.querySelectorAll(".navbar-custom a");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
        var toggle = document.querySelectorAll(".navbar-custom .navbar-toggle .icon-bar");
        for (var j = 0; j < toggle.length; j++) {
            toggle[j].style.backgroundColor = "#FFF"
        }
    } else if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        var links = document.querySelectorAll(".navbar-custom a");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "#FFF"
        }
        var toggle = document.querySelectorAll(".navbar-custom .navbar-toggle .icon-bar");
        for (var j = 0; j < toggle.length; j++) {
            toggle[j].style.backgroundColor = "#FFF"
        }
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        var links = document.querySelectorAll(".navbar-custom a");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "#000"
        }
        var toggle = document.querySelectorAll(".navbar-custom .navbar-toggle .icon-bar");
        for (var j = 0; j < toggle.length; j++) {
            toggle[j].style.backgroundColor = "#000"
        }
    }
}

function whitetext() {
    var width = window.innerWidth;
    if (width <= 768) {
        var links = document.querySelectorAll(".navbar-custom a");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
        var toggle = document.querySelectorAll(".navbar-custom .navbar-toggle .icon-bar");
        for (var j = 0; j < toggle.length; j++) {
            toggle[j].style.backgroundColor = "#FFF"
        }
    }
}

window.onload = whitetext;
$(window).scroll(collapseNavbar);
$(window).resize(whitetext);
$(document).ready(collapseNavbar);
$(document).ready(whitetext);

jQuery(document).keydown(function(e) {
    if (e.keyCode == 27) {
        jQuery("#go-ai").modal("hide");
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});