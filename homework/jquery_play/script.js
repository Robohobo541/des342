// $('body').css('background','pink')

// $('h1').click(
//     function() {
//         $('body').toggleClass('purple')
//     }
// )

// let rainbow = 0

// let colorVal = `hsl(${rainbow},100,100)'

// $('.button').click
// (
//     function(){
//         rainbow+30
//         $('body').css('background',`${colorVal}`)
//     }
// )

$('.one') .click(
    function(){
        $('.kitties').attr('src','https://placekitten.com/400/405')
    }
)

$('.two') .click(
    function(){
        $('.kitties').attr('src','https://placekitten.com/400/402')
    }
)

$('.three') .click(
    function(){
        $('.kitties').attr('src','https://placekitten.com/400/400')
    }
)