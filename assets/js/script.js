/* global $ */

// Toggle visibility of projects on Navbar
function toggleProjects () {
  $('.projectNav').toggleClass('navHidden')
}

$('.projects').on('click', toggleProjects)

// Toggle mainscreen display
function toggleDisplay () {
  if (!$(this).hasClass('active')) {
    // Get pagename of current active page, hide the corresponding page & remote active status
    var currentPageName = $('.active').attr('data-name')
    $('.' + currentPageName).toggleClass('hidePage')
    $('.active').toggleClass('active')
    // Set clicked button to active and unhide the corresponding page
    $(this).toggleClass('active')
    var pageName = $(this).attr('data-name')
    $('.' + pageName).toggleClass('hidePage')
  }
}
$('.pageBtn').on('click', toggleDisplay)

// downArrow scroll
$('.downArrow').click(function () {
  var newPos = $('#experienceTarget').offset().top
  $('html, body').animate({scrollTop: newPos}, 1000)
})
