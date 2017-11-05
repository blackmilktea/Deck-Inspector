$(function () {
    var pname = $('a[href*=mydata]').text();
    $('html, body').removeAttr('class style data-music');
    $('body').html('<div>' + $('.guild-deck-inner').html() + '</div>');
    $('body').prepend('<h1>' + pname + '</h1>');
});