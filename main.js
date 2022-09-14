//Filter Js - For sorting out the blogs under either "Design", "Tech", "Mobile".
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if(value == 'all') {
            $('.post-box').show('1000')
        }else{
            $('.post-box')
            .not('.' + value)
            .hide('1000');
            $('.post-box')
            .filter('.' + value)
            .show('1000');
        }
    });

    //To indicate which filter btn is active (clicked)
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

//Header BAckground Change On Scroll
 let header = document.querySelector('header')

 window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
 });