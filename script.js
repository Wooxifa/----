let liked_arr = []
let buy_arr = []
let prices = []

function main_page() {
    $("body").append('<div class="wrapper"></div>');
  
    $(".wrapper").append('<button class="menu_1 clicked">Главная</button>');
    $(".wrapper").append('<button class="menu_2">Каталог</button>');
    $(".wrapper").append('<button class="menu_3">Избранное</button>');
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

function liked_page() {
    $("body").append('<div class="wrapper"></div>');
  
    $(".wrapper").append('<button class="menu_1">Главная</button>');
    $(".wrapper").append('<button class="menu_2">Каталог</button>');
    $(".wrapper").append('<button class="menu_3 clicked">Избранное</button>');
    $(".wrapper").append('<button class="menu_5">Контакты</button>');


    if (liked_arr.length == 0) {
        $("body").append('<h1 class="no">Пока у вас нет понравившихся книг, загляните каталог :)</h1>')
    }

    else {
        $("body").append('<div class="liked_products"></div>')
        for (let i = 0; i <= liked_arr.length; i++) {
            if (liked_arr[i] == 'rus1') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b1"></div>')
                $('.b1').append('<img class="img1_buy" src="photos/1/rus1.jpg" alt="картинка">')
                $('.b1').append('<div id="rus1"></div>')
                $('#rus1').append('<div id="c1"></div>')
                $('#c1').css('display', 'flex')
                $('#c1').css('text-align', 'left')
                $('#c1').append('<h1 class="buy_name">Учебник русского языка 1класс</h1>')
                $('#c1').append('<h1>29МБ</h1>') 
                $('#rus1').append('<div id="d1"></div>')
                $('#d1').css('text-align', 'right')
                $('#d1').append('<button class="prod_menu">X</button>')
                $('#d1').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('rus1', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/russ_jazyk_-uchebnik_-1-kl_-kanakina.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close(); ;
                })
            }
            if (liked_arr[i] == 'math1_1') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b2"></div>')
                $('.b2').append('<img class="img1_buy" src="photos/1/math1_1.jpg" alt="картинка">')
                $('.b2').append('<div id="math1_1"></div>')
                $('#math1_1').append('<div id="c2"></div>')
                $('#c2').css('display', 'flex')
                $('#c2').css('text-align', 'left')
                $('#c2').append('<h1 class="buy_name">Учебник математики 1класс 1ч</h1>')
                $('#c2').append('<h1>12.1МБ</h1>') 
                $('#math1_1').append('<div id="d2"></div>')
                $('#d2').css('text-align', 'right')
                $('#d2').append('<button class="prod_menu">X</button>')
                $('#d2').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('math1_1', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/matemat_-1-kl_-1-ch_-moro.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'math1_2') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b3"></div>')
                $('.b3').append('<img class="img1_buy" src="photos/1/math1_2.webp" alt="картинка">')
                $('.b3').append('<div id="math1_2"></div>')
                $('#math1_2').append('<div id="c3"></div>')
                $('#c3').css('display', 'flex')
                $('#c3').css('text-align', 'left')
                $('#c3').append('<h1 class="buy_name">Учебник математики 1класс 2ч</h1>')
                $('#c3').append('<h1>10.7МБ</h1>') 
                $('#math1_2').append('<div id="d3"></div>')
                $('#d3').css('text-align', 'right')
                $('#d3').append('<button class="prod_menu">X</button>')
                $('#d3').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('math1_2', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/matemat_-1-kl_-2-ch_-moro.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'chtenie1_1') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b4"></div>')
                $('.b4').append('<img class="img1_buy" src="photos/1/chtenie1_1.jpg" alt="картинка">')
                $('.b4').append('<div id="chtenie1_1"></div>')
                $('#chtenie1_1').append('<div id="c4"></div>')
                $('#c4').css('display', 'flex')
                $('#c4').css('text-align', 'left')
                $('#c4').append('<h1 class="buy_name">Учебник чтения 1класс 1ч</h1>')
                $('#c4').append('<h1>18.17МБ</h1>') 
                $('#chtenie1_1').append('<div id="d4"></div>')
                $('#d4').css('text-align', 'right')
                $('#d4').append('<button class="prod_menu">X</button>')
                $('#d4').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('chtenie1_1', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/lit_chten_-1-kl_-1-ch_-klimanova.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'chtenie1_2') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b5"></div>')
                $('.b5').append('<img class="img1_buy" src="photos/1/chtenie1_2.jpg" alt="картинка">')
                $('.b5').append('<div id="chtenie1_2"></div>')
                $('#chtenie1_2').append('<div id="c5"></div>')
                $('#c5').css('display', 'flex')
                $('#c5').css('text-align', 'left')
                $('#c5').append('<h1 class="buy_name">Учебник чтения 1класс 2ч</h1>')
                $('#c5').append('<h1>18.17МБ</h1>') 
                $('#chtenie1_2').append('<div id="d5"></div>')
                $('#d5').css('text-align', 'right')
                $('#d5').append('<button class="prod_menu">X</button>')
                $('#d5').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('chtenie1_2', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/lit_chten_-1-kl_-2-ch_-klimanova.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'tecn1') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b6"></div>')
                $('.b6').append('<img class="img1_buy" src="photos/1/tecn1.webp" alt="картинка">')
                $('.b6').append('<div id="tecn1"></div>')
                $('#tecn1').append('<div id="c6"></div>')
                $('#c6').css('display', 'flex')
                $('#c6').css('text-align', 'left')
                $('#c6').append('<h1 class="buy_name">Учебник технологии 1класс</h1>')
                $('#c6').append('<h1>20.93МБ</h1>') 
                $('#tecn1').append('<div id="d6"></div>')
                $('#d6').css('text-align', 'right')
                $('#d6').append('<button class="prod_menu">X</button>')
                $('#d6').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('tecn1', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/tehnologija_-uchebnik_-1-kl_-lutceva.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'izo1') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b7"></div>')
                $('.b7').append('<img class="img1_buy" src="photos/1/izo1.webp" alt="картинка">')
                $('.b7').append('<div id="izo1"></div>')
                $('#izo1').append('<div id="c7"></div>')
                $('#c7').css('display', 'flex')
                $('#c7').css('text-align', 'left')
                $('#c7').append('<h1 class="buy_name">Учебник изобразительного искусства 1класс</h1>')
                $('#c7').append('<h1>12.12МБ</h1>') 
                $('#izo1').append('<div id="d7"></div>')
                $('#d7').css('text-align', 'right')
                $('#d7').append('<button class="prod_menu">X</button>')
                $('#d7').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('izo1', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/izo_-uchebnik_-1-kl_-nemenskaja_compressed.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'om1_1') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b8"></div>')
                $('.b8').append('<img class="img1_buy" src="photos/1/om1_1.webp" alt="картинка">')
                $('.b8').append('<div id="om1_1"></div>')
                $('#om1_1').append('<div id="c8"></div>')
                $('#c8').css('display', 'flex')
                $('#c8').css('text-align', 'left')
                $('#c8').append('<h1 class="buy_name">Учебник окружающего мира 1класс 1ч</h1>')
                $('#c8').append('<h1>8.7МБ</h1>') 
                $('#om1_1').append('<div id="d8"></div>')
                $('#d8').css('text-align', 'right')
                $('#d8').append('<button class="prod_menu">X</button>')
                $('#d8').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('om1_1', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/okruzh_-mir_-1-kl_-1-ch_-pleshakov.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'om1_2') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b9"></div>')
                $('.b9').append('<img class="img1_buy" src="photos/1/om1_2.jpg" alt="картинка">')
                $('.b9').append('<div id="om1_2"></div>')
                $('#om1_2').append('<div id="c9"></div>')
                $('#c9').css('display', 'flex')
                $('#c9').css('text-align', 'left')
                $('#c9').append('<h1 class="buy_name">Учебник окружающего мира 1класс 2ч</h1>')
                $('#c9').append('<h1>9МБ</h1>') 
                $('#om1_2').append('<div id="d9"></div>')
                $('#d9').css('text-align', 'right')
                $('#d9').append('<button class="prod_menu">X</button>')
                $('#d9').append('<button class="prod_menu1">Скачать</button>')

                $('.prod_menu').click(function() {
                    liked_arr.splice('om1_2', 1)
                })

                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/okruzh_-mir_-1-kl_-2-ch_-pleshakov.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'mus1') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b10"></div>')
                $('.b10').append('<img class="img1_buy" src="photos/1/mus1.jpg" alt="картинка">')
                $('.b10').append('<div id="mus1"></div>')
                $('#mus1').append('<div id="c10"></div>')
                $('#c10').css('display', 'flex')
                $('#c10').css('text-align', 'left')
                $('#c10').append('<h1 class="buy_name">Учебник музыки 1класс</h1>')
                $('#c10').append('<h1>12.3МБ</h1>') 
                $('#mus1').append('<div id="d10"></div>')
                $('#d10').css('text-align', 'right')
                $('#d10').append('<button class="prod_menu">X</button>')
                $('#d10').append('<button class="prod_menu1">Скачать</button>')
    
                $('.prod_menu').click(function() {
                    liked_arr.splice('mus1', 1)
                })
    
                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/muzyka_-uchebnik_-1-kl_-kritskaja.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
            if (liked_arr[i] == 'pe1') {
                prod_id = 'st' + (i + 1)
                $('.liked_products').append('<div class="liked_div b11"></div>')
                $('.b11').append('<img class="img1_buy" src="photos/1/pe1.jpg" alt="картинка">')
                $('.b11').append('<div id="pe1"></div>')
                $('#pe1').append('<div id="c11"></div>')
                $('#c11').css('display', 'flex')
                $('#c11').css('text-align', 'left')
                $('#c11').append('<h1 class="buy_name">Учебник физкультуры 1класс</h1>')
                $('#c11').append('<h1>10.7МБ</h1>') 
                $('#pe1').append('<div id="d11"></div>')
                $('#d11').css('text-align', 'right')
                $('#d11').append('<button class="prod_menu">X</button>')
                $('#d11').append('<button class="prod_menu1">Скачать</button>')
    
                $('.prod_menu').click(function() {
                    liked_arr.splice('pe1', 1)
                })
    
                $('.prod_menu1').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/fizkultura_-uchebnik_-1-kl_-matveev-1.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close();  
                })
            }
        }
    }
        
        
                //a_id = 'a' + (j + 1)
                //div_id = 'b' + (j + 1)
                //if (liked_arr[j] == 'rus1') {
                //    $('.product').attr('id', a_id)
                //    $('#' + a_id).append('<button class="div_1234 c1"></button>')
                //    $('.c1').attr('id', div_id)
                //    $('#' + div_id).append('<img class="img1" src="photos/1/rus1.jpg" alt="картинка">')
                //    $('#' + div_id).append('<div id="rus1"></div>')
                //    $('#rus1').append('<h5>Учебник русского языка 1класс</h5>')
                //    $('#rus1').append('<h3>29МБ</h3>') 
                //}
                //if (liked_arr[j] == 'math1_1') {
                //    $('.product').attr('id', a_id)
                //    $('#' + a_id).append('<button class="div_1234 c2"></button>')
                //    $('.c2').attr('id', div_id)
                //    $('#' + div_id).append('<img class="img1" src="photos/1/math1_1.jpg" alt="картинка">')
                //    $('#' + div_id).append('<div id="math1_1"></div>')
                //    $('#math1_1').append('<h5>Учебник математики 1ч 1класс</h5>')
                //    $('#math1_1').append('<h3>12.1МБ</h3>')  
                //}

                 
}
    


function buyings() {
    $("body").append('<div class="wrapper"></div>');
  
    $(".wrapper").append('<button class="menu_1">Главная</button>');
    $(".wrapper").append('<button class="menu_2">Каталог</button>');
    $(".wrapper").append('<button class="menu_3">Избранное</button>');
    $(".wrapper").append('<button class="menu_4 clicked">Корзина</button>');
    $(".wrapper").append('<button class="menu_5">Контакты</button>');

    if (buy_arr.length == 0) {
        $("body").append('<h1 class="no">Пока ваша корзина пуста, загляните каталог :)</h1>')
    }

    else {
        for (let i = 0; i <= buy_arr.length; i+=7) {
            counter = 0
            price = 0
            for (let k = 0; k < prices.length; k++) {
                price += prices[k]
            }
            prod_id = 'st' + (counter + 1)
            a_id = 'a' + (counter + 1)
            text_count = 'Кол-во товаров:' + buy_arr.length
            res_price = 'Итого:' +  price

            $('body').append('<div class="just_div"></div>')
            $('.just_div').append('<div class="products_buy"></div>')
            $('.products_buy').css('border', '1px solid black')
            $('.products_buy').css('width', '760px')
            $('.products_buy').append('<div class="product_buy"></div>')
            $('.product_buy').attr('id', prod_id)

            $('.just_div').append('<div class="result_buy"></div>')
            $('.result_buy').append('<button class="red_btn">Очистить корзину</button>')
            $('.result_buy').append('<h2 class="res_texts count"></h2>')
            $('.count').text(text_count)
            $('.result_buy').append('<h1 class="res_texts ress"></h1>')
            $('.ress').text(res_price)
            $('.result_buy').append('<button class="zakazat">Заказать</button>')

            $('.red_btn').click(function() {
                buy_arr = []
            })

            if (buy_arr[counter]== 'rus1') {
                $('#' + prod_id).append('<button class="div_1"></button>')
                $('.div_1').attr('id', a_id)
                $('#' + a_id).append('<img class="img1_buy" src="photos/1/rus1.jpg" alt="картинка">')
                $('#' + a_id).append('<div id="rus1"></div>')
                $('#rus1').append('<div id="div_buy"></div>')
                $('#div_buy').css('display', 'flex')
                $('#div_buy').css('text-align', 'left')
                $('#div_buy').append('<h1 class="buy_name">Учебник русского языка 1класс</h1>')
                $('#div_buy').append('<h1>900₽</h1>') 
                $('#rus1').append('<div id="div_buy_men"></div>')
                $('#div_buy_men').css('text-align', 'right')
                $('#div_buy_men').append('<button class="prod_menu">X</button>')
                price += 900

                $('.prod_menu').click(function() {
                    buy_arr.splice('rus1', 1)
                })
            }

            else if (buy_arr[counter]== 'math1_1') {
                $('#' + prod_id).append('<button class="div_1"></button>')
                $('.div_1').attr('id', a_id)
                $('#' + a_id).append('<img class="img1_buy" src="photos/1/math1_1.jpg" alt="картинка">')
                $('#' + a_id).append('<div id="math1_1"></div>')
                $('#math1_1').append('<div id="div_buy"></div>')
                $('#div_buy').css('display', 'flex')
                $('#div_buy').css('text-align', 'left')
                $('#div_buy').append('<h1 class="buy_name">Учебник математики 1ч 1класс</h1>')
                $('#div_buy').append('<h1>1000₽</h1>') 
                $('#math1_1').append('<div id="div_buy_men"></div>')
                $('#div_buy_men').css('text-align', 'right')
                $('#div_buy_men').append('<button class="prod_menu">X</button>')
                price += 1000

                $('.prod_menu').click(function() {
                    buy_arr.splice('math1_1', 1)
                })
            counter += 1
            }
        }


        //for (let i = 0; i <= buy_arr.length; i+=7) {
        //    $('body').append('<div class="products"></div>')
        //    counter = 0
        //    $('.products').append('<div class="product"></div>')
        //    prod_id = 'st' + (counter + 1)
        //    for (let j = 0; j<= 6; j++) {
        //        if (j == 0) {
        //            $('.product').attr('id', prod_id)
        //            if (buy_arr[counter]== 'rus1') {
        //                a_id1 = 'a' + (counter) + '_' + (1)
        //                $('#' + prod_id).append('<button class="div_1234"></button>')
        //                $('.div_1234').attr('id', a_id1)
        //                $('#' + a_id1).append('<img class="img1" src="photos/1/rus1.jpg" alt="картинка">')
        //                $('#' + a_id1).append('<div id="rus1"></div>')
        //                $('#rus1').append('<h5>Учебник русского языка 1класс</h5>')
        //                $('#rus1').append('<h3>900₽</h3>') 
        //            }  
        //            else if (buy_arr[counter]== 'math1_1') {
        //                a_id2 = 'a' + (counter) + '_' + (1)
        //                $('#' + prod_id).append('<button class="div_1234"></button>')
        //                $('.div_1234').attr('id', a_id2)
        //                $('#' + a_id2).append('<img class="img1" src="photos/1/math1_1.jpg" alt="картинка">')
        //                $('#' + a_id2).append('<div id="math1_1"></div>')
        //                $('#math1_1').append('<h5>Учебник математики 1ч 1класс</h5>')
        //                $('#math1_1').append('<h3>1000₽</h3>') 
        //            }
        //            else if (j == 0) {
        //                $('.product').attr('id', prod_id)
        //                if (buy_arr[counter]== 'rus1') {
        //                    a_id1 = 'a' + (counter) + '_' + (2)
        //                    $('#' + prod_id).append('<button class="div_1234"></button>')
        //                    $('.div_1234').attr('id', a_id1)
        //                    $('#' + a_id1).append('<img class="img1" src="photos/1/rus1.jpg" alt="картинка">')
        //                    $('#' + a_id1).append('<div id="rus1"></div>')
        //                    $('#rus1').append('<h5>Учебник русского языка 1класс</h5>')
        //                    $('#rus1').append('<h3>900₽</h3>') 
        //                }  
        //                else if (buy_arr[counter]== 'math1_1') {
        //                    a_id2 = 'a' + (counter) + '_' + (2)
        //                    $('#' + prod_id).append('<button class="div_1234"></button>')
        //                    $('.div_1234').attr('id', a_id2)
        //                    $('#' + a_id2).append('<img class="img1" src="photos/1/math1_1.jpg" alt="картинка">')
        //                    $('#' + a_id2).append('<div id="math1_1"></div>')
        //                    $('#math1_1').append('<h5>Учебник математики 1ч 1класс</h5>')
        //                    $('#math1_1').append('<h3>1000₽</h3>') 
        //                }
        //            }                  
        //        }  
        //    counter += 1               
        //    }
        //}
    }
}

function catalog() {
    $("body").append('<div class="wrapper"></div>');
  
    $(".wrapper").append('<button class="menu_1">Главная</button>');
    $(".wrapper").append('<button class="menu_2 clicked">Каталог</button>');
    $(".wrapper").append('<button class="menu_3">Избранное</button>');
    $(".wrapper").append('<button class="menu_5">Контакты</button>');


    $('body').append('<div class="container"></div>')

    $('.container').append('<div class="category"></div>')

    $('.category').append('<button class="cat1">Учебники(1-4 класс)</button>')
    $('.category').append('<hr>')
    $('.category').append('<button class="cat2">Учебники(5-9 класс)</button>')
    $('.category').append('<hr>')
    $('.category').append('<button class="cat3">Учебники(10-11 класс)</button>')
    $('.category').append('<hr>')
    $('.category').append('<button class="cat4">ОГЭ и ЕГЭ</button>')

    $(".cat1").click(function() {
        $('.subcategory').remove()
        $('.cat4').removeClass('change_cat_col')
        $('.cat2').removeClass('change_cat_col')
        $('.cat3').removeClass('change_cat_col')
        $('.cat1').addClass('change_cat_col')
        $('.container').append('<div class="subcategory"></div>')
        $('.subcategory').css('height', '375px')
        $('.subcategory').append('<button class="subcats subcat1_1">1 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class="subcats subcat1_2">2 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class="subcats subcat1_3">3 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class="subcats subcat1_4">4 класс</button>')

        $('.subcat1_1').click(function() {
            $('.category').remove()
            $('.subcategory').remove()

            $('body').append('<div class="products"></div>')
            
            $('.products').append('<div class="product" id="b1"></div>')

            $('#b1').append('<button class="div_1234" id="rus1_btn"></button>')
            $('#rus1_btn').append('<img class="img1" src="photos/1/rus1.jpg" alt="картинка">')
            $('#rus1_btn').append('<div id="rus1"></div>')
            $('#rus1').append('<h5>Учебник русского языка 1класс</h5>')
            $('#rus1').append('<h3>29Мб</h3>')

            $('#rus1_btn').click(function rus1() {
                $('.products').remove()
                if ($.inArray('rus1', liked_arr) !== -1){
                    $('body').append('<div class="rus1_card main_card"></div>')

                    $('.rus1_card').append('<img class="rus1_photo main_photo" src="photos/1/rus1.jpg" alt="картинка">')
                    $('.rus1_card').append('<div class="rus1_div main_div"></div>')

                    $('.rus1_div').append('<div class="rus1_2text main_2text"></div>')
                    $('.rus1_2text').append('<h2 class="rus1_h2">Учебник русского языка 1класс</h2>')
                    $('.rus1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.rus1_2text').append('<h1 class="rus1_h1">29Мб</h1>')
                    $('.rus1_h1').css('margin-left', '100px')
                    $('.rus1_h1').css('font-size', '2.5em')
                    $('.rus1_h1').css('color', 'darkred')
                    $('.rus1_div').append('<h3>Авторы: Канакина В.П., Горецкий В.Г.</h3>')
                    $('.rus1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.rus1_div').append('<h3>Предмет: русский язык</h3>')
                    $('.rus1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.rus1_div').append('<h3>Количество страниц: 144</h3>')
                    $('.rus1_div').append('<div class="rus1_btns"></div>')
                    $('.rus1_btns').append('<button class="buy">Скачать</button>')
                    $('.rus1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('rus1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice(liked_arr.indexOf('rus1'), 1) 
                        }
                    })
                
                    $('.buy').on('click', function(){
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/russ_jazyk_-uchebnik_-1-kl_-kanakina.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close(); 
                    });
                }
                else {
                    $('body').append('<div class="rus1_card main_card"></div>')

                    $('.rus1_card').append('<img class="rus1_photo main_photo" src="photos/1/rus1.jpg" alt="картинка">')
                    $('.rus1_card').append('<div class="rus1_div main_div"></div>')

                    $('.rus1_div').append('<div class="rus1_2text main_2text"></div>')
                    $('.rus1_2text').append('<h2 class="rus1_h2">Учебник русского языка 1класс</h2>')
                    $('.rus1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.rus1_2text').append('<h1 class="rus1_h1">29Мб</h1>')
                    $('.rus1_h1').css('margin-left', '100px')
                    $('.rus1_h1').css('font-size', '2.5em')
                    $('.rus1_h1').css('color', 'darkred')
                    $('.rus1_div').append('<h3>Авторы: Канакина В.П., Горецкий В.Г.</h3>')
                    $('.rus1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.rus1_div').append('<h3>Предмет: русский язык</h3>')
                    $('.rus1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.rus1_div').append('<h3>Количество страниц: 144</h3>')
                    $('.rus1_div').append('<div class="rus1_btns"></div>')
                    $('.rus1_btns').append('<button class="buy">Скачать</button>')
                    $('.rus1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('rus1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice(liked_arr.indexOf('rus1'), 1) 
                        }
                    })
                
                    $('.buy').on('click', function(){
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/russ_jazyk_-uchebnik_-1-kl_-kanakina.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close(); 
                    }); 
                }
            })

            $('#b1').append('<button class="div_1234" id="math1_1_btn"></button>')
            $('#math1_1_btn').append('<img class="img1" src="photos/1/math1_1.jpg" alt="картинка">')
            $('#math1_1_btn').append('<div id="math1_1"></div>')
            $('#math1_1').append('<h5>Учебник математики 1класс 1ч</h5>')
            $('#math1_1').append('<h3>12.1Мб</h3>')

            $('#math1_1_btn').click(function math1_1() {
                $('.products').remove()

                if ($.inArray('math1_1', liked_arr) !== -1){
                    $('body').append('<div class="math1_1_card main_card"></div>')

                    $('.math1_1_card').append('<img class="math1_1_photo main_photo" src="photos/1/math1_1.jpg" alt="картинка">')
                    $('.math1_1_card').append('<div class="math1_1_div main_div"></div>')

                    $('.math1_1_div').append('<div class="math1_1_2text main_2text"></div>')
                    $('.math1_1_2text').append('<h2 class="math1_1_h2">Учебник математики 1класс 1ч</h2>')
                    $('.math1_1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.math1_1_2text').append('<h1 class="math1_1_h1">12.1Мб</h1>')
                    $('.math1_1_h1').css('margin-left', '100px')
                    $('.math1_1_h1').css('font-size', '2.5em')
                    $('.math1_1_h1').css('color', 'darkred')
                    $('.math1_1_div').append('<h3>Авторы: Моро М.И., Волкова С.И., Степанова С.В.</h3>')
                    $('.math1_1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.math1_1_div').append('<h3>Предмет: математика</h3>')
                    $('.math1_1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.math1_1_div').append('<h3>Количество страниц: 128</h3>')
                    $('.math1_1_div').append('<div class="math1_1_btns"></div>')
                    $('.math1_1_btns').append('<button class="buy">Скачать</button>')
                    $('.math1_1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.push('math1_1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            if (liked_arr.includes('math1_1')) {
                                liked_arr.splice(liked_arr.indexOf('math1_1'), 1)
                            } 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/matemat_-1-kl_-1-ch_-moro.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close();
                    })
                }
                else {
                    $('body').append('<div class="math1_1_card main_card"></div>')

                    $('.math1_1_card').append('<img class="math1_1_photo main_card" src="photos/1/math1_1.jpg" alt="картинка">')
                    $('.math1_1_card').append('<div class="math1_1_div main_div"></div>')

                    $('.math1_1_div').append('<div class="math1_1_2text main_2text"></div>')
                    $('.math1_1_2text').append('<h2 class="math1_1_h2">Учебник математики 1класс 1ч</h2>')
                    $('.math1_1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.math1_1_2text').append('<h1 class="math1_1_h1">12.1Мб</h1>')
                    $('.math1_1_h1').css('margin-left', '100px')
                    $('.math1_1_h1').css('font-size', '2.5em')
                    $('.math1_1_h1').css('color', 'darkred')
                    $('.math1_1_div').append('<h3>Авторы: Моро М.И., Волкова С.И., Степанова С.В.</h3>')
                    $('.math1_1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.math1_1_div').append('<h3>Предмет: математика</h3>')
                    $('.math1_1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.math1_1_div').append('<h3>Количество страниц: 128</h3>')
                    $('.math1_1_div').append('<div class="math1_1_btns"></div>')
                    $('.math1_1_btns').append('<button class="buy">Скачать</button>')
                    $('.math1_1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('math1_1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            if (liked_arr.includes('math1_1')) {
                                liked_arr.splice(liked_arr.indexOf('math1_1'), 1)
                            } 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/matemat_-1-kl_-1-ch_-moro.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close();
                    })
                }
            })

            $('#b1').append('<button class="div_1234" id="math1_2_btn"></button>')
            $('#math1_2_btn').append('<img class="img1" src="photos/1/math1_2.webp" alt="картинка">')
            $('#math1_2_btn').append('<div id="math1_2"></div>')
            $('#math1_2').append('<h5>Учебник математики 1класс 2ч</h5>')
            $('#math1_2').append('<h3>10.7Мб</h3>')
            
            $('#math1_2_btn').click(function math1_2() {
                $('.products').remove()

                if ($.inArray('math1_2', liked_arr) !== -1){
                    $('body').append('<div class="math1_2_card main_card"></div>')

                    $('.math1_2_card').append('<img class="rus1_photo main_photo" src="photos/1/math1_2.webp" alt="картинка">')
                    $('.math1_2_card').append('<div class="math1_2_div main_div"></div>')

                    $('.math1_2_div').append('<div class="math1_2_2text main_2text"></div>')
                    $('.math1_2_2text').append('<h2 class="math1_2_h2">Учебник математики 1класс 2ч</h2>')
                    $('.math1_2_h1').css('color', 'rgb(16, 16, 41);')
                    $('.math1_2_2text').append('<h1 class="math1_2_h1">10.7Мб</h1>')
                    $('.math1_2_h1').css('margin-left', '100px')
                    $('.math1_2_h1').css('font-size', '2.5em')
                    $('.math1_2_h1').css('color', 'darkred')
                    $('.math1_2_div').append('<h3>Авторы: Моро, Волкова, Степанова</h3>')
                    $('.math1_2_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.math1_2_div').append('<h3>Предмет: математика</h3>')
                    $('.math1_2_div').append('<h3>Класс: 1 класс</h3>')
                    $('.math1_2_div').append('<h3>Вес: 252г</h3>')
                    $('.math1_2_div').append('<div class="math1_2_btns"></div>')
                    $('.math1_2_btns').append('<button class="buy">Скачать</button>')
                    $('.math1_2_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('math1_2')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('math1_2', 1) 
                        }

                    })
                }
                else {
                    $('body').append('<div class="math1_2_card main_card"></div>')

                    $('.math1_2_card').append('<img class="rus1_photo main_photo" src="photos/1/math1_2.webp" alt="картинка">')
                    $('.math1_2_card').append('<div class="math1_2_div main_div"></div>')

                    $('.math1_2_div').append('<div class="math1_2_2text main_2text"></div>')
                    $('.math1_2_2text').append('<h2 class="math1_2_h2">Учебник математики 1класс 2ч</h2>')
                    $('.math1_2_h1').css('color', 'rgb(16, 16, 41);')
                    $('.math1_2_2text').append('<h1 class="math1_2_h1">10.7Мб</h1>')
                    $('.math1_2_h1').css('margin-left', '100px')
                    $('.math1_2_h1').css('font-size', '2.5em')
                    $('.math1_2_h1').css('color', 'darkred')
                    $('.math1_2_div').append('<h3>Авторы: Моро, Волкова, Степанова</h3>')
                    $('.math1_2_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.math1_2_div').append('<h3>Предмет: математика</h3>')
                    $('.math1_2_div').append('<h3>Класс: 1 класс</h3>')
                    $('.math1_2_div').append('<h3>Вес: 252г</h3>')
                    $('.math1_2_div').append('<div class="math1_2_btns"></div>')
                    $('.math1_2_btns').append('<button class="buy">Скачать</button>')
                    $('.math1_2_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('math1_2')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('math1_2', 1) 
                        }

                    })
                }

                $('.buy').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/matemat_-1-kl_-2-ch_-moro.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close()
                })
            })

            $('#b1').append('<button class="div_1234" id="chtenie1_1_btn"></button>')
            $('#chtenie1_1_btn').append('<img class="img1" src="photos/1/chtenie1_1.jpg" alt="картинка">')
            $('#chtenie1_1_btn').append('<div id="chtenie1_1"></div>')
            $('#chtenie1_1').append('<h5>Учебник литературного чтения 1класс 1ч</h5>')
            $('#chtenie1_1').append('<h3>18.17Мб</h3>')

            $('#chtenie1_1_btn').click(function chtenie1_1() {
                $('.products').remove()

                if ($.inArray('chtenie1_1', liked_arr) !== -1){
                    $('body').append('<div class="chtenie1_1_card main_card"></div>')

                    $('.chtenie1_1_card').append('<img class="rus1_photo main_photo" src="photos/1/chtenie1_1.jpg" alt="картинка">')
                    $('.chtenie1_1_card').append('<div class="chtenie1_1_div main_div"></div>')

                    $('.chtenie1_1_div').append('<div class="chtenie1_1_2text main_2text"></div>')
                    $('.chtenie1_1_2text').append('<h2 class="chtenie1_1_h2">Учебник чтение 1класс 1ч</h2>')
                    $('.chtenie1_1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.chtenie1_1_2text').append('<h1 class="chtenie1_1_h1">10.7Мб</h1>')
                    $('.chtenie1_1_h1').css('margin-left', '100px')
                    $('.chtenie1_1_h1').css('font-size', '2.5em')
                    $('.chtenie1_1_h1').css('color', 'darkred')
                    $('.chtenie1_1_div').append('<h3>Авторы: Попович О.В., Воробьев А.Г., Салтыков М.М.</h3>')
                    $('.chtenie1_1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.chtenie1_1_div').append('<h3>Предмет: чтение</h3>')
                    $('.chtenie1_1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.chtenie1_1_div').append('<h3>Вес: 188г</h3>')
                    $('.chtenie1_1_div').append('<div class="chtenie1_1_btns"></div>')
                    $('.chtenie1_1_btns').append('<button class="buy">Скачать</button>')
                    $('.chtenie1_1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('chtenie1_1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('chtenie1_1', 1) 
                        }

                    })
                }
                else {
                    $('body').append('<div class="chtenie1_1_card main_card"></div>')

                    $('.chtenie1_1_card').append('<img class="rus1_photo main_photo" src="photos/1/chtenie1_1.jpg" alt="картинка">')
                    $('.chtenie1_1_card').append('<div class="chtenie1_1_div main_div"></div>')

                    $('.chtenie1_1_div').append('<div class="chtenie1_1_2text main_2text"></div>')
                    $('.chtenie1_1_2text').append('<h2 class="chtenie1_1_h2">Учебник чтения 1класс 1ч</h2>')
                    $('.chtenie1_1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.chtenie1_1_2text').append('<h1 class="chtenie1_1_h1">10.7Мб</h1>')
                    $('.chtenie1_1_h1').css('margin-left', '100px')
                    $('.chtenie1_1_h1').css('font-size', '2.5em')
                    $('.chtenie1_1_h1').css('color', 'darkred')
                    $('.chtenie1_1_div').append('<h3>Авторы: Попович О.В., Воробьев А.Г., Салтыков М.М.</h3>')
                    $('.chtenie1_1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.chtenie1_1_div').append('<h3>Предмет: литература</h3>')
                    $('.chtenie1_1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.chtenie1_1_div').append('<h3>Вес: 188г</h3>')
                    $('.chtenie1_1_div').append('<div class="chtenie1_1_btns"></div>')
                    $('.chtenie1_1_btns').append('<button class="buy">Скачать</button>')
                    $('.chtenie1_1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('chtenie1_1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('chtenie1_1', 1) 
                        }

                    })
                }

                $('.buy').click(function() {
                    var newTab = window.open('', '_blank');
                    newTab.document.write('<html><body><a href="files/1/lit_chten_-1-kl_-1-ch_-klimanova.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                    newTab.document.close()
                })
            })

            $('#b1').append('<button class="div_1234" id="chtenie1_2_btn"></button>')
            $('#chtenie1_2_btn').append('<img class="img1" src="photos/1/chtenie1_2.jpg" alt="картинка">')
            $('#chtenie1_2_btn').append('<div id="chtenie1_2"></div>')
            $('#chtenie1_2').append('<h5>Учебник литературного чтения 1класс 2ч</h5>')
            $('#chtenie1_2').append('<h3>18.17Мб</h3>')

            $('#chtenie1_2_btn').click(function chtenie1_1() {
                $('.products').remove()

                if ($.inArray('chtenie1_2', liked_arr) !== -1){
                    $('body').append('<div class="chtenie1_2_card main_card"></div>')

                    $('.chtenie1_2_card').append('<img class="rus1 main_photo" src="photos/1/chtenie1_2.jpg" alt="картинка">')
                    $('.chtenie1_2_card').append('<div class="chtenie1_2_div main_div"></div>')

                    $('.chtenie1_2_div').append('<div class="chtenie1_2_2text main_2text"></div>')
                    $('.chtenie1_2_2text').append('<h2 class="chtenie1_2_h2">Учебник чтения 1класс 2ч</h2>')
                    $('.chtenie1_2_h1').css('color', 'rgb(16, 16, 41);')
                    $('.chtenie1_2_2text').append('<h1 class="chtenie1_2_h1">18.17Мб</h1>')
                    $('.chtenie1_2_h1').css('margin-left', '100px')
                    $('.chtenie1_2_h1').css('font-size', '2.5em')
                    $('.chtenie1_2_h1').css('color', 'darkred')
                    $('.chtenie1_2_div').append('<h3>Авторы: Климанова Л.Ф.</h3>')
                    $('.chtenie1_2_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.chtenie1_2_div').append('<h3>Предмет: чтение</h3>')
                    $('.chtenie1_2_div').append('<h3>Класс: 1 класс</h3>')
                    $('.chtenie1_2_div').append('<h3>Вес: 190г</h3>')
                    $('.chtenie1_2_div').append('<div class="chtenie1_2_btns"></div>')
                    $('.chtenie1_2_btns').append('<button class="buy">Скачать</button>')
                    $('.chtenie1_2_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('chtenie1_2')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('chtenie1_2', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/lit_chten_-1-kl_-2-ch_-klimanova.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
                else {
                    $('body').append('<div class="chtenie1_1_card"></div>')

                    $('.chtenie1_1_card').append('<img class="main_photo" src="photos/1/chtenie1_2.jpg" alt="картинка">')
                    $('.chtenie1_1_card').append('<div class="chtenie1_1_div"></div>')

                    $('.chtenie1_1_div').append('<div class="chtenie1_1_2text"></div>')
                    $('.chtenie1_1_2text').append('<h2 class="chtenie1_1_h2">Учебник чтения 1класс 2ч</h2>')
                    $('.chtenie1_1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.chtenie1_1_2text').append('<h1 class="chtenie1_1_h1">18.17Мб</h1>')
                    $('.chtenie1_1_h1').css('margin-left', '100px')
                    $('.chtenie1_1_h1').css('font-size', '2.5em')
                    $('.chtenie1_1_h1').css('color', 'darkred')
                    $('.chtenie1_1_div').append('<h3>Авторы: Климанова Л.Ф.</h3>')
                    $('.chtenie1_1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.chtenie1_1_div').append('<h3>Предмет: чтение</h3>')
                    $('.chtenie1_1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.chtenie1_1_div').append('<h3>Вес: 190г</h3>')
                    $('.chtenie1_1_div').append('<div class="chtenie1_1_btns"></div>')
                    $('.chtenie1_1_btns').append('<button class="buy">Скачать</button>')
                    $('.chtenie1_1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('chtenie1_2')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('chtenie1_2', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/lit_chten_-1-kl_-2-ch_-klimanova.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
            })

            $('#b1').append('<button class="div_1234" id="tecn1_btn"></button>')
            $('#tecn1_btn').append('<img class="img1" src="photos/1/tecn1.webp" alt="картинка">')
            $('#tecn1_btn').append('<div id="tecn1"></div>')
            $('#tecn1').append('<h5>Учебник технологии 1класс</h5>')
            $('#tecn1').append('<h3>20.93Мб</h3>')

            $('#tecn1_btn').click(function chtenie1_1() {
                $('.products').remove()

                if ($.inArray('tecn1', liked_arr) !== -1){
                    $('body').append('<div class="tecn1_card main_card"></div>')

                    $('.tecn1_card').append('<img class="main_photo" src="photos/1/tecn1.webp" alt="картинка">')
                    $('.tecn1_card').append('<div class="tecn1_div main_div"></div>')

                    $('.tecn1_div').append('<div class="tecn1_2text main_2text"></div>')
                    $('.tecn1_2text').append('<h2 class="tecn1_h2">Учебник технологии 1класс</h2>')
                    $('.tecn1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.tecn1_2text').append('<h1 class="tecn1_h1">20.93Мб</h1>')
                    $('.tecn1_h1').css('margin-left', '100px')
                    $('.tecn1_h1').css('font-size', '2.5em')
                    $('.tecn1_h1').css('color', 'darkred')
                    $('.tecn1_div').append('<h3>Авторы: Мошнина Р.Ш., Погожева А.В.</h3>')
                    $('.tecn1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.tecn1_div').append('<h3>Предмет: технология</h3>')
                    $('.tecn1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.tecn1_div').append('<h3>Вес: 250г</h3>')
                    $('.tecn1_div').append('<div class="tecn1_btns"></div>')
                    $('.tecn1_btns').append('<button class="buy">Скачать</button>')
                    $('.tecn1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('tecn1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('tecn1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/tehnologija_-uchebnik_-1-kl_-lutceva.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
                else {
                    $('body').append('<div class="tecn1_card main_card"></div>')

                    $('.tecn1_card').append('<img class="main_photo" src="photos/1/chtenie1_2.jpg" alt="картинка">')
                    $('.tecn1_card').append('<div class="tecn1_div main_div"></div>')

                    $('.tecn1_div').append('<div class="tecn1_2text main_2text"></div>')
                    $('.tecn1_2text').append('<h2 class="tecn1_h2">Учебник технологии 1класс</h2>')
                    $('.tecn1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.tecn1_2text').append('<h1 class="tecn1_h1">20.93Мб</h1>')
                    $('.tecn1_h1').css('margin-left', '100px')
                    $('.tecn1_h1').css('font-size', '2.5em')
                    $('.tecn1_h1').css('color', 'darkred')
                    $('.tecn1_div').append('<h3>Авторы: Мошнина Р.Ш., Погожева А.В.</h3>')
                    $('.tecn1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.tecn1_div').append('<h3>Предмет: технология</h3>')
                    $('.tecn1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.tecn1_div').append('<h3>Вес: 250г</h3>')
                    $('.tecn1_div').append('<div class="tecn1_btns"></div>')
                    $('.tecn1_btns').append('<button class="buy">Скачать</button>')
                    $('.tecn1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('tecn1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('tecn1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/tehnologija_-uchebnik_-1-kl_-lutceva.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
            })

            $('#b1').append('<button class="div_1234" id="izo1_btn"></button>')
            $('#izo1_btn').append('<img class="img1" src="photos/1/izo1.webp" alt="картинка">')
            $('#izo1_btn').append('<div id="izo1"></div>')
            $('#izo1').append('<h5>Учебник изобразительного искусства 1класс</h5>')
            $('#izo1').append('<h3>12.12Мб</h3>')

            $('#izo1_btn').click(function izo1() {
                $('.products').remove()

                if ($.inArray('izo1', liked_arr) !== -1){
                    $('body').append('<div class="izo1_card main_card"></div>')

                    $('.izo1_card').append('<img class="main_photo" src="photos/1/izo1.webp" alt="картинка">')
                    $('.izo1_card').append('<div class="izo1_div main_div"></div>')

                    $('.izo1_div').append('<div class="izo1_2text main_2text"></div>')
                    $('.izo1_2text').append('<h2 class="izo1_h2">Учебник изобразительного искусства 1класс</h2>')
                    $('.izo1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.izo1_2text').append('<h1 class="izo1_h1">12.12Мб</h1>')
                    $('.izo1_h1').css('margin-left', '100px')
                    $('.izo1_h1').css('font-size', '2.5em')
                    $('.izo1_h1').css('color', 'darkred')
                    $('.izo1_div').append('<h3>Авторы: Неменская Л.А.</h3>')
                    $('.izo1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.izo1_div').append('<h3>Предмет: изобразительное искусство</h3>')
                    $('.izo1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.izo1_div').append('<h3>Вес: 290г</h3>')
                    $('.izo1_div').append('<div class="izo1_btns"></div>')
                    $('.izo1_btns').append('<button class="buy">Скачать</button>')
                    $('.izo1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('izo1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('izo1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/izo_-uchebnik_-1-kl_-nemenskaja_compressed.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
                else {
                    $('body').append('<div class="izo1_card main_card"></div>')

                    $('.izo1_card').append('<img class="main_photo" src="photos/1/chtenie1_2.jpg" alt="картинка">')
                    $('.izo1_card').append('<div class="izo1_div main_div"></div>')

                    $('.izo1_div').append('<div class="izo1_2text main_2text"></div>')
                    $('.izo1_2text').append('<h2 class="izo1_h2">Учебник изобразительного искусства 1класс</h2>')
                    $('.izo1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.izo1_2text').append('<h1 class="izo1_h1">12.12Мб</h1>')
                    $('.izo1_h1').css('margin-left', '100px')
                    $('.izo1_h1').css('font-size', '2.5em')
                    $('.izo1_h1').css('color', 'darkred')
                    $('.izo1_div').append('<h3>Авторы: Неменская Л.А.</h3>')
                    $('.izo1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.izo1_div').append('<h3>Предмет: изобразительное искусство</h3>')
                    $('.izo1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.izo1_div').append('<h3>Вес: 290г</h3>')
                    $('.izo1_div').append('<div class="izo1_btns"></div>')
                    $('.izo1_btns').append('<button class="buy">Скачать</button>')
                    $('.izo1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('izo1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('izo1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/izo_-uchebnik_-1-kl_-nemenskaja_compressed.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
            })

            $('.products').append('<div class="product" id="b2"></div>')

            $('#b2').append('<button class="div_1234" id="om1_1_btn"></button>')
            $('#om1_1_btn').append('<img class="img1" src="photos/1/om1_1.webp" alt="картинка">')
            $('#om1_1_btn').append('<div id="om1_1"></div>')
            $('#om1_1').append('<h5>Учебник окружающего мира 1класс 1ч</h5>')
            $('#om1_1').append('<h3>8.7Мб</h3>')

            $('#om1_1_btn').click(function om1_1() {
                $('.products').remove()

                if ($.inArray('om1_1', liked_arr) !== -1){
                    $('body').append('<div class="om1_1_card main_card"></div>')

                    $('.om1_1_card').append('<img class="main_photo" src="photos/1/om1_1.webp" alt="картинка">')
                    $('.om1_1_card').append('<div class="om1_1_div main_div"></div>')

                    $('.om1_1_div').append('<div class="om1_1_2text main_2text"></div>')
                    $('.om1_1_2text').append('<h2 class="om1_1_h2">Учебник окружающий мир 1класс 1ч</h2>')
                    $('.om1_1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.om1_1_2text').append('<h1 class="om1_1_h1">8.7Мб</h1>')
                    $('.om1_1_h1').css('margin-left', '100px')
                    $('.om1_1_h1').css('font-size', '2.5em')
                    $('.om1_1_h1').css('color', 'darkred')
                    $('.om1_1_div').append('<h3>Авторы: Неменская Л.А.</h3>')
                    $('.om1_1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.om1_1_div').append('<h3>Предмет: окружающий мир</h3>')
                    $('.om1_1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.om1_1_div').append('<h3>Вес: 277г</h3>')
                    $('.om1_1_div').append('<div class="om1_1_btns"></div>')
                    $('.om1_1_btns').append('<button class="buy">Скачать</button>')
                    $('.om1_1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('om1_1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('om1_1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/okruzh_-mir_-1-kl_-1-ch_-pleshakov.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
                else {
                    $('body').append('<div class="om1_1_card main_card"></div>')

                    $('.om1_1_card').append('<img class="main_photo" src="photos/1/om1_1.webp" alt="картинка">')
                    $('.om1_1_card').append('<div class="om1_1_div main_div"></div>')

                    $('.om1_1_div').append('<div class="om1_1_2text main_2text"></div>')
                    $('.om1_1_2text').append('<h2 class="om1_1_h2">Учебник окружающего мира 1класс 1ч</h2>')
                    $('.om1_1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.om1_1_2text').append('<h1 class="om1_1_h1">8.7Мб</h1>')
                    $('.om1_1_h1').css('margin-left', '100px')
                    $('.om1_1_h1').css('font-size', '2.5em')
                    $('.om1_1_h1').css('color', 'darkred')
                    $('.om1_1_div').append('<h3>Авторы: Неменская Л.А.</h3>')
                    $('.om1_1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.om1_1_div').append('<h3>Предмет: окружающий мир</h3>')
                    $('.om1_1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.om1_1_div').append('<h3>Вес: 277г</h3>')
                    $('.om1_1_div').append('<div class="om1_1_btns"></div>')
                    $('.om1_1_btns').append('<button class="buy">Скачать</button>')
                    $('.om1_1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('om1_1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('om1_1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/okruzh_-mir_-1-kl_-1-ch_-pleshakov.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
            })

            $('#b2').append('<button class="div_1234" id="om1_2_btn"></button>')
            $('#om1_2_btn').append('<img class="img1" src="photos/1/om1_2.jpg" alt="картинка">')
            $('#om1_2_btn').append('<div id="om1_2"></div>')
            $('#om1_2').append('<h5>Учебник окружающего мира 1класс 2ч</h5>')
            $('#om1_2').append('<h3>9Мб</h3>')

            $('#om1_2_btn').click(function om1_2() {
                $('.products').remove()

                if ($.inArray('om1_2', liked_arr) !== -1){
                    $('body').append('<div class="om1_2_card main_card"></div>')

                    $('.om1_2_card').append('<img class="main_photo" src="photos/1/om1_2.jpg" alt="картинка">')
                    $('.om1_2_card').append('<div class="om1_2_div main_div"></div>')

                    $('.om1_2_div').append('<div class="om1_2_2text main_2text"></div>')
                    $('.om1_2_2text').append('<h2 class="om1_2_h2">Учебник окружающего мира 1класс 2ч</h2>')
                    $('.om1_2_h1').css('color', 'rgb(16, 16, 41);')
                    $('.om1_2_2text').append('<h1 class="om1_2_h1">9Мб</h1>')
                    $('.om1_2_h1').css('margin-left', '100px')
                    $('.om1_2_h1').css('font-size', '2.5em')
                    $('.om1_2_h1').css('color', 'darkred')
                    $('.om1_2_div').append('<h3>Авторы: Плешаков А.А.</h3>')
                    $('.om1_2_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.om1_2_div').append('<h3>Предмет: окружающий мир</h3>')
                    $('.om1_2_div').append('<h3>Класс: 1 класс</h3>')
                    $('.om1_2_div').append('<h3>Вес: 223г</h3>')
                    $('.om1_2_div').append('<div class="om1_2_btns"></div>')
                    $('.om1_2_btns').append('<button class="buy">Скачать</button>')
                    $('.om1_2_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('om1_2')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('om1_2', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/okruzh_-mir_-1-kl_-2-ch_-pleshakov.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
                else {
                    $('body').append('<div class="om1_2_card main_card"></div>')

                    $('.om1_2_card').append('<img class="main_photo" src="photos/1/om1_2.jpg" alt="картинка">')
                    $('.om1_2_card').append('<div class="om1_2_div main_div"></div>')

                    $('.om1_2_div').append('<div class="om1_2_2text main_2text"></div>')
                    $('.om1_2_2text').append('<h2 class="om1_2_h2">Учебник окружающего мира 1класс 2ч</h2>')
                    $('.om1_2_h1').css('color', 'rgb(16, 16, 41);')
                    $('.om1_2_2text').append('<h1 class="om1_2_h1">9Мб</h1>')
                    $('.om1_2_h1').css('margin-left', '100px')
                    $('.om1_2_h1').css('font-size', '2.5em')
                    $('.om1_2_h1').css('color', 'darkred')
                    $('.om1_2_div').append('<h3>Авторы: Плешаков А.А.</h3>')
                    $('.om1_2_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.om1_2_div').append('<h3>Предмет: окружающий мир</h3>')
                    $('.om1_2_div').append('<h3>Класс: 1 класс</h3>')
                    $('.om1_2_div').append('<h3>Вес: 223г</h3>')
                    $('.om1_2_div').append('<div class="om1_2_btns"></div>')
                    $('.om1_2_btns').append('<button class="buy">Скачать</button>')
                    $('.om1_2_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('om1_2')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('om1_2', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/okruzh_-mir_-1-kl_-2-ch_-pleshakov.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
            })

            $('#b2').append('<button class="div_1234" id="mus1_btn"></button>')
            $('#mus1_btn').append('<img class="img1" src="photos/1/mus1.jpg" alt="картинка">')
            $('#mus1_btn').append('<div id="mus1"></div>')
            $('#mus1').append('<h5>Учебник музыки 1класс</h5>')
            $('#mus1').append('<h3>12.3Мб</h3>')

            $('#mus1_btn').click(function mus1() {
                $('.products').remove()

                if ($.inArray('mus1', liked_arr) !== -1){
                    $('body').append('<div class="mus1_card main_card"></div>')

                    $('.mus1_card').append('<img class="main_photo" src="photos/1/mus1.jpg" alt="картинка">')
                    $('.mus1_card').append('<div class="mus1_div main_div"></div>')

                    $('.mus1_div').append('<div class="mus1_2text main_2text"></div>')
                    $('.mus1_2text').append('<h2 class="mus1_h2">Учебник музыки 1класс</h2>')
                    $('.mus1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.mus1_2text').append('<h1 class="mus1_h1">12.3Мб</h1>')
                    $('.mus1_h1').css('margin-left', '100px')
                    $('.mus1_h1').css('font-size', '2.5em')
                    $('.mus1_h1').css('color', 'darkred')
                    $('.mus1_div').append('<h3>Авторы: Критская Е. Д., Сергеева Г. П., Шмагина Т. С.</h3>')
                    $('.mus1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.mus1_div').append('<h3>Предмет: изобразительное искусство</h3>')
                    $('.mus1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.mus1_div').append('<h3>Вес: 250г</h3>')
                    $('.mus1_div').append('<div class="mus1_btns"></div>')
                    $('.mus1_btns').append('<button class="buy">Скачать</button>')
                    $('.mus1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('mus1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('mus1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/muzyka_-uchebnik_-1-kl_-kritskaja.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
                else {
                    $('body').append('<div class="mus1_card main_card"></div>')

                    $('.mus1_card').append('<img class="main_photo" src="photos/1/mus1.jpg" alt="картинка">')
                    $('.mus1_card').append('<div class="mus1_div main_div"></div>')

                    $('.mus1_div').append('<div class="mus1_2text main_2text"></div>')
                    $('.mus1_2text').append('<h2 class="mus1_h2">Учебник музыки 1класс</h2>')
                    $('.mus1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.mus1_2text').append('<h1 class="mus1_h1">12.3Мб</h1>')
                    $('.mus1_h1').css('margin-left', '100px')
                    $('.mus1_h1').css('font-size', '2.5em')
                    $('.mus1_h1').css('color', 'darkred')
                    $('.mus1_div').append('<h3>Авторы: Критская Е. Д., Сергеева Г. П., Шмагина Т. С.</h3>')
                    $('.mus1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.mus1_div').append('<h3>Предмет: изобразительное искусство</h3>')
                    $('.mus1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.mus1_div').append('<h3>Вес: 250г</h3>')
                    $('.mus1_div').append('<div class="mus1_btns"></div>')
                    $('.mus1_btns').append('<button class="buy">Скачать</button>')
                    $('.mus1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('mus1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('mus1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/muzyka_-uchebnik_-1-kl_-kritskaja.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
            })

            $('#b2').append('<button class="div_1234" id="pe1_btn"></button>')
            $('#pe1_btn').append('<img class="img1" src="photos/1/pe1.jpg" alt="картинка">')
            $('#pe1_btn').append('<div id="pe1"></div>')
            $('#pe1').append('<h5>Учебник физкультуры 1класс</h5>')
            $('#pe1').append('<h3>10.7Мб</h3>')

            $('#pe1_btn').click(function pe1() {
                $('.products').remove()

                if ($.inArray('pe1', liked_arr) !== -1){
                    $('body').append('<div class="pe1_card main_card"></div>')

                    $('.pe1_card').append('<img class="main_photo" src="photos/1/pe1.jpg" alt="картинка">')
                    $('.pe1_card').append('<div class="pe1_div main_div"></div>')

                    $('.pe1_div').append('<div class="pe1_2text main_2text"></div>')
                    $('.pe1_2text').append('<h2 class="pe1_h2">Учебник физкультуры 1класс</h2>')
                    $('.pe1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.pe1_2text').append('<h1 class="pe1_h1">10.7Мб</h1>')
                    $('.pe1_h1').css('margin-left', '100px')
                    $('.pe1_h1').css('font-size', '2.5em')
                    $('.pe1_h1').css('color', 'darkred')
                    $('.pe1_div').append('<h3>Авторы: Осипов Ю.С.</h3>')
                    $('.pe1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.pe1_div').append('<h3>Предмет: физкультура</h3>')
                    $('.pe1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.pe1_div').append('<h3>Вес: 210г</h3>')
                    $('.pe1_div').append('<div class="pe1_btns"></div>')
                    $('.pe1_btns').append('<button class="buy">Скачать</button>')
                    $('.pe1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/clicked_heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('pe1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('pe1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/fizkultura_-uchebnik_-1-kl_-matveev-1.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
                else {
                    $('body').append('<div class="pe1_card main_card"></div>')

                    $('.pe1_card').append('<img class="main_photo" src="photos/1/pe1.jpg" alt="картинка">')
                    $('.pe1_card').append('<div class="pe1_div main_div"></div>')

                    $('.pe1_div').append('<div class="pe1_2text main_2text"></div>')
                    $('.pe1_2text').append('<h2 class="pe1_h2">Учебник физкультуры 1класс</h2>')
                    $('.pe1_h1').css('color', 'rgb(16, 16, 41);')
                    $('.pe1_2text').append('<h1 class="pe1_h1">10.7Мб</h1>')
                    $('.pe1_h1').css('margin-left', '100px')
                    $('.pe1_h1').css('font-size', '2.5em')
                    $('.pe1_h1').css('color', 'darkred')
                    $('.pe1_div').append('<h3>Авторы: Осипов Ю.С.</h3>')
                    $('.pe1_div').append('<h3>Издательство: Просвещение</h3>')
                    $('.pe1_div').append('<h3>Предмет: физкультура</h3>')
                    $('.pe1_div').append('<h3>Класс: 1 класс</h3>')
                    $('.pe1_div').append('<h3>Вес: 210г</h3>')
                    $('.pe1_div').append('<div class="pe1_btns"></div>')
                    $('.pe1_btns').append('<button class="buy">Скачать</button>')
                    $('.pe1_btns').append('<button class="heart_btn"></button>')
                    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')

                    $('.heart_btn').click(function() {
                        var heart_img = $('#heart')
                        click_checker();
                        if (heart_img.attr('src') == 'photos/heart.png') {
                            $('.heart').attr('src', 'photos/clicked_heart.png');
                            liked_arr.push('pe1')
                        } 
                        else {
                            $('.heart').attr('src', 'photos/heart.png');
                            liked_arr.splice('pe1', 1) 
                        }

                    })

                    $('.buy').click(function() {
                        var newTab = window.open('', '_blank');
                        newTab.document.write('<html><body><a href="files/1/fizkultura_-uchebnik_-1-kl_-matveev-1.pdf" class="btn btn-success download" download>Скачать</a></body></html>');
                        newTab.document.close()
                    })
                }
            })
        })

        $('.subcat1_2').click(function() {
            $('.category').remove()
            $('.subcategory').remove()

            $('body').append('<div class="products"></div>')
            
            $('.products').append('<div class="product" id="b3"></div>')

            $('#b3').append('<button class="div_1234" id="rus2_1_btn"></button>')
            $('#rus2_1_btn').append('<img class="img1" src="photos/2/rus2_1.jpg" alt="картинка">')
            $('#rus2_1_btn').append('<div id="rus2_1"></div>')
            $('#rus2_1').append('<h5>Учебник русского языка 2класс 1ч</h5>')
            $('#rus2_1').append('<h3>700₽</h3>')

            //$('#rus1_btn').click(function rus1() {
            //    $('.products').remove()
//
            //    $('body').append('<div class="rus1_card"></div>')
//
            //    $('.rus1_card').append('<img class="rus1_photo" src="photos/1/rus1.jpg" alt="картинка">')
            //    $('.rus1_card').append('<div class="rus1_div"></div>')
//
            //    $('.rus1_div').append('<div class="rus1_2text"></div>')
            //    $('.rus1_2text').append('<h2 class="rus1_h2">Учебник русского языка 1класс</h2>')
            //    $('.rus1_h1').css('color', 'rgb(16, 16, 41);')
            //    $('.rus1_2text').append('<h1 class="rus1_h1">900₽</h1>')
            //    $('.rus1_h1').css('margin-left', '100px')
            //    $('.rus1_h1').css('font-size', '2.5em')
            //    $('.rus1_h1').css('color', 'darkred')
            //    $('.rus1_div').append('<h3>Авторы: Канакина В.П., Горецкий В.Г.</h3>')
            //    $('.rus1_div').append('<h3>Издательство: Просвещение</h3>')
            //    $('.rus1_div').append('<h3>Предмет: русский язык</h3>')
            //    $('.rus1_div').append('<h3>Класс: 1 класс</h3>')
            //    $('.rus1_div').append('<h3>Вес: 268г</h3>')
            //    $('.rus1_div').append('<div class="rus1_btns"></div>')
            //    $('.rus1_btns').append('<button class="buy">Купить</button>')
            //    $('.rus1_btns').append('<button class="heart_btn"></button>')
            //    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')
//
            //    $('.heart_btn').click(function() {
            //        var heart_img = $('#heart')
            //        
            //        if (heart_img.attr('src') == 'photos/heart.png') {
            //            $('.heart').attr('src', 'photos/clicked_heart.png');
            //            liked_arr.push('rus1')
            //        } 
            //        else {
            //            $('.heart').attr('src', 'photos/heart.png');
            //            liked_arr.splice('rus1', 1) 
            //        }
            //        click_checker();
            //    })
//
            //    $('.buy').click(function() {
            //        buy_arr.push('rus1')
            //        prices.push(900)
            //        click_checker();
            //    })
            //})

            $('#b3').append('<button class="div_1234" id="rus2_2_btn"></button>')
            $('#rus2_2_btn').append('<img class="img1" src="photos/2/rus2_2.webp" alt="картинка">')
            $('#rus2_2_btn').append('<div id="rus2_2"></div>')
            $('#rus2_2').append('<h5>Учебник русского языка 2класс 2ч</h5>')
            $('#rus2_2').append('<h3>1000₽</h3>')

            $('#b3').append('<button class="div_1234" id="math2_1_btn"></button>')
            $('#math2_1_btn').append('<img class="img1" src="photos/2/math2_1.jpg" alt="картинка">')
            $('#math2_1_btn').append('<div id="math2_1"></div>')
            $('#math2_1').append('<h5>Учебник математики 2класс 1ч</h5>')
            $('#math2_1').append('<h3>800₽</h3>')

            //$('#math1_1_btn').click(function math1_1() {
            //    $('.products').remove()
//
            //    $('body').append('<div class="math1_1_card"></div>')
//
            //    $('.math1_1_card').append('<img class="math1_1_photo" src="photos/1/math1_1.jpg" alt="картинка">')
            //    $('.math1_1_card').append('<div class="math1_1_div"></div>')
//
            //    $('.math1_1_div').append('<div class="math1_1_2text"></div>')
            //    $('.math1_1_2text').append('<h2 class="math1_1_h2">Учебник математики 1класс 1ч</h2>')
            //    $('.math1_1_h1').css('color', 'rgb(16, 16, 41);')
            //    $('.math1_1_2text').append('<h1 class="math1_1_h1">1000₽</h1>')
            //    $('.math1_1_h1').css('margin-left', '100px')
            //    $('.math1_1_h1').css('font-size', '2.5em')
            //    $('.math1_1_h1').css('color', 'darkred')
            //    $('.math1_1_div').append('<h3>Авторы: Моро М.И., Волкова С.И., Степанова С.В.</h3>')
            //    $('.math1_1_div').append('<h3>Издательство: Просвещение</h3>')
            //    $('.math1_1_div').append('<h3>Предмет: математика</h3>')
            //    $('.math1_1_div').append('<h3>Класс: 1 класс</h3>')
            //    $('.math1_1_div').append('<h3>Вес: 268г</h3>')
            //    $('.math1_1_div').append('<div class="math1_1_btns"></div>')
            //    $('.math1_1_btns').append('<button class="buy">Купить</button>')
            //    $('.math1_1_btns').append('<button class="heart_btn"></button>')
            //    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')
//
            //    $('.heart_btn').click(function() {
            //        var heart_img = $('#heart')
            //        click_checker();
            //        if (heart_img.attr('src') == 'photos/heart.png') {
            //            $('.heart').attr('src', 'photos/clicked_heart.png');
            //            liked_arr.push('math1_1')
            //        } 
            //        else {
            //            $('.heart').attr('src', 'photos/heart.png');
            //            if (liked_arr.includes('math1_1')) {
            //                liked_arr.splice(liked_arr.indexOf('math1_1'), 1)
            //            } 
            //        }
            //        
            //    })
//
            //    $('.buy').click(function() {
            //        buy_arr.push('math1_1')
            //        prices.push(1000)
            //        click_checker();
            //    })
            //})

            $('#b3').append('<button class="div_1234" id="math2_2_btn"></button>')
            $('#math2_2_btn').append('<img class="img1" src="photos/2/math2_2.jpeg" alt="картинка">')
            $('#math2_2_btn').append('<div id="math2_2"></div>')
            $('#math2_2').append('<h5>Учебник математики 2класс 2ч</h5>')
            $('#math2_2').append('<h3>900₽</h3>')
            
            //$('#math1_2_btn').click(function math1_2() {
            //    $('.products').remove()
//
            //    $('body').append('<div class="math1_2_card"></div>')
//
            //    $('.math1_2_card').append('<img class="rus1_photo" src="photos/1/rus1.jpg" alt="картинка">')
            //    $('.math1_2_card').append('<div class="math1_2_div"></div>')
//
            //    $('.math1_2_div').append('<div class="math1_2_2text"></div>')
            //    $('.math1_2_2text').append('<h2 class="math1_2_h2">Учебник русского языка 1класс</h2>')
            //    $('.math1_2_h1').css('color', 'rgb(16, 16, 41);')
            //    $('.math1_2_2text').append('<h1 class="math1_2_h1">900₽</h1>')
            //    $('.math1_2_h1').css('margin-left', '100px')
            //    $('.math1_2_h1').css('font-size', '2.5em')
            //    $('.math1_2_h1').css('color', 'darkred')
            //    $('.math1_2_div').append('<h3>Авторы: Канакина В.П., Горецкий В.Г.</h3>')
            //    $('.math1_2_div').append('<h3>Издательство: Просвещение</h3>')
            //    $('.math1_2_div').append('<h3>Предмет: русский язык</h3>')
            //    $('.math1_2_div').append('<h3>Класс: 1 класс</h3>')
            //    $('.math1_2_div').append('<h3>Вес: 268г</h3>')
            //    $('.math1_2_div').append('<div class="math1_2_btns"></div>')
            //    $('.math1_2_btns').append('<button class="buy">Купить</button>')
            //    $('.math1_2_btns').append('<button class="heart_btn"></button>')
            //    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')
//
            //    $('.heart_btn').click(function() {
            //        var heart_img = $('#heart')
            //        click_checker();
            //        if (heart_img.attr('src') == 'photos/heart.png') {
            //            $('.heart').attr('src', 'photos/clicked_heart.png');
            //            liked_arr.push('math1_2')
            //        } 
            //        else {
            //            $('.heart').attr('src', 'photos/heart.png');
            //            liked_arr.splice('math1_2', 1) 
            //        }
            //        
            //    })
//
            //    $('.buy').click(function() {
            //        buy_arr.push('math1_2')
            //        click_checker();
            //    })
            //})

            $('#b3').append('<button class="div_1234" id="chtenie2_1_btn"></button>')
            $('#chtenie2_1_btn').append('<img class="img1" src="photos/2/chtenie2_1.jpeg" alt="картинка">')
            $('#chtenie2_1_btn').append('<div id="chtenie2_1"></div>')
            $('#chtenie2_1').append('<h5>Учебник литературного чтения 2класс 1ч</h5>')
            $('#chtenie2_1').append('<h3>500₽</h3>')

            $('#b3').append('<button class="div_1234" id="chtenie2_2_btn"></button>')
            $('#chtenie2_2_btn').append('<img class="img1" src="photos/2/chtenie2_2.webp" alt="картинка">')
            $('#chtenie2_2_btn').append('<div id="chtenie2_2"></div>')
            $('#chtenie2_2').append('<h5>Учебник литературного чтения 2класс 2ч</h5>')
            $('#chtenie2_2').append('<h3>800₽</h3>')

            $('#b3').append('<button class="div_1234" id="tecn2_btn"></button>')
            $('#tecn2_btn').append('<img class="img1" src="photos/2/tecn2.webp" alt="картинка">')
            $('#tecn2_btn').append('<div id="tecn2"></div>')
            $('#tecn2').append('<h5>Учебник технологии 2класс</h5>')
            $('#tecn2').append('<h3>1000₽</h3>')


            $('.products').append('<div class="product" id="b4"></div>')
            
            $('#b4').append('<button class="div_1234" id="izo2_btn"></button>')
            $('#izo2_btn').append('<img class="img1" src="photos/2/izo2.webp" alt="картинка">')
            $('#izo2_btn').append('<div id="izo2"></div>')
            $('#izo2').append('<h5>Учебник изобразительного искусства 2класс</h5>')
            $('#izo2').append('<h3>700₽</h3>')

            $('#b4').append('<button class="div_1234" id="om2_1_btn"></button>')
            $('#om2_1_btn').append('<img class="img1" src="photos/2/om2_1.webp" alt="картинка">')
            $('#om2_1_btn').append('<div id="om2_1"></div>')
            $('#om2_1').append('<h5>Учебник окружающего мира 2класс 1ч</h5>')
            $('#om2_1').append('<h3>500₽</h3>')

            $('#b4').append('<button class="div_1234" id="om2_2_btn"></button>')
            $('#om2_2_btn').append('<img class="img1" src="photos/2/om2_2.webp" alt="картинка">')
            $('#om2_2_btn').append('<div id="om2_2"></div>')
            $('#om2_2').append('<h5>Учебник окружающего мира 2класс 2ч</h5>')
            $('#om2_2').append('<h3>400₽</h3>')

            $('#b4').append('<button class="div_1234" id="mus2_btn"></button>')
            $('#mus2_btn').append('<img class="img1" src="photos/2/mus2.webp" alt="картинка">')
            $('#mus2_btn').append('<div id="mus2"></div>')
            $('#mus2').append('<h5>Учебник музыки 2класс</h5>')
            $('#mus2').append('<h3>600₽</h3>')

            $('#b4').append('<button class="div_1234" id="pe2_btn"></button>')
            $('#pe2_btn').append('<img class="img1" src="photos/2/pe2.jpg" alt="картинка">')
            $('#pe2_btn').append('<div id="pe2"></div>')
            $('#pe2').append('<h5>Учебник физкультуры 2класс</h5>')
            $('#pe2').append('<h3>700₽</h3>')

            $('#b4').append('<button class="div_1234" id="english2_1_btn"></button>')
            $('#english2_1_btn').append('<img class="img1" src="photos/2/english2_1.webp" alt="картинка">')
            $('#english2_1_btn').append('<div id="english2_1"></div>')
            $('#english2_1').append('<h5>Учебник английского языка 2класс 1ч</h5>')
            $('#english2_1').append('<h3>800₽</h3>')

            $('#b4').append('<button class="div_1234" id="english2_2_btn"></button>')
            $('#english2_2_btn').append('<img class="img1" src="photos/2/english2_2.jpg" alt="картинка">')
            $('#english2_2_btn').append('<div id="english2_2"></div>')
            $('#english2_2').append('<h5>Учебник английского языка 2класс 2ч</h5>')
            $('#english2_2').append('<h3>500₽</h3>')
        })
        $('.subcat1_3').click(function() {
            $('.category').remove()
            $('.subcategory').remove()

            $('body').append('<div class="products"></div>')
            
            $('.products').append('<div class="product" id="b5"></div>')

            $('#b5').append('<button class="div_1234" id="rus3_1_btn"></button>')
            $('#rus3_1_btn').append('<img class="img1" src="photos/3/rus3_1.jpg" alt="картинка">')
            $('#rus3_1_btn').append('<div id="rus3_1"></div>')
            $('#rus3_1').append('<h5>Учебник русского языка 3класс 1ч</h5>')
            $('#rus3_1').append('<h3>700₽</h3>')

            //$('#rus1_btn').click(function rus1() {
            //    $('.products').remove()
//
            //    $('body').append('<div class="rus1_card"></div>')
//
            //    $('.rus1_card').append('<img class="rus1_photo" src="photos/1/rus1.jpg" alt="картинка">')
            //    $('.rus1_card').append('<div class="rus1_div"></div>')
//
            //    $('.rus1_div').append('<div class="rus1_2text"></div>')
            //    $('.rus1_2text').append('<h2 class="rus1_h2">Учебник русского языка 1класс</h2>')
            //    $('.rus1_h1').css('color', 'rgb(16, 16, 41);')
            //    $('.rus1_2text').append('<h1 class="rus1_h1">900₽</h1>')
            //    $('.rus1_h1').css('margin-left', '100px')
            //    $('.rus1_h1').css('font-size', '2.5em')
            //    $('.rus1_h1').css('color', 'darkred')
            //    $('.rus1_div').append('<h3>Авторы: Канакина В.П., Горецкий В.Г.</h3>')
            //    $('.rus1_div').append('<h3>Издательство: Просвещение</h3>')
            //    $('.rus1_div').append('<h3>Предмет: русский язык</h3>')
            //    $('.rus1_div').append('<h3>Класс: 1 класс</h3>')
            //    $('.rus1_div').append('<h3>Вес: 268г</h3>')
            //    $('.rus1_div').append('<div class="rus1_btns"></div>')
            //    $('.rus1_btns').append('<button class="buy">Купить</button>')
            //    $('.rus1_btns').append('<button class="heart_btn"></button>')
            //    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')
//
            //    $('.heart_btn').click(function() {
            //        var heart_img = $('#heart')
            //        
            //        if (heart_img.attr('src') == 'photos/heart.png') {
            //            $('.heart').attr('src', 'photos/clicked_heart.png');
            //            liked_arr.push('rus1')
            //        } 
            //        else {
            //            $('.heart').attr('src', 'photos/heart.png');
            //            liked_arr.splice('rus1', 1) 
            //        }
            //        click_checker();
            //    })
//
            //    $('.buy').click(function() {
            //        buy_arr.push('rus1')
            //        prices.push(900)
            //        click_checker();
            //    })
            //})

            $('#b5').append('<button class="div_1234" id="rus3_2_btn"></button>')
            $('#rus3_2_btn').append('<img class="img1" src="photos/3/rus3_2.webp" alt="картинка">')
            $('#rus3_2_btn').append('<div id="rus3_2"></div>')
            $('#rus3_2').append('<h5>Учебник русского языка 3класс 2ч</h5>')
            $('#rus3_2').append('<h3>1000₽</h3>')

            $('#b5').append('<button class="div_1234" id="math3_1_btn"></button>')
            $('#math3_1_btn').append('<img class="img1" src="photos/3/math3_1.webp" alt="картинка">')
            $('#math3_1_btn').append('<div id="math3_1"></div>')
            $('#math3_1').append('<h5>Учебник математики 3класс 1ч</h5>')
            $('#math3_1').append('<h3>800₽</h3>')

            //$('#math1_1_btn').click(function math1_1() {
            //    $('.products').remove()
//
            //    $('body').append('<div class="math1_1_card"></div>')
//
            //    $('.math1_1_card').append('<img class="math1_1_photo" src="photos/1/math1_1.jpg" alt="картинка">')
            //    $('.math1_1_card').append('<div class="math1_1_div"></div>')
//
            //    $('.math1_1_div').append('<div class="math1_1_2text"></div>')
            //    $('.math1_1_2text').append('<h2 class="math1_1_h2">Учебник математики 1класс 1ч</h2>')
            //    $('.math1_1_h1').css('color', 'rgb(16, 16, 41);')
            //    $('.math1_1_2text').append('<h1 class="math1_1_h1">1000₽</h1>')
            //    $('.math1_1_h1').css('margin-left', '100px')
            //    $('.math1_1_h1').css('font-size', '2.5em')
            //    $('.math1_1_h1').css('color', 'darkred')
            //    $('.math1_1_div').append('<h3>Авторы: Моро М.И., Волкова С.И., Степанова С.В.</h3>')
            //    $('.math1_1_div').append('<h3>Издательство: Просвещение</h3>')
            //    $('.math1_1_div').append('<h3>Предмет: математика</h3>')
            //    $('.math1_1_div').append('<h3>Класс: 1 класс</h3>')
            //    $('.math1_1_div').append('<h3>Вес: 268г</h3>')
            //    $('.math1_1_div').append('<div class="math1_1_btns"></div>')
            //    $('.math1_1_btns').append('<button class="buy">Купить</button>')
            //    $('.math1_1_btns').append('<button class="heart_btn"></button>')
            //    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')
//
            //    $('.heart_btn').click(function() {
            //        var heart_img = $('#heart')
            //        click_checker();
            //        if (heart_img.attr('src') == 'photos/heart.png') {
            //            $('.heart').attr('src', 'photos/clicked_heart.png');
            //            liked_arr.push('math1_1')
            //        } 
            //        else {
            //            $('.heart').attr('src', 'photos/heart.png');
            //            if (liked_arr.includes('math1_1')) {
            //                liked_arr.splice(liked_arr.indexOf('math1_1'), 1)
            //            } 
            //        }
            //        
            //    })
//
            //    $('.buy').click(function() {
            //        buy_arr.push('math1_1')
            //        prices.push(1000)
            //        click_checker();
            //    })
            //})

            $('#b5').append('<button class="div_1234" id="math3_2_btn"></button>')
            $('#math3_2_btn').append('<img class="img1" src="photos/3/math3_2.webp" alt="картинка">')
            $('#math3_2_btn').append('<div id="math3_2"></div>')
            $('#math3_2').append('<h5>Учебник математики 3класс 2ч</h5>')
            $('#math3_2').append('<h3>900₽</h3>')
            
            //$('#math1_2_btn').click(function math1_2() {
            //    $('.products').remove()
//
            //    $('body').append('<div class="math1_2_card"></div>')
//
            //    $('.math1_2_card').append('<img class="rus1_photo" src="photos/1/rus1.jpg" alt="картинка">')
            //    $('.math1_2_card').append('<div class="math1_2_div"></div>')
//
            //    $('.math1_2_div').append('<div class="math1_2_2text"></div>')
            //    $('.math1_2_2text').append('<h2 class="math1_2_h2">Учебник русского языка 1класс</h2>')
            //    $('.math1_2_h1').css('color', 'rgb(16, 16, 41);')
            //    $('.math1_2_2text').append('<h1 class="math1_2_h1">900₽</h1>')
            //    $('.math1_2_h1').css('margin-left', '100px')
            //    $('.math1_2_h1').css('font-size', '2.5em')
            //    $('.math1_2_h1').css('color', 'darkred')
            //    $('.math1_2_div').append('<h3>Авторы: Канакина В.П., Горецкий В.Г.</h3>')
            //    $('.math1_2_div').append('<h3>Издательство: Просвещение</h3>')
            //    $('.math1_2_div').append('<h3>Предмет: русский язык</h3>')
            //    $('.math1_2_div').append('<h3>Класс: 1 класс</h3>')
            //    $('.math1_2_div').append('<h3>Вес: 268г</h3>')
            //    $('.math1_2_div').append('<div class="math1_2_btns"></div>')
            //    $('.math1_2_btns').append('<button class="buy">Купить</button>')
            //    $('.math1_2_btns').append('<button class="heart_btn"></button>')
            //    $('.heart_btn').append('<img class="heart" id="heart" src="photos/heart.png" alt="картинка">')
//
            //    $('.heart_btn').click(function() {
            //        var heart_img = $('#heart')
            //        click_checker();
            //        if (heart_img.attr('src') == 'photos/heart.png') {
            //            $('.heart').attr('src', 'photos/clicked_heart.png');
            //            liked_arr.push('math1_2')
            //        } 
            //        else {
            //            $('.heart').attr('src', 'photos/heart.png');
            //            liked_arr.splice('math1_2', 1) 
            //        }
            //        
            //    })
//
            //    $('.buy').click(function() {
            //        buy_arr.push('math1_2')
            //        click_checker();
            //    })
            //})

            $('#b5').append('<button class="div_1234" id="chtenie3_1_btn"></button>')
            $('#chtenie3_1_btn').append('<img class="img1" src="photos/3/chtenie3_1.jpg" alt="картинка">')
            $('#chtenie3_1_btn').append('<div id="chtenie3_1"></div>')
            $('#chtenie3_1').append('<h5>Учебник литературного чтения 3класс 1ч</h5>')
            $('#chtenie3_1').append('<h3>500₽</h3>')

            $('#b5').append('<button class="div_1234" id="chtenie3_2_btn"></button>')
            $('#chtenie3_2_btn').append('<img class="img1" src="photos/3/chtenie3_2.webp" alt="картинка">')
            $('#chtenie3_2_btn').append('<div id="chtenie3_2"></div>')
            $('#chtenie3_2').append('<h5>Учебник литературного чтения 3класс 2ч</h5>')
            $('#chtenie3_2').append('<h3>800₽</h3>')

            $('#b5').append('<button class="div_1234" id="tecn3_btn"></button>')
            $('#tecn3_btn').append('<img class="img1" src="photos/3/tecn3.webp" alt="картинка">')
            $('#tecn3_btn').append('<div id="tecn3"></div>')
            $('#tecn3').append('<h5>Учебник технологии 3класс</h5>')
            $('#tecn3').append('<h3>1000₽</h3>')


            $('.products').append('<div class="product" id="b6"></div>')
            
            $('#b6').append('<button class="div_1234" id="izo3_btn"></button>')
            $('#izo3_btn').append('<img class="img1" src="photos/3/izo3.webp" alt="картинка">')
            $('#izo3_btn').append('<div id="izo3"></div>')
            $('#izo3').append('<h5>Учебник изобразительного искусства 3класс</h5>')
            $('#izo3').append('<h3>700₽</h3>')

            $('#b6').append('<button class="div_1234" id="om3_1_btn"></button>')
            $('#om3_1_btn').append('<img class="img1" src="photos/3/om3_1.webp" alt="картинка">')
            $('#om3_1_btn').append('<div id="om3_1"></div>')
            $('#om3_1').append('<h5>Учебник окружающего мира 3класс 1ч</h5>')
            $('#om3_1').append('<h3>500₽</h3>')

            $('#b6').append('<button class="div_1234" id="om3_2_btn"></button>')
            $('#om3_2_btn').append('<img class="img1" src="photos/3/om3_2.webp" alt="картинка">')
            $('#om3_2_btn').append('<div id="om3_2"></div>')
            $('#om3_2').append('<h5>Учебник окружающего мира 3класс 2ч</h5>')
            $('#om3_2').append('<h3>400₽</h3>')

            $('#b6').append('<button class="div_1234" id="mus3_btn"></button>')
            $('#mus3_btn').append('<img class="img1" src="photos/3/mus3.jpg" alt="картинка">')
            $('#mus3_btn').append('<div id="mus3"></div>')
            $('#mus3').append('<h5>Учебник музыки 3класс</h5>')
            $('#mus3').append('<h3>600₽</h3>')

            $('#b6').append('<button class="div_1234" id="pe3_btn"></button>')
            $('#pe3_btn').append('<img class="img1" src="photos/3/pe3.jpg" alt="картинка">')
            $('#pe3_btn').append('<div id="pe3"></div>')
            $('#pe3').append('<h5>Учебник физкультуры 3класс</h5>')
            $('#pe3').append('<h3>700₽</h3>')

            $('#b6').append('<button class="div_1234" id="english3_1_btn"></button>')
            $('#english3_1_btn').append('<img class="img1" src="photos/3/english3_1.webp" alt="картинка">')
            $('#english3_1_btn').append('<div id="english3_1"></div>')
            $('#english3_1').append('<h5>Учебник английского языка 3класс 1ч</h5>')
            $('#english3_1').append('<h3>800₽</h3>')

            $('#b6').append('<button class="div_1234" id="english3_2_btn"></button>')
            $('#english3_2_btn').append('<img class="img1" src="photos/3/english3_2.webp" alt="картинка">')
            $('#english3_2_btn').append('<div id="english3_2"></div>')
            $('#english3_2').append('<h5>Учебник английского языка 3класс 2ч</h5>')
            $('#english3_2').append('<h3>500₽</h3>')
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
        $('.subcategory').append('<button class=subcats subcat2_1>5 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class=subcats subcat2_2>6 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class=subcats subcat2_3>7 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class=subcats subcat2_4>8 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class=subcats subcat2_5>9 класс</button>')
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
        $('.subcategory').append('<button class=subcats subcat3_4>10 класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class=subcats subcat3_5>11 класс</button>')
    });
    $(".cat4").click(function() {
        $('.subcategory').remove()
        $('.cat1').removeClass('change_cat_col')
        $('.cat2').removeClass('change_cat_col')
        $('.cat3').removeClass('change_cat_col')
        $('.cat4').addClass('change_cat_col')
        $('.container').append('<div class="subcategory"></div>')
        $('.subcategory').css('height', '375px')
        $('.subcategory').append('<button class=subcats subcat4_4>ОГЭ класс</button>')
        $('.subcategory').append('<hr>')
        $('.subcategory').append('<button class=subcats subcat4_5>ЕГЭ класс</button>')
    });

    
}

function contacts() {
    $("body").append('<div class="wrapper"></div>');
  
    $(".wrapper").append('<button class="menu_1">Главная</button>');
    $(".wrapper").append('<button class="menu_2">Каталог</button>');
    $(".wrapper").append('<button class="menu_3">Избранное</button>');
    $(".wrapper").append('<button class="menu_5 clicked">Контакты</button>');


    $('body').append('<div class="cont_div"></div>')

    $('.cont_div').append('<h1 class="conts_h1">Здесь находятся контактные данные.</h1>')
    $('.cont_div').append('<h1 class="conts_h1">Обращайтесь к нам с отзывами, претензиями и предложениями :)</h1>')


    $('.cont_div').append('<div class="div_v_div"></div>')

    $('.div_v_div').append('<h2>Создатель сайта: Шеститка Полина</h2>')
    $('.div_v_div').append('<h2>Почта: shestitka.polina@yandex.ru</h2>')
    $('.div_v_div').append('<h2>Номер телефона: +7 920 888 40 08</h2>')
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
        $(".menu_5").removeClass('clicked');
    
        click_checker();
    })
    
    $(".menu_3").click(function() {
        $("div").remove();
        $("img").remove();
        $("h1").remove();

        liked_page();

        $(this).addClass('clicked');
        $(".menu_2").removeClass('clicked');
        $(".menu_1").removeClass('clicked');
        $(".menu_5").removeClass('clicked');
    
        click_checker();
    })
    
    $(".menu_5").click(function() {
        $("div").remove();
        $("img").remove();
        $("h1").remove();

        contacts();

        $(this).addClass('clicked');
        $(".menu_2").removeClass('clicked');
        $(".menu_3").removeClass('clicked');
        $(".menu_1").removeClass('clicked');
    
        click_checker();
    })
    
}

click_checker();

//
//
//(".menu_1").click(function() {
//   $("div").remove();
//   $("img").remove();
//   $("h1").remove();
//
//   main_page();
//
//   $(this).addClass('clicked');
//   $(".menu_2").removeClass('clicked');
//   $(".menu_3").removeClass('clicked');
//   $(".menu_5").removeClass('clicked');
//
//   click_checker();
//
//)
//
//(".menu_2").click(function() {
//   $("div").remove();
//   $("img").remove();
//   $("h1").remove();
//
//   catalog();
//
//   $(this).addClass('clicked');
//   $(".menu_1").removeClass('clicked');
//   $(".menu_3").removeClass('clicked');
//   $(".menu_5").removeClass('clicked');
//
//   click_checker();
//)
//
//(".menu_3").click(function() {
//   $("div").remove();
//   $("img").remove();
//   $("h1").remove();
//
//   liked_page();
//
//   $(this).addClass('clicked');
//   $(".menu_2").removeClass('clicked');
//   $(".menu_1").removeClass('clicked');
//   $(".menu_5").removeClass('clicked');
//
//   click_checker();
//)
//
//(".menu_5").click(function() {
//   $("div").remove();
//   $("img").remove();
//   $("h1").remove();
//
//   contacts();
//
//   $(this).addClass('clicked');
//   $(".menu_2").removeClass('clicked');
//   $(".menu_3").removeClass('clicked');
//   $(".menu_1").removeClass('clicked');
//
//   click_checker();
//)
//