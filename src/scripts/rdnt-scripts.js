//SCROLL
function no_scrollbody()
{
    $html = $('html'); 
    $body = $('body'); 
    var initWidth = $body.outerWidth();
    var initHeight = $body.outerHeight();

    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);   

    var marginR = $body.outerWidth()-initWidth;
    var marginB = $body.outerHeight()-initHeight; 
    $body.css({'margin-right': marginR,'margin-bottom': marginB});
}
function scrollbody()
{
    $html = $('html');
    $body = $('body');
    $html.css('overflow', $html.data('previous-overflow'));
    var scrollPosition = $html.data('scroll-position');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

    $body.css({'margin-right': 0, 'margin-bottom': 0});
        $("body, html").css({
                        "overflow-x":'hidden'
        });
}

$(document).ready(function(){

  //HIDE MODAL CONTACT
  $(".modal-contact > i").click(function(){
    $(".modal-contact").closest(".mg-modal-display").fadeOut("fast");
    scrollbody();
  });
  //HIDE MODAL FAQ
  $(".mg-modal-faq > i").click(function(){
    $(".mg-modal-faq").closest(".mg-modal-display").fadeOut("fast");
    scrollbody();
  });
  //HIDE MODAL VENUE
  $(".mg-modal-venue > i").click(function(){
    $(".mg-modal-venue").closest(".mg-modal-display").fadeOut("fast");
    scrollbody();
  });

  $("li.mg-menu-option").click(function(){
    $("ul.mg-main-menu").removeClass('active');
  });
  //TRIGGER MOBILE
  $("i.fas.fa-bars").click(function(){
    if ($("ul.mg-main-menu").hasClass('active')) {
      $("ul.mg-main-menu").removeClass('active');
    }
    else {
      $("ul.mg-main-menu").addClass('active');
    }
  });
});

//SHOW MODAL CONTACT
function modalContact(){
  $(".modal-contact").closest(".mg-modal-display").fadeIn("slow");
  no_scrollbody();
}

//SHOW MODAL FAQ
function openFAQ(){
  $(".mg-modal-faq").closest(".mg-modal-display").fadeIn("slow");
  no_scrollbody();
}

//SHOW MODAL VENUE
function openVenue(){
  $(".mg-modal-venue").closest(".mg-modal-display").fadeIn("slow");
  no_scrollbody();
}

//SHOW SENT CONTACT
function openContactSent(){
  $(".modal-contact-sent").closest(".mg-modal-display").fadeIn("slow");
}

//SHOW SENT CONTACT
function closeContactSent(){
  $(".modal-contact-sent").closest(".mg-modal-display").fadeOut("fast");
}
