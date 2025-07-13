window.addEventListener('load',function(){
    var $button = this.document.querySelector('.toggle-menu-button');
    var $menu = this.document.querySelector('.header-site-menu');
    
    $button.addEventListener('click',function(){
        if($menu.classList.contains('is-show')){
            $menu.classList.remove('is-show');
        }
        else{
            $menu.classList.add('is-show');
        }
    });

    const element = this.document.querySelector('.anim-box.fadeup');
    element.classList.add('is-animated');
});

$(function(){
    $(window).scroll(function(){
        $("nav.floating").stop().animate(
            {"top":$(window).scrollTop() +100},
            500);
    });
});

