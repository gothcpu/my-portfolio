$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);

    });

    $(".items").isotope({
        filter: '*', 
        animationOptions: {
            duration: 1500, 
            easing: 'linear',
            queue: false, 
        }
    });
});
$(document).ready(function() {
    let contactForm = document.getElementById("contact-form");
    let contactBtn = document.querySelector(".contact-btn");
    let subHead = document.querySelector(".subHeading");
    let resumeBtn = document.querySelector(".resume-btn");
    console.log(resumeBtn)
    // https://docs.google.com/document/d/1F6AalTDohm6_qXpmpwclq1sTCdOl3_-nL-Rp_zUwrEw/edit?usp=sharing

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);

    $('#slides').superslides({
        animation: 'fade', 
        play: 5000
    });

    let typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Software Developer.", "Student.", "Game Developer.", "Game Enjoyer.", "Artist.", "Social Advocate.", "He Hikes Sometimes Too.", "Also A Big Star Wars Fan.", "Pretty Cool Guy."],
        typeSpeed: 70, 
        loop: true, 
        smartBackspace: true,
        startDelay: 1000, 
        showCursor: false, 
    });

    $('.owl-carousel').owlCarousel({
	    loop:true,
        nav:true,
        items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
            938:{
	            items:4
	        }
	    }
	});

   


    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff', 
                trackColor: false,
                scaleColor: false, 
                lineWidth: 4, 
                size: 152, 
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent))
                } 
            });

        }

    });


    contactBtn.addEventListener("click", () => {
        if (contactForm.style.display == "none") {
            contactForm.style.display = "block";
            subHead.scrollIntoView();
        } else {
            contactForm.style.display = "none";
            contactBtn.scrollIntoView();
        }

    })

   $("[data-fancybox]").fancybox({
        maxWidth    : 500,
        maxHeight   : 400,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
   });


   $("#filters a").click(function(){

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        let selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector, 
            animationOptions: {
                duration: 1500, 
                easing: 'linear',
                queue: false, 
            }
        });

        return false;

   });

   $("#navigation li a").click(function(e){
       e.preventDefault();;
       let targetElement = $(this).attr("href");
       let targetPosition =$(targetElement).offset().top;
       $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
   });

   const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		let body = $("body");

		if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
            body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}



    let form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for the message! Expect a response in roughly 48 hours.";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form."
      });
      contactForm.style.display = "none";
    }
    form.addEventListener("submit", handleSubmit)

}); 