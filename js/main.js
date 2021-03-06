/*document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () =>{
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click',switchModal);
    });

    closeBtn.addEventListener('click', switchModal);

});*/
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');


    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)

    new WOW().init();

    //валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // правило-объект(блок)
            userEmail: {
                required: true,
                email: true
            }
        }, // сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2х букв",
                maxlength: "Имя не больше 15ти букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате: name@domain.com"
            }
        },
        submitHandler: function(form) {
        //   $.ajax({
        //     type: "POST",
        //     url: "../send.php",
        //     data: $(form).serialize(),
        //     success: function(response) {
        //       alert('Форма отправлена, мы свяжемся с Вами через 10 минут');
        //       $(form)[0].reset();
        //       modal.removeClass('modal--visible');
        //     },
        //     error: function (response) {
        //         console.error('ошибка запроса ' + response);
        //     }
        //   });
        // }
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function (response) {
                    alert('Форма отправлена, мы свяжемся с Вами через 10 минут');
                    console.log("Прибыли данные: " + response);
                    $('Форма отправлена').text(response);
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                },
                error: function (response) {
                    console.error(response);
                    $('ошибка запроса').text(response);
                    $(form)[0].reset();
                }
            });
        }
    });
    // Маска для номера телефона

    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) __-__-___"});

    // Валидация footer'a
    $('.footer__form').validate({
        errorClass: "invalid",
        rules: {
            footer_userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            footer_userPhone: {
                required: true,
            },
            footer_userQuestion: "required"
        },
        messages: {
            footer_userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2х букв",
                maxlength: "Имя не больше 15ти букв"
            },
            footer_userPhone: {
                required: "Телефон обязателен",
            },
            footer_userQuestion: "Вопрос обязателен"
        },
        submitHandler: function(form) {
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function (response) {
                    alert('Форма отправлена, мы свяжемся с Вами через 10 минут');
                    console.log("Прибыли данные: " + response);
                    $('Форма отправлена').text(response);
                    $(form)[0].reset();
                },
                error: function (response) {
                    console.error(response);
                    $('ошибка запроса').text(response);
                    $(form)[0].reset();
            }
          });
        }
    });

    // Валидация control'a
    $('.control__form').validate({
        errorClass: "invalid",
        rules: {
            control_userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            control_userPhone: {
                required: true,
            },
        },
        messages: {
            control_userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче 2х букв",
                maxlength: "Имя не больше 15ти букв"
            },
            control_userPhone: {
                required: "Телефон обязателен"
            },

        },
        submitHandler: function(form) {
            $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function (response) {
                    alert('Форма отправлена, мы свяжемся с Вами через 10 минут');
                    console.log("Прибыли данные: " + response);
                    $('Форма отправлена').text(response);
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                },
                error: function (response) {
                    console.error(response);
                    $('ошибка запроса').text(response);
                    $(form)[0].reset();
            }
          });
        }
    });
});