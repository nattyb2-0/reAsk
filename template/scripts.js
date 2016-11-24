$(() => {

  $('.reAsk-button').click(() => {
    console.log('clicked')
    $('.ask-question-modal').css('display', 'block');
    $('.cover-the-page').css('display', 'block');
  })

  $('.cover-the-page').click(() => {
    $('.ask-question-modal').css('display', 'none');
    $('.cover-the-page').css('display', 'none');
    $('.create-account-modal').css('display', 'none')
    $('.login-account-modal').css('display', 'none')
    $('textarea').val('')
  })

  $('.cancel-question-btn').click(() => {
    $('.ask-question-modal').css('display', 'none');
    $('.cover-the-page').css('display', 'none');
    $('textarea').val('')
  })

  $('.ask-question-btn').click(() => {
    $('.ask-question-modal').css('display', 'none');
    $('.cover-the-page').css('display', 'none');

    let title = $('#title').val()
    let question = $('#question').val()
    let tags = $('#tags').val()

    let newTitle = $('<h3>')
    newTitle.append(title)
    let newQuestion = $('<p>')
    newQuestion.append(question)
    let newTags = $('<p>')
    newTags.append(`tags: ${tags}`)

    let questionContainer = $('<div>')
    questionContainer.addClass('question')
    questionContainer.append(newQuestion)
    questionContainer.append(newTags)
    questionContainer.prepend(newTitle)

    $('.questions').prepend(questionContainer)
    $('textarea').val('')
  })

  $('.question').click((e) => {
    console.log(e)
  })

  $('.login-btn').click(() => {
    $('.create-account-modal').css('display', 'block')
    $('.cover-the-page').css('display', 'block');
  })

  $('.login-text').click(() => {
    if($('.create-account-modal').css('display') == 'block') {
      $('.create-account-modal').css('display', 'none')
      $('.login-account-modal').css('display', 'block')
    } else if ($('.login-account-modal').css('display') == 'block') {
      $('.create-account-modal').css('display', 'block')
      $('.login-account-modal').css('display', 'none')
    }
  })

})
