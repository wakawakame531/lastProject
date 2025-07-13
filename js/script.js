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

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-animated');
                observer.unobserve(entry.target);
            }
        });
    });

    animElements.forEach(element => {
        observer.observe(element);
    });
});

$(function(){
    $(window).scroll(function(){
        $("nav.floating").stop().animate(
            {"top":$(window).scrollTop() +100},
            500);
    });
});

