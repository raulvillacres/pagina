jQuery(document).ready(function(){
  var enlace = jQuery(".hambur").attr("href");

jQuery(".hambur").click(function(e){
   e.preventDefault();
   abrirmenu();
});

jQuery("header .container nav a").click(function(){
  var enlace = jQuery(this).attr("href");
  abrirmenu();
  jQuery("html,body").animate({
    "scrollTop" : jQuery(enlace).position().top
  },300,function(){
    
  })
});
  /*jQuery(".hambur").attr("href","http://hola.com");

  jQuery(".hambur").addclass("open");
  //jQuery(".hambur").removeclass("hambur");

  if(jQuery(".hambur").hasClass("open") == true)
  {
    console.log("hola");
  }else{
    console.log("adios");
  }*/
});


function abrirmenu()
{
  jQuery("header").toggleClass("open");
  jQuery("header .container .hambur i").toggleClass("fa-times");
  jQuery("header .container nav").toggleClass("open");
}
