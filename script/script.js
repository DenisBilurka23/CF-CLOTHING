const menuClickHandler = (elem) => {
    const selector = $(`.${elem} > span:last-child`)
    $(`.${elem}`).toggleClass('active')
    $('.' + elem)[0].className.indexOf('active') === -1 ? selector.html('+')
        : selector.html('-')
    $(`.${elem}__innerItems`).toggleClass('active')
}

const background = $('.background')
const cart = $('.cart')
const menu = $('.menu')

$('.sobre').click(() => menuClickHandler('sobre'))
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
background.click(function () {
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
    slidesToScroll: 6,
    autoplay: true,
    touchThreshold: 10,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                centerMode: true,
                slidesToShow: 6,
                variableWidth: true,
                slidesToScroll: 99,
            }
        }
    ]
})
$('.slider3').slick({
    autoplaySpeed: 2000,
    autoplay: true,
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    touchThreshold: 10,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                centerMode: true,
                slidesToShow: 3,
                variableWidth: true,
                slidesToScroll: 99,
            }
        }
    ]
})
$('.slider4').slick({
    autoplaySpeed: 3000,
    autoplay: true,
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    touchThreshold: 10,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                centerMode: true,
                slidesToShow: 3,
                variableWidth: true,
                slidesToScroll: 99,
            }
        }
    ]
})

const changeNavPadding = (value, itemPadding, searchPadding, innerItem) => {
    $('.menu__header').css({paddingLeft: value + itemPadding})
    $('.menu__search').css({paddingLeft: value + searchPadding})
    $('.menu__list-items').css({paddingLeft: value + itemPadding})
    $('.menu__list-moreItems > li').css({paddingLeft: value + innerItem})
    $('.item-right').css({paddingRight: value + itemPadding})
    $('.cart__tittle').css({paddingRight: value + 280})
    $('.cart__total-sum').css({paddingRight: value + itemPadding})
    $('.cart__checkout-right img').css({paddingRight: value + itemPadding})
}
const setTabletPadding = () => {
    if (window.innerWidth > 730 && window.innerWidth < 1280) {
        changeNavPadding($('.wrapper').offset().left, 29, 18, 33)
    }
}
const setDesktopPadding = () => {
    if (window.innerWidth > 1280){
        changeNavPadding($('.wrapper').offset().left, 25, 12, 25)
    }
}
setTabletPadding()
setDesktopPadding()
window.onresize = () => {
    setTabletPadding()
    setDesktopPadding()
}



