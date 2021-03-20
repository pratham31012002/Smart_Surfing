/* const settings = {
  async: true,
  crossDomain: true,
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': '53f7801bdamsha54ea83970e4847p14683ejsn2fae6caf5675',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
  },
  data: {
    q: selection,
    source: 'en',
    target: 'es'
  }
}
$.ajax(settings).done(function (response) {
  console.log(response.data.translations[0].translatedText)
  if (selection.length > 0) {
    // renderBubble(e.clientX, e.clientY, response.data.translations[0].translatedText)
    renderBubble(e.clientX, e.clientY, selection)
  }
}, false) */

const data = 'q=' + selection + '&source=en&target=es'

const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.withCredentials = true

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    if (selection.length > 0) {
      renderBubble(e.clientX, e.clientY, this.response.data.translations[0].translatedText)
    }
    console.log(this.response.data.translations[0].translatedText)
  }
})

xhr.open('POST', 'https://google-translate1.p.rapidapi.com/language/translate/v2')
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
xhr.setRequestHeader('x-rapidapi-key', 'e64af7e547mshc9f85bc651c024bp1bdffbjsn0ced214f02ca')
xhr.setRequestHeader('x-rapidapi-host', 'google-translate1.p.rapidapi.com')

xhr.send(data)