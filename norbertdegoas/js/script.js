var colchon = function() {
    $('#colchon').animate({ left: "+=120%" }, 5000 )
    .queue(function() {
        $(this).toggleClass('flip').dequeue();
    })
    .queue(function() {
        $(this).animate({ left: '-350px' }, 5000).dequeue();
    });
};

$(document).ready(function() {
    setInterval(colchon, 20000)
});