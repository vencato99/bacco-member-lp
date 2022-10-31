$('#audio-control').click(function(){
    if( $("#myVideo").prop('muted') ) {
          $("#myVideo").prop('muted', false);
          $(this).toggleClass('som').removeClass('semsom');
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#myVideo").prop('muted', true);
      $(this).toggleClass('semsom').removeClass('som');
    }
});


$("video").prop("volume", 0.1);