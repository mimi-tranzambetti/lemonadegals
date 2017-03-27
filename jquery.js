$(document).ready(function(){
    
    
$("#dumphover").on("mouseover", function(){
        $(this).attr("src","productshot/trumpflower.jpg").fadeIn();
	});
    
    
    
    
     $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 150) { // check if user scrolled more than 50 from top of the browser window
          $(".header").css("background-color", "RGBA(171,226,224,0.8)"); // if yes, then change the color of header to white
           $(".header").css("height", "25px");
            $(".header").css("box-shadow", "10px 0px 10px gray");
           $(".navlinks a").css("color", "#458989");
            $(".navlinks a").css("margin", "0px 10px");
            $(".logo").css("height", "30px");
            $(".logo").css("float", "left");
            $(".navbar").css("float", "right");
            
            
        } else {
          $(".header").css("background-color", "transparent");
$(".header").css("box-shadow", "0px 0px 0px white");
            $(".header").css("height", "50px");
           $(".navlinks a").css("color", "white");
            $(".navlinks a").css("margin", "15px 10px");
            $(".logo").css("float", "left");
            $(".logo").css("height", "50px");
            $(".navbar").css("float", "right");
        
        }
      });
    
});

