$(function(){let myIFRAME=$(".iframe-class");let windowWidth=0;function setIFrameSize(){{let parentDivWidth=myIFRAME.parent().width(),newHeight=parentDivWidth*(500/700);var r;600<newHeight&&(r=600/newHeight,newHeight*=r,parentDivWidth*=r),myIFRAME.addClass("iframe-class-resize").css({height:newHeight,width:parentDivWidth})}}{let resizeTimer=null;resizeTimer=setTimeout(function(){windowWidth=$(window).width(),setIFrameSize(),clearTimeout(resizeTimer)},75)}{let resizeTimer=null;$(window).resize(function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(function(){windowWidth=$(window).width(),setIFrameSize()},75)}).trigger("click")}});