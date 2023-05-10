
var navIcon = querySelector(".nav__icon");
var navMenu = querySelector(".nav__list__wrapper");

navIcon.addEventListener("click", function(){

	
	navMenu.style.maxHeight =  navMenu.style.maxHeight ? "" : `${navMenu.scrollHeight}px`;
	navMenu.style.overflowY = "auto";

	convertToArray(querySelectorAll(".nav__items__wrapper .active"))
	.map(element => element.classList.remove("active"))
})



window.addEventListener("click", function(e) {
		
	target = e.target;

	var clickedNavList = target.closest(".nav__list");

	var clickedSubMenuList = target.closest(".nav__dropdown__list");

	if (clickedSubMenuList) {

		toggleActiveState(target,"nav__dropdown__list")

	}else if(clickedNavList){

		toggleActiveState(target,"nav__list")
	}

  var generalPanelList =  target.closest(".collapse__panel");

  var clickedPanelTop = target?.closest(".collapse__list__top")

  var panelList = clickedPanelTop?.closest(".collapse__list");

  var activePanel = generalPanelList.querySelector(".collapse__list.active");

  if (clickedPanelTop && panelList != activePanel ) {
      
    var panelBody = clickedPanelTop.nextElementSibling;

    setActivePanel(panelBody)
    
    activePanel.classList.remove("active");

    activePanel.querySelector(".collapse__list__body").style.height = "";

    panelList.classList.add("active")

  }
	
})


window.addEventListener("load", function() {
    
    let panelItems = querySelectorAll(".collapse__list.active");
    panelItems.forEach( panelList => {
      panelBody = panelList?.querySelector(".collapse__list__body");
      setActivePanel(panelBody);
    })
    


    $('.gallery').isotope({
            itemSelector: '.gallery__items'
    });

    var gallery = $('.gallery').isotope();

    $('.gallery__filter__list').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        gallery.isotope({ filter: filterValue });
    });

    querySelector(".gallery__filter__list").addEventListener("click", function(e) {
        var target = e.target;
        var parent = this;
        
        if (target.className.includes("filter__list") && !target.classList.contains("active")) {
            
            parent?.querySelector("span.active")?.classList.remove("active");
            target.classList.add("active");
        }  
    })
    
})

function setActivePanel(panelBody) {

  if (panelBody) {
      panelBody.style.height = panelBody.scrollHeight + "px";
  } 
   
    
}



window.addEventListener("resize", function(){			

		if (window.innerWidth > 991) {
			navMenu.style.overflowY = "";	
		}


})


window.addEventListener("scroll", function() {
    

    /*HEADER SCROLL EFFECT START*/

    var header = querySelector(".header");
    
    var scrollTop = querySelector(".scroll__top");

    setActiveScroll(header, "header__light", 80);

    setActiveScroll(scrollTop, "active", 70);
    

    /*HEADER SCROLL EFFECT END*/



    /*SCROLL TO TOP */




    /**/



})



function setActiveScroll(header, className, position) {
    
    var scrollPosition = window.scrollY;

    if( scrollPosition >= position && !header.classList.contains(className) ){
      
      header.classList.add(className);

    }else if(scrollPosition < position && header.classList.contains(className)){
       header.classList.remove(className);
    }
}



/*SLIDER TWO STARTS*/
  let parallaxOptionTwo = {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      grabCursor:true,
      parallax:true,
      autoplay:{
          delay:1500,
          disableOnInteraction:false
      },
      navigation: {
          nextEl: '.mySwiper1 .swiper-button-next',
          prevEl: '.mySwiper1 .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      on:{
        init: function() {
            
              let swiper = this;

              for (i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i]
                .querySelector(".swiper-bg")
                .setAttribute("data-swiper-parallax", 0.75 * swiper.width)
              } 
        },
        resize:function() {
          this.update();
        }

      }

  }

  swiperTwo = new Swiper(".mySwiper1", parallaxOptionTwo);

  /*For splitting text for animation*/
  Splitting()


/*SLIDER TWO ENDS*/




var portfolioSwiper = new Swiper(".portfolioSwiper",{
     loop:true,
      spaceBetween:60,
      breakpoints:{
        300: {
            slidesPerView: 1,
        }, 
        768: {
            slidesPerView: 1.3,
            centeredSlides:true
        },
        992: {
            slidesPerView: 2,
            centeredSlides:false
        }
      }
})



var swiperTop = querySelector("#swiperTop");

var swiperThumb = querySelector("#swiperThumb");

/*TESTIMONIAL SLIDER STARTS*/

  function countSlides(el){

      var length = el.querySelectorAll(".swiper-slide").length;
      return length + 1;
  }


    var galleryTop = new Swiper('.swiper-top', {
      loop: true,
      loopedSlides: swiperTop && countSlides(swiperTop),
      grabCursor:true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.testimonials .swiper-button-next',
        prevEl: '.testimonials .swiper-button-prev',
      }
    });


    var galleryThumbs = new Swiper('.swiper-thumb', {
        loop: true,
        loopedSlides: swiperThumb && countSlides(swiperThumb),
        centeredSlides: true,
        spaceBetween: 10,
        grabCursor:true,
        slideToClickedSlide: true,
        slidesPerView: 3
  
    }); 


// ALTERNATIVE SOLUTION to get the active thumb centered, it doesn't work on Safari if sliding backwards
galleryThumbs.controller.control = galleryTop;
galleryTop.controller.control = galleryThumbs;


/*TESTIMONIAL SLIDER ENDS*/


/*ABOUT CREATIVE SLIDER ONE STARTS*/

 var aboutSwiperOne = new Swiper(".aboutSlidesOne", {
        spaceBetween: 30,
        effect: "fade",
        slidesPerView: 1,
        speed:800,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        }
      });

  var aboutSwiperTwo = new Swiper(".aboutSlidesTwo", {
        spaceBetween: 30,
        slidesPerView: 1,
        speed:1000,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
         navigation: {
          nextEl: '.about__swiper__control .swiper-button-prev',
          prevEl: '.about__swiper__control .swiper-button-next',
        }
      });

aboutSwiperOne.controller.control = aboutSwiperTwo;
aboutSwiperTwo.controller.control = aboutSwiperOne;

/*ABOUT CREATIVE SLIDER ONE ENDS*/


var corporateSlides = new Swiper(".corporateSlides", {
        spaceBetween: 30,
        slidesPerView: 1,
        speed:1000,
        loop: true, 
  });


var aboutPartnerSwiper =  new Swiper(".aboutPartnerSwiper", {
  speed:1000,
  loop: true,
   breakpoints:{
        300: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5,
        }
    }

});



$('.parallaxie').parallaxie({
        speed: 0.5,
        size: "cover"
    });


$(".youtubePopup").YouTubePopUp();



  /*SCROLL TO TOP EFFECT START*/
  
  progressPath = document.querySelector('.scroll__top circle');

  var pathLength = progressPath.getTotalLength();
    
    progressPath.style.strokeDasharray = progressPath.style.strokeDashoffset  = pathLength;

    window.addEventListener("scroll", function(e){

      var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      var scrollBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

      let scrollPercent = Math.floor((scrollBottom * 100) / scrollHeight);

      progressPath.style.strokeDashoffset = (scrollPercent/ 100) * pathLength

  })

/*SCROLL TO TOP EFFECT START*/





var wow = new WOW({
    animateClass: 'animated',
    offset: 100
})

wow.init();