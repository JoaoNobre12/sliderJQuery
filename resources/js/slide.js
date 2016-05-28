/**
 * Created by joao on 27/05/16.
 */

$(

    function () {

        var speed = 2100;
        var rotate = setInterval(auto, speed);

        
        $("div#galeria").hover(function () {
            $("div#galeria div#buttons").fadeIn();
            clearInterval(rotate);
        }, function () {
            $("div#galeria div#buttons").fadeOut();
            rotate = setInterval(auto, speed);
        });

        var liWidth = $("div#galeria ul li").outerWidth() * (-1);//proximo
        $(".next").click(

            function (e) {
                e.preventDefault();

                $("div#galeria ul").css("width","9999%").animate({left: liWidth}, 900, function () {

                    $("div#galeria ul li").last().after($("div#galeria ul li").first());


                    $("div#galeria ul").css("width","auto");
                    $("div#galeria ul").css("left","0");
                });
            }
        );

        $(".prev").click(
            function (e) {
                e.preventDefault();

                $("div#galeria ul li").first().before($("div#galeria ul li").last().css("margin-left",liWidth+"px"));
                $("div#galeria ul").css("width", "9999%").css({'width':'9999%'}).animate({left: liWidth * (-1)}, function () {
                    $("div#galeria ul li").first().css("margin-left","0");
                    $(this).css({'left':'0', 'width':'auto'});
                });
            }
        );


        function auto() {
            $(".next").click();
        }
    }
);


