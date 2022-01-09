var mouseX = 0, mouseY = 0, limitX = 0, limitY = 0;
$(window).mousemove(function(e){
  var offset = $('.honey').offset();
   mouseX = (e.pageX - offset.left);
   mouseY = (e.pageY - offset.top);
   if (mouseX < 0) mouseX = 0;
   if (mouseY > 0) mouseY = 0;
});

// cache the selector
var follower = $("#light");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 90
    yp += (mouseY - yp) / 90;
    follower.css({left:xp, top:yp});
    
}, 15);


