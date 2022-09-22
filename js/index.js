$(".play_btn button").unbind().click(function () {

    $("#article1").animate({ "right" : "1920px"}, 1000);
    $("#article2").animate({ "right": "0px" }, 1000).show();
});