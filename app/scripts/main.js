var tailCount = 0,
    headCount = 0,
    totalFlipCount = 0;

function setLog(flip, log, count) {
    log.find('.quantity').html(count);
    log.find('.average').html(count / totalFlipCount);
    $(".log-container").append("<span>" + flip + "</span");
}

$(function () {
    $('.btn-flip').click(function() {
        var flip,
            headsLog = $('.log-container .heads'),
            tailsLog = $('.log-container .tails');

        totalFlipCount++;

        if (Math.round(Math.random()) == 0) {
            flip = "head";
            headCount++;
            setLog(flip, headsLog, headCount);
        } else {
            flip = "tail";
            tailCount++;
            setLog(flip, tailsLog, tailCount);
        }

        $('.coin').toggleClass('flip');
    });
});
