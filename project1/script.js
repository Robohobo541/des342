$('#wake-up-btn').click(function () {
  $('#wake-up-img').attr('src', '../img/wake2.gif')

  setTimeout(function () {
    $('#wake-up-img').attr('src', '../img/wake3.gif')
  }, 3000)
  setTimeout(function () {
    $('#wake-up-img').attr('src', '../img/wake5.gif')
    $('#scroll-btn').css('display', 'block')
  }, 2000)
})
