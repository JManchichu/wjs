/**
 * Created by newuser on 2017/8/24.
 */
window.onload=function(){
    initMobleImage();

}

//构造一个  initMobleImage 方法
function initMobleImage() {

    /*
    *
    * 获取承载所以li标签的容器的宽度  ul
    * 要计算所有li的宽度的和
    * 使用swipe插件 让其在移动端有滑动效果
    *
    *
    *
    * string
    * number
    * boolean
    * object
    * array
    * undefined
    * reg////
    *
    *
    * */
    //通过js 获取装载li的大盒子ul
    var  imagesBox = document.querySelector(".wjs_product_tabs");
    //获取大盒子下面的所有li
    var  lis=imagesBox.querySelectorAll("li");
    //声明一个变量
    var totalWidth=0; //number
    for(var i = 0 ; i < lis.length; i++){
        //把所有li的宽度一一加起来
        totalWidth+=parseInt(lis[i].offsetWidth);
    }

   /*
   *
   * $(".selector").width()  只能获取盒子内容的宽度
   * $(".selector").innerwidth() 可以获取盒子内容+padding
   * $(".selector").outerwidth()  可以获取盒子内容+padding+边框+margin
   * $(".selector").outerwidth(true)  可以获取盒子内容+padding+边框+margin
   *
   *
   * */
   // 赋值给装载li的大盒子ul
   $(imagesBox).width(totalWidth);
    //调用插件滑动的这个方法
    itestcode.iScroll({
        swipeDom:$(".wjs_product_box").get(0),//dom 大容器
        swipeType:"x",//水平滑动x 垂直滑动 y
        swipeDistance:150 //缓冲距离
    });



}

