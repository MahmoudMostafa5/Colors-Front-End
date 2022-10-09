$(document).ready(function () 
{


let aboutOffsetTop  = $("#about").offset().top;//603.24 //makan ay element fi elmawk3

$(window).scroll(function () {//t3rfk el user by scroll wla l2

  let wScroll =  $(window).scrollTop();//nzl l7d feen bel scroll //getter

  if(wScroll > aboutOffsetTop - 50)
  {
    $("#main-nav").css("backgroundColor","rgba(0,0,0,0.7)");
    $("#btnUp").fadeIn(500);
  }
  else
  {
    $("#main-nav").css("backgroundColor","transparent");
    $("#btnUp").fadeOut(500);
  }

  })


$("#btnUp").click(function () { 

    $("html,body").animate({scrollTop:0} , 3000)
 })



 $("a[href^='#']").click(function () {
   
     let aHref  =  $(this).attr("href");//ana dost 3la anhy link
     let sectionOffset = $(aHref).offset().top;
     $("html,body").animate({scrollTop:sectionOffset} , 1000)

   });


  $("#sideBarToggle").click(function () { 

    let colorBoxWidth = $("#colorsBox").innerWidth();

      if($("#sideBar").css("left") == "0px")//hwa bara
      {
        $("#sideBar").animate({left:`-${colorBoxWidth}`} , 1000);
      }
      else
      {
        $("#sideBar").animate({left:`0px`} , 1000);
  
      }

   });


   let colorsBox = $(".color-item");
for (let i = 0; i <  colorsBox.length; i++) 
{
  
    let red = Math.round( Math.random()*255 );//
    let green = Math.round( Math.random()*255 );//
    let blue = Math.round( Math.random()*255 );//

    colorsBox.eq(i).css("backgroundColor",`rgb(${red} , ${green} ,${blue})`);
  
}



colorsBox.click(function () {
  let bgColor  =  $(this).css("backgroundColor");
    $(".change,p,h2").css("color",bgColor);

  })
 

  $("#loading").fadeOut(1000 ,function () {
    $("body").css("overflow","auto");

  });

  })

