const menuClickHandler = (elem) => {
	$(`.${elem}`).toggleClass('active')
	$('.' + elem)[0].className.indexOf('active') === -1 ? $(`.${elem} > span:last-child`).html('+') 
	: $(`.${elem} > span:last-child`).html('-') 
	$(`.${elem}__innerItems`).toggleClass('active') 
}

const background = $('.background')
const cart = $('.cart')
const menu = $('.menu')

$('.sobre').click((e) => menuClickHandler('sobre'))
$('.colecoes').click(() => menuClickHandler('colecoes'))
$('.categoria').click(() => menuClickHandler('categoria'))
$('.looks').click(() => menuClickHandler('looks'))
$('.contato').click(() => menuClickHandler('contato'))
$('.menu__close').click(() => {
	menu.hide()
	$('.background').hide()
})

$('.navigation__menu').click(() => {
	menu.show()
	background.show()
})
background.click(function() {
	$(this).hide()
	cart.hide()
	menu.hide()
})
$('.cart__checkout-right').click(() => {
	cart.hide()
	background.hide()
})
$('.navigation__right-cart').click(() => {
	background.show()
	cart.show()
})

$('.slider').slick({
	arrows: false,
	dots: true
})

$('.slider2').slick({
  dots: false,
  arrows: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  touchThreshold: 10
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  // ]
});

