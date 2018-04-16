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

$(document).ready(function(){
  $('.rdnt-partner-brand-box').click(function(){
    //MOVE ACTIVE INDICATOR
    $('.rdnt-partner-brand-box').removeClass('active');
    $(this).addClass('active');
    //SET PARAGRAPH TO ACTIVE
    var brandClicked = $(this).index();
    var textShow = $('.rdnt-brand-text')[brandClicked];
    $('.rdnt-brand-text').removeClass('active');
    $(textShow).addClass('active');
  });

  function brandRotator(){

    //IF ITEMS ARE 4 OR LESS WIDTH IS DEFAULT
    if ($('.rdnt-partner-brand-box:last-of-type').index() <=3) {
      $('.rdnt-rotator-box-img').width(480);
    }
    //ELSE INCREASE ROTATOR WIDTH IN 120PX BY EACH ITEM FOUND
    else {
      var widthRotator = $('.rdnt-rotator-box-img').width();
      var multiplyWidth = $('.rdnt-partner-brand-box:last-of-type').index() + 1;
      var finalWidth = multiplyWidth * 120;
      $('.rdnt-rotator-box-img').width(finalWidth);
    }


    //ROTATE
    var items = $('.rdnt-partner-brand-box:last-of-type').index();
    var timesRotator = (items / 4);
    var timesRotatorFinal = Math.ceil(timesRotator);

    var i;
    for (i = 0; i > timesRotatorFinal; i++) {
      $('.rdnt-rotator-box-img').animate({marginLeft: '-480px'}, 500);
    }
    
  }
  brandRotator();
});

