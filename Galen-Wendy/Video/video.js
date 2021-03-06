//Responsive Iframe Video code from css-tricks
(function() {
  var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
  $fluidEl = $("figure");
  $allVideos.each(function() {
    $(this)
      // jQuery .data does not work on object/embed elements
      .attr('data-aspectRatio', this.height / this.width)
      .removeAttr('height')
      .removeAttr('width');
  });
  $(window).resize(function() {
    var newWidth = $fluidEl.width();
    $allVideos.each(function() {
      var $el = $(this);
      $el
          .width(newWidth)
          .height(newWidth * $el.attr('data-aspectRatio'));
    });
  }).resize();
});

function pauseVid(){
    var vid = document.getElementById("video1");
    vid.pause();
}

function playVid(){
    var vid = document.getElementById("video1");
    vid.play();
}

function frameChange(value){
    var vid = document.getElementById("video1");
    vid.currentTime += value;
}

function sneeze(){
    var vid = document.getElementById("video1");
    vid.currentTime = 11;
    vid.play();
}

function restart(){
    var vid = document.getElementById("video1");
    vid.currentTime = 0;
    vid.play();
}

function change(){
  document.getElementById("panda").src = "bear.mp4";
  document.getElementById("video1").load();
}
