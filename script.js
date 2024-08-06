function main_page() {
    $("body").append('<div class="wrapper"></div>');
  
    $(".wrapper").append('<button class="menu_1 clicked">Главная</button>');
    $(".wrapper").append('<button class="menu_2">Каталог</button>');
    $(".wrapper").append('<button class="menu_3">Избранное</button>');
    $(".wrapper").append('<button class="menu_4">Корзина</button>');
    $(".wrapper").append('<button class="menu_5">Контакты</button>');


    $("body").append('<img class="img" src="img.jpg" alt="картинка">');
    $("body").append('<h1>Популярное</h1>');


    $("body").append('<div class="new"></div>');
               
    $($('.new').append('<div class="new_books"></div>')).append('<img class="pic" src="https://avatars.mds.yandex.net/i?id=4dacf3a152aeec6ffabfb94bdb864a75b7fae8d6-5869703-images-thumbs&n=13" alt="бибизян">');
    $($('.new').append('<div class="new_books"></div>')).append('<img class="pic" src="https://cs6.pikabu.ru/post_img/big/2014/03/21/9/1395409718_1817651376.jpg" alt="котик">');
    $($('.new').append('<div class="new_books"></div>')).append('<img class="pic" src="https://sneg.top/uploads/posts/2023-04/1682382422_sneg-top-p-yenot-prikolnie-kartinki-pinterest-21.jpg" alt="енотик">');
    $($('.new').append('<div class="new_books"></div>')).append('<img class="pic" src="https://i.pinimg.com/originals/16/c0/4d/16c04d04de7d349b13c59650c4cdee71.jpg" alt="капибара">');
    $($('.new').append('<div class="new_books"></div>')).append('<img class="pic" src="https://icdn.lenta.ru/images/2024/03/18/12/20240318124428467/owl_rect_200_f5efd4d8fa38642bb1a4b96f10615868.jpg" alt="хомяк">');
    $($('.new').append('<div class="new_books"></div>')).append('<img class="pic" src="https://www.funnyart.club/uploads/posts/2022-12/1672017592_www-funnyart-club-p-zmeya-mem-prikoli-1.jpg" alt="змея">');
    $($('.new').append('<div class="new_books"></div>')).append('<img class="pic" src="https://gagaru.club/uploads/posts/2023-02/thumbs/1676636373_gagaru-club-p-utkonos-milii-pinterest-33.jpg" alt="утконос">');
}

function catalog() {
    $("body").append('<div class="wrapper"></div>');
  
    $(".wrapper").append('<button class="menu_1">Главная</button>');
    $(".wrapper").append('<button class="menu_2 clicked">Каталог</button>');
    $(".wrapper").append('<button class="menu_3">Избранное</button>');
    $(".wrapper").append('<button class="menu_4">Корзина</button>');
    $(".wrapper").append('<button class="menu_5">Контакты</button>');


    $('body').append('<div class="container"></div>')

    $('.container').append('<div class="category"></div>')

    $('.category').append('<button class="cat1">Учебники</button>')
    $('.category').append('<hr>')
    $('.category').append('<button class="cat2">Художественная литература</button>')
    $('.category').append('<hr>')
    $('.category').append('<button class="cat3">Дополнительные материалы</button>')
    $('.category').append('<hr>')
    $('.category').append('<button class="cat4">Канцтовары</button>')

    $(".cat1").click(function() {
        $('.subcategory').remove()
        $('.cat4').removeClass('change_cat_col')
        $('.cat2').removeClass('change_cat_col')
        $('.cat3').removeClass('change_cat_col')
        $('.cat1').addClass('change_cat_col')
        $('.container').append('<div class="subcategory"></div>')
        $('.subcategory').css('height', '375px')
        $('.subcategory').append('<button class=subcat1_1>1 - 4 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class=subcat1_2>5 - 9 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class=subcat1_3>10 - 11 класс</button>')

        $('.subcat1_1').click(function() {
            $('.category').remove()
            $('.subcategory').remove()

            $('body').append('<div class="products"></div>')
            $('.products').append('<div class="product"></div>')
            $('.product').append('<img class="img1" src="photos/1-4/математика1.jpg" alt="картинка">')
        })


    });
    $(".cat2").click(function() {
        $('.subcategory').remove()
        $('.cat1').removeClass('change_cat_col')
        $('.cat4').removeClass('change_cat_col')
        $('.cat3').removeClass('change_cat_col')
        $('.cat2').addClass('change_cat_col')
        $('.container').append('<div class="subcategory"></div>')
        $('.subcategory').css('height', '375px')
        $('.subcategory').append('<h4>Лирика</h4>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<h4>Драма</h4>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<h4>Эпос</h4>')
    });
    $(".cat3").click(function() {
        $('.subcategory').remove()
        $('.cat1').removeClass('change_cat_col')
        $('.cat2').removeClass('change_cat_col')
        $('.cat4').removeClass('change_cat_col')
        $('.cat3').addClass('change_cat_col')
        $('.container').append('<div class="subcategory"></div>')
        $('.subcategory').css('height', '375px')
        $('.subcategory').css('width', '500px')
        $('.subcategory').append('<h4>Тесты и контрольные</h4>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<h4>Рабочие тетради</h4>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<h4>Решебники</h4>')
    });
    $(".cat4").click(function() {
        $('.subcategory').remove()
        $('.cat1').removeClass('change_cat_col')
        $('.cat2').removeClass('change_cat_col')
        $('.cat3').removeClass('change_cat_col')
        $('.cat4').addClass('change_cat_col')
        $('.container').append('<div class="subcategory"></div>')
        $('.subcategory').css('height', '375px')
        $('.subcategory').css('width', '500px')
        $('.subcategory').append('<h4>Письменные принадлежности</h4>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<h4>Чертёжные принадлежности</h4>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<h4>Тетради</h4>')
    });

    
}

function click_checker() {
    $(".menu_1").click(function() {
        $("div").remove();
        $("img").remove();
        $("h1").remove();
    
        main_page();
    
        $(this).addClass('clicked');
        $(".menu_2").removeClass('clicked');
        $(".menu_3").removeClass('clicked');
        $(".menu_4").removeClass('clicked');
        $(".menu_5").removeClass('clicked');
    
        click_checker();
    
    })
    
    $(".menu_2").click(function() {
        $("div").remove();
        $("img").remove();
        $("h1").remove();
    
        catalog();
    
        $(this).addClass('clicked');
        $(".menu_1").removeClass('clicked');
        $(".menu_3").removeClass('clicked');
        $(".menu_4").removeClass('clicked');
        $(".menu_5").removeClass('clicked');
    
        click_checker();
    })
    
    $(".menu_3").click(function() {
        $(this).addClass('clicked');
        $(".menu_2").removeClass('clicked');
        $(".menu_1").removeClass('clicked');
        $(".menu_4").removeClass('clicked');
        $(".menu_5").removeClass('clicked');
    
        click_checker();
    })
    
    $(".menu_4").click(function() {
        $(this).addClass('clicked');
        $(".menu_2").removeClass('clicked');
        $(".menu_3").removeClass('clicked');
        $(".menu_1").removeClass('clicked');
        $(".menu_5").removeClass('clicked');
    
        click_checker();
    })
    
    $(".menu_5").click(function() {
        $(this).addClass('clicked');
        $(".menu_2").removeClass('clicked');
        $(".menu_3").removeClass('clicked');
        $(".menu_4").removeClass('clicked');
        $(".menu_1").removeClass('clicked');
    
        click_checker();
    })
    
}



$(".menu_1").click(function() {
    $("div").remove();
    $("img").remove();
    $("h1").remove();

    main_page();

    $(this).addClass('clicked');
    $(".menu_2").removeClass('clicked');
    $(".menu_3").removeClass('clicked');
    $(".menu_4").removeClass('clicked');
    $(".menu_5").removeClass('clicked');

    click_checker();

})

$(".menu_2").click(function() {
    $("div").remove();
    $("img").remove();
    $("h1").remove();

    catalog();

    $(this).addClass('clicked');
    $(".menu_1").removeClass('clicked');
    $(".menu_3").removeClass('clicked');
    $(".menu_4").removeClass('clicked');
    $(".menu_5").removeClass('clicked');

    click_checker();
})

$(".menu_3").click(function() {
    $(this).addClass('clicked');
    $(".menu_2").removeClass('clicked');
    $(".menu_1").removeClass('clicked');
    $(".menu_4").removeClass('clicked');
    $(".menu_5").removeClass('clicked');

    click_checker();
})

$(".menu_4").click(function() {
    $(this).addClass('clicked');
    $(".menu_2").removeClass('clicked');
    $(".menu_3").removeClass('clicked');
    $(".menu_1").removeClass('clicked');
    $(".menu_5").removeClass('clicked');

    click_checker();
})

$(".menu_5").click(function() {
    $(this).addClass('clicked');
    $(".menu_2").removeClass('clicked');
    $(".menu_3").removeClass('clicked');
    $(".menu_4").removeClass('clicked');
    $(".menu_1").removeClass('clicked');

    click_checker();
})
