$('#wake-up-btn').click(function () {
  $('#wake-up-img').attr('src', '../img/wake2.gif')

  setTimeout(function () {
    $('#wake-up-img').attr('src', '../img/wake3.gif')
  }, 7000)
  setTimeout(function () {
    $('#wake-up-img').attr('src', '../img/wake4.gif')
    $('#scroll-btn').css('display', 'block')
    $('#work-btn').css('display', 'block')
  },12000)
})

$('#scroll-btn').click(function () {
  $('#wake-up-img').attr('src', '../img/wake5.gif')
  setTimeout(function () {
    $('#wake-up-img').attr('src', '../img/wake4.gif')
  }, 3000)
})

$('#red-btn').click(function () {
  $('#work-img').attr('src', '../img/work-big-red.gif')

  setTimeout(function () {
    $('#work-img').attr('src', '../img/work-idle.gif')
  }, 3000)  
})

$('#lever-btn').click(function () {
  $('#work-img').attr('src', '../img/work-lever.gif')

  setTimeout(function () {
    $('#work-img').attr('src', '../img/work-idle.gif')
  }, 3500)  
})

$('#game-left-btn').click(function () {
  $('#game-img').attr('src', '../img/game-left.gif')

})

$('#game-right-btn').click(function () {
  $('#game-img').attr('src', '../img/game-right.gif')

})