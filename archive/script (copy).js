$('.banana').click(function () {
  let phonesound = $('audio#phonesound')[0]
  phonesound.play()
  $('.banana').toggleClass('jiggle')
})

// $(window).on('cup-load', function () {
//   $('.load-wrapper').fadeOut('slow');
// })//
$(".teacup").click(function () {
  $("#teacup-spill").toggleClass('flip');
  $('.box').addClass('go');
})

$('.break').click(function () {
  $('.break').remove()
  $('.break-menu').css('display', 'block')

})
$('.lunch').click(function () {
  $('.lunch').remove()
  $('.lunch-menu').css('display', 'block')
})

$('.dropdown').mouseover(function () {
  $('.dropdown-content').css('display', 'block')
})

$('.dropdown').mouseout(function () {
  $('.dropdown-content').css('display', 'none')
})



function click(element) {
  element.click('flip');
}

function hover(element) {
  element.setAttribute('src', 'images/breakfast-post.svg');
}

function unhover(element) {
  element.setAttribute('src', 'images/breakfast-pre.svg');
}

function hoverL(element) {
  element.setAttribute('src', 'images/lunch-post.svg');
}

function unhoverL(element) {
  element.setAttribute('src', 'images/lunch-pre.svg');
}

hover();
unhover();
hoverL();
unhoverL();
