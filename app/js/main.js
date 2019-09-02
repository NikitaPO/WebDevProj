$(function() {

  //сортировка
  $('.works button').click(function() {
    $('.works button').removeClass('active');
    $(this).addClass('active');
    let category = $(this).attr("category");
    if (category) {
      $('.works__item').fadeOut(300);
      setTimeout(function() {
        $('.works__item[category =' + category + ']').fadeIn(300);
      }, 300);
    } else {
      $('.works__item').fadeOut(300);
      setTimeout(function() {
        $('.works__item').fadeIn(300);
      }, 300);
    }
  });

  $('.team .slider').slick({
    dots: true,
    dotsClass: 'dots__style',
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  //смена иконки + выпадающее меню
  $('.header__menu-icon').click(function() {
    $('nav').slideToggle(500);
    let icon = $(this).html();
    if(icon == '<i class="fas fa-bars" aria-hidden="true"></i>') {
      $(this).html('<i class="fas fa-times"></i>');
    } else {
      $(this).html('<i class="fas fa-bars" aria-hidden="true"></i>');
    }
  });
  //анимация для меню
  $('.menu__item a[href^="#"').click(function() {
    let target = $(this).attr('href');
    $('html').animate({
      scrollTop: $(target).offset().top
    }, 800)
  });

  //анимация для кнопки "вверх"
  $('.toTopBtn').hide()
  $(window).scroll(function() {
      if ($(this).scrollTop() != 0) {
        $('.toTopBtn').fadeIn(300);
      } else {
        $('.toTopBtn').fadeOut(300);
      }
  });

  $('.toTopBtn').click(function() {
    $('html').animate({
      scrollTop: 0
    }, 800);
  });

});
