$(document).ready(function(){

$("#btneast").on('click', function(){
    $("#east").show();
    $("#west").hide();
    $("#north").hide();
    $("#south").hide();
  

    });


 function east(){

}



$("#btnwest").on('click', function(){
    $("#west").show();
    $("#east").hide();
    $("#north").hide();
    $("#south").hide();

    });


 function west(){

}



$("#btnnorth").on('click', function(){
    $("#north").show();
    $("#east").hide();
    $("#west").hide();
    $("#south").hide();
    

    });


 function north(){

}

$("#btnsouth").on('click', function(){
    $("#south").show();
    $("#east").hide();
    $("#west").hide();
    $("#north").hide();
   
    
    });


 function south(){

}
});




(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

$(window).on('load' , function(){
$('.logistics').each(function(){
    thisVal = $(this).text();
    $(this).parent('.skills').animate({width:thisVal},2000)
});
});
$(window).on('load', function(){
    $('.skill_row_percent_view').each(function(){
        thisVal = $(this).text();
        $(this).parent('.skill_row_percent').animate({width:thisVal},2000)
    });
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}




function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("sub1"),mapProp);
}


$(document).ready(function(){


      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();



 function all(){

}

});

$(document).ready(function(){

$("#kolkata").on('click', function(){
      $("#all").hide();
      $("#kolkata_map").show();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();


    });


 function kolkata_map(){

}

});


$(document).ready(function(){

$("#bihar").on('click', function(){
      $("#all").hide();

   $("#bihar_map").show();
      $("#kolkata_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function bihar_map(){

}

});



$(document).ready(function(){

$("#gujarat").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").show();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function gujarat_map(){

}

});
$(document).ready(function(){

$("#mp").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").show();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function mp_map(){

}

});


$(document).ready(function(){

$("#rajasthan").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").show();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function rajasthan_map(){

}

});

$(document).ready(function(){

$("#hp").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").show();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function hp_map(){

}

});


$(document).ready(function(){

$("#up").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").show();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function up_map(){

}

});

$(document).ready(function(){

$("#haryana").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").show();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function haryana_map(){

}

});

$(document).ready(function(){

$("#maharashtra").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").show();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function maharashtra_map(){

}

});

$(document).ready(function(){

$("#karnataka").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").show();
      $("#tamil_map").hide();
      $("#pondicherry_map").hide();

    });


 function karnataka_map(){

}

});

$(document).ready(function(){

$("#tamil").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").show();
      $("#pondicherry_map").hide();

    });


 function tamil_map(){

}

});

$(document).ready(function(){

$("#pondicherry").on('click', function(){
      $("#all").hide();

      $("#kolkata_map").hide();
      $("#bihar_map").hide();
      $("#gujarat_map").hide();
      $("#mp_map").hide();
      $("#rajasthan_map").hide();
      $("#hp_map").hide();
      $("#up_map").hide();
      $("#haryana_map").hide();
      $("#maharashtra_map").hide();
      $("#karnataka_map").hide();
      $("#tamil_map").hide();
      $("#pondicherry_map").show();

    });


 function pondicherry_map(){

}

});

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
});
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closing")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}