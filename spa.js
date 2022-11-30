$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".isi").slideToggle("fast");

    $('nav ul li.conteks').each(function(index, el) {
        var subID = el.id.split('-')[1];
        $('.isi#' + subID).hide();
    });
});

    $('nav').delegate('.conteks', 'click', function(event) {
        var pilihSub = this.id.split('-')[1];
    console.log(pilihSub);
    document.location.hash = pilihSub;
    
    $('.sub:visible').fadeOut('slow', function() {
        $('.sub#' + pilihSub).fadeIn('slow');
    });
    var $this = $(this);
    $this.removeClass('conteks').addClass("awal");
    $this.siblings().addClass('conteks').removeClass('awal');
    });
});
