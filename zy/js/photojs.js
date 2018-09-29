/**
 * Created by zhouyang on 2017/5/27.
 */
$(function(){
    var $data=$("#stage").clone();
    $("#photo-nav  li").click(function(){
        $(this).addClass("cur");
        $(this).siblings().removeClass("cur");
        var id = $(this).attr("id");
        if(id=="all"){
            var $source=$data.find("li");
        }else{
            var $source=$data.find("li[class="+id+"]");
        }
        $("#stage").quicksand($source,{
            duration: 1000,
            attribute: 'id',
            easing: 'swing'
        });
    });
});
