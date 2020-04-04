$('.checkbox').click(function () {
  $(this).toggleClass('checkbox-checked');
  return false;
});

$('.header__burger').click(function (e) {
  e.preventDefault();
  $('.sidebar').toggleClass('sidebar-active');
});

$('.sidebar__close').click(function () {
  $('.sidebar-active').toggleClass('sidebar-close');
  $('.sidebar').toggleClass('sidebar-active');
});

$('.sidebar__close').click(() => {
  $('.accordion').css('display', 'none');
  $('.calendar').css('display', 'none');
  $('.type-of-travel').css('display', 'none');
  $('.properties__item').css('opacity', '1');
  $('.contact__tel').css('display', 'block');
  $('.contact__button').css('margin-top', '0');
  $('.menu').css('display', 'flex');
  $('.contact__button').css('margin-top', '24px');
});

$('.properties__item_date').click(function (e) {
  $('.contact__button').css('margin-top', '188px');
  $('.properties__item').css('opacity', '0');
  $('.calendar').toggle();
  $('.calendar').css('margin-top', '101px');
  $('.menu').css('display', 'none');
  $('.contact__tel').css('display', 'none');
  $('.contact').css('margin-top', '188px');
});
$('.properties__item_type-of-travel').click(function (e) {
  $('.contact__button').css('margin-top', '261px');
  $('.properties__item').css('opacity', '0');
  $('.type-of-travel').css('display', 'block');
  $('.menu').css('display', 'none');
  $('.contact__tel').css('display', 'none');
  $('.contact').css('margin-top', '188px');
});
$('.properties__item_country').click(function (e) {
  $('.contact__button').css('margin-top', '261px');
  $('.properties__item').css('opacity', '0');
  $('.accordion').css('display', 'block');
  $('.type-of-travel').css('display', 'none');
  $('.menu').css('display', 'none');
  $('.contact__tel').css('display', 'none');
  $('.contact').css('margin-top', '188px');
});

$('#form-request').validate({
  errorClass: 'phone-error',
  errorElement: 'span',
  rules: {
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    phone: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    where: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    when: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
  },
  messages: {
    phone: {
      required: 'Заполните поле',
      minlength: jQuery.validator.format('Минимум 2 символа'),
      maxlength: jQuery.validator.format('Максимум 15 символов'),
    },
    username: {
      required: 'Заполните поле',
      minlength: jQuery.validator.format('Минимум 2 символа'),
      maxlength: jQuery.validator.format('Максимум 15 символов'),
    },
    when: {
      required: 'Заполните поле',
      minlength: jQuery.validator.format('Минимум 2 символа'),
      maxlength: jQuery.validator.format('Максимум 15 символов'),
    },
    where: {
      required: 'Укажите континент, страну или город',
      minlength: jQuery.validator.format('Минимум 2 символа'),
      maxlength: jQuery.validator.format('Максимум 15 символов'),
    },
  },
});
