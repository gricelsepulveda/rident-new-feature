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


  //ACTIVE VENUES 
  $('.rdnt-new-nav-venues-li').click(function(){
    $('.rdnt-new-nav-venues-li').removeClass('active');
    $(this).addClass('active');
    var activeTab = $(this).index() + 1;
    var activateVenue = $('.rdnt-venues-new-section-venue:nth-of-type(' + activeTab + ')')
    $(".rdnt-venues-new-section-venue").removeClass('active');
    $(activateVenue).addClass('active');
  })

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

  var mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.outerWidth < 480 ;

  //IF ITEMS ARE 4 OR LESS WIDTH IS DEFAULT
  if ($('.rdnt-partner-brand-box:last-of-type').index() <=3) {
    //DETECT MOBILE OR RESPONSIVE 
    if(mobileCheck) {
      $('.rdnt-rotator-box-img').width(480);
    }
    else {
      $('.rdnt-rotator-box-img').width(480);
    }
  }
  //ELSE INCREASE ROTATOR WIDTH IN 120PX BY EACH ITEM FOUND
  else {
    var widthRotator = $('.rdnt-rotator-box-img').width();
    var multiplyWidth = $('.rdnt-partner-brand-box:last-of-type').index() + 1;
    if (mobileCheck) {
      var finalWidth = multiplyWidth * 80;
    }
    else {
      var finalWidth = multiplyWidth * 120;
    }
    

    $('.rdnt-rotator-box-img').width(finalWidth);
  }
  
  /*
  var i;
  for (i = 0; i < timesRotatorFinal; i++) {
    $('.rdnt-rotator-box-img').animate({marginLeft: '-=480px'}, 500, function(){

      $('.rdnt-rotator-box-img').animate({marginLeft: '0px'});
    });
  }*/ 

  function moveBrands() {
    //GET THE MAGIC NUMBERS
    var mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.outerWidth < 480 ;
    if (mobileCheck) {
      var rotatorWidth = $('.rdnt-rotator-box-img').width() - 320;
    }
    else {
      var rotatorWidth = $('.rdnt-rotator-box-img').width() - 480;
    }
    var marginLeftPx = $('.rdnt-rotator-box-img').css('margin-left');
    var marginLeftMinus = parseInt(marginLeftPx);
    var marginLeft = Math.abs(marginLeftMinus);
    //CONDITIONAL CYCLE
    if (marginLeft < rotatorWidth) {
      if (mobileCheck) {
        $('.rdnt-rotator-box-img').animate({marginLeft: '-=320px'}, 500);
      }
      else {
        $('.rdnt-rotator-box-img').animate({marginLeft: '-=480px'}, 500);
      }
    }
    else {
      $('.rdnt-rotator-box-img').animate({marginLeft: '0'}, 500);
    }
  }
  setInterval(moveBrands, 5000);
});

function closeNewVenueSelectionModal(){
  $(".rdnt-venue-new-modal-bg").fadeOut("slow");
  $(".venue-selection-new-modal").addClass("display-none");
}

function closeNewVenueSelectionReserveModal(){
  $(".rdnt-venue-new-modal-bg").fadeOut("slow");
  $(".reserve-modal").addClass("display-none");
}