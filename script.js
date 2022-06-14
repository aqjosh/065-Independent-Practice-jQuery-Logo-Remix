$(".board").hide();

//1
$(".start").click(function() {
       $(".board").slideDown();
});

//2
$(".end").click(function() {
        $(".board").slideUp();
});

//3
$(".board").hover(function() {
    $(".board").css("border","solid blue 5px");
    $("button").css("background-color","blue");
    $("button").css("color","blue");

});
$(".board").mouseenter(function() {
    $(".board").css("border-color","black");
    $("button").css("background-color","black");
    $("button").css("color","white");
});

//5
$(".board").dblclick(function() {
    $(".company-slogan").text("Connecting Communities.Creating Opportunities");
});

//6
$(".board").mouseout(function() {
    $(".company-slogan").text("");
    $("button").css("background-color","blue");
    $("button").css("color","white");
});
