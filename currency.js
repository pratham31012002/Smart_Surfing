
const xhttp = new XMLHttpRequest()
xhttp.responseType = 'json'
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    console.log(xhttp.response.rates)
  }
}
xhttp.open('GET', 'https://api.exchangeratesapi.io/latest? HTTP/1.1', true)
xhttp.send()

/*
const xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    console.log(xhttp.response)
  }
}
xhttp.open('GET', 'https://api.iextrading.com/1.0/ref-data/symbols', true)
xhttp.send()
*/