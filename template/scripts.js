$(() => {

  $('.reAsk-button').click(() => {
    console.log('clicked')
    $('.ask-question-modal').css('display', 'block');
    $('.cover-the-page').css('display', 'block');
  })

  $('.cover-the-page').click(() => {
    $('.ask-question-modal').css('display', 'none');
    $('.cover-the-page').css('display', 'none');
  })

})
