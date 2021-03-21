const bubbleDOM = document.createElement('div')
const bubbleDOM1 = document.createElement('div')
const bubbleDOM2 = document.createElement('div')
const bubbleDOM3 = document.createElement('div')
const bubbleDOM4 = document.createElement('div')
const bubbleDOM5 = document.createElement('div')
const bubbleDOM6 = document.createElement('div')
const bubbleDOM7 = document.createElement('div')
const bubbleDOM8 = document.createElement('div')
const bubbleDOM9 = document.createElement('div')
bubbleDOM.setAttribute('class', 'selection_bubble1')
bubbleDOM1.setAttribute('class', 'selection_bubble')
bubbleDOM2.setAttribute('class', 'selection_bubble')
bubbleDOM3.setAttribute('class', 'selection_bubble')
bubbleDOM4.setAttribute('class', 'selection_bubble')
bubbleDOM5.setAttribute('class', 'selection_bubble')
bubbleDOM6.setAttribute('class', 'selection_bubble')
bubbleDOM7.setAttribute('class', 'selection_bubble')
bubbleDOM8.setAttribute('class', 'selection_bubble')
bubbleDOM9.setAttribute('class', 'selection_bubble')
let i
for (i = 0; i < 9; i++) {
  const api = document.createElement('div')
  api.setAttribute('class', 'apicss')
  bubbleDOM.appendChild(api)
}
bubbleDOM6.style='display:flex;flex-direction:column;justify-content:flex-start;background-color:#B2F0FF;border: 15px solid #FFFFFF;'
bubbleDOM1.style='background-color:#B2F0FF;border: 15px solid #FFFFFF;'
bubbleDOM2.style='background-color:#B2BDFF;border: 15px solid #FFFFFF;'
bubbleDOM3.style='background-color:#BEFFB2;border: 15px solid #FFFFFF;'
bubbleDOM4.style='background-color:#FFEDB2;border: 15px solid #FFFFFF;'
bubbleDOM5.style='background-color:#F7CBFF;border: 15px solid #FFFFFF;'
bubbleDOM6.style='background-color:#A9FFDA;border: 15px solid #FFFFFF;'
bubbleDOM7.style='background-color:#B2BDFF;border: 15px solid #FFFFFF;padding-left:0px;'
bubbleDOM8.style='background-color:#FFEDB2;border: 15px solid #FFFFFF;'
document.body.appendChild(bubbleDOM)
document.body.appendChild(bubbleDOM1)
document.body.appendChild(bubbleDOM2)
document.body.appendChild(bubbleDOM3)
document.body.appendChild(bubbleDOM4)
document.body.appendChild(bubbleDOM5)
document.body.appendChild(bubbleDOM6)
document.body.appendChild(bubbleDOM7)
document.body.appendChild(bubbleDOM8)
document.body.appendChild(bubbleDOM9)
const apicss = bubbleDOM.querySelectorAll('.apicss')

const image = document.createElement('img')
image.src = chrome.runtime.getURL('images/svgs/transl.svg')
const image1 = document.createElement('img')
image1.src = chrome.runtime.getURL('images/svgs/dictionary.svg')
const image2 = document.createElement('img')
image2.src = chrome.runtime.getURL('images/svgs/currency.svg')
const image3 = document.createElement('img')
image3.src = chrome.runtime.getURL('images/svgs/imdb1.svg')
const image4 = document.createElement('img')
image4.src = chrome.runtime.getURL('images/svgs/stocks.svg')
const image5 = document.createElement('img')
image5.src = chrome.runtime.getURL('images/svgs/addnote.svg')
const image6 = document.createElement('img')
image6.src = chrome.runtime.getURL('images/svgs/location.svg')
const image7 = document.createElement('img')
image7.src = chrome.runtime.getURL('images/svgs/food.svg')
const image8 = document.createElement('img')
image8.src = chrome.runtime.getURL('images/svgs/price.svg')
apicss[0].appendChild(image)
apicss[1].appendChild(image1)
apicss[2].appendChild(image2)
apicss[3].appendChild(image3)
apicss[4].appendChild(image4)
apicss[5].appendChild(image5)
apicss[6].appendChild(image6)
apicss[7].appendChild(image7)
apicss[8].appendChild(image8)

document.addEventListener('mouseup', function (e) {
  bubbleDOM.style.visibility = 'hidden'
  bubbleDOM1.style.visibility = 'hidden'
  bubbleDOM2.style.visibility = 'hidden'
  bubbleDOM3.style.visibility = 'hidden'
  bubbleDOM4.style.visibility = 'hidden'
  bubbleDOM5.style.visibility = 'hidden'
  bubbleDOM6.style.visibility = 'hidden'
  bubbleDOM7.style.visibility = 'hidden'
  bubbleDOM8.style.visibility = 'hidden'
  let selection = window.getSelection().toString()
  apicss[0].addEventListener('click', (e) => {
    bubbleDOM1.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    translate(selection)}
    selection = ""
  })
  apicss[1].addEventListener('click', (e) => {
    bubbleDOM2.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    dictionarytxt(selection)}
    selection = ""
  })
  apicss[2].addEventListener('click', (e) => {
    bubbleDOM3.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    currencyapi(selection)}
    selection = ""
  })
  apicss[3].addEventListener('click', (e) => {
    bubbleDOM4.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    imdb(selection)}
    selection = ""
  })
  apicss[4].addEventListener('click', (e) => {
    bubbleDOM5.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    stock(selection)}
    selection = ""
  })
  apicss[5].addEventListener('click', (e) => {
    bubbleDOM6.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    const addnote = document.createElement('div')
    addnote.innerHTML="<ul><li>"+selection+"</li></ul>"
    bubbleDOM6.appendChild(addnote)}
    selection = ""
  })
  apicss[6].addEventListener('click', (e) => {
    bubbleDOM7.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    country(selection)}
    selection = ""
  })
  apicss[7].addEventListener('click', (e) => {
    bubbleDOM8.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
    if(selection!=""){
    goodread(selection)}
    selection = ""
  })
  // selection.replace(' ','%2C%20')
  // const data = 'q=Hello%2C%20world!&source=en&target=es'
  if (selection.length > 0) {
    renderBubble(e.clientX, e.clientY, selection)
  }
}, false)

/* document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden'
}, false) */

function renderBubble (mouseX, mouseY, selection) {
  /* if (bubbleDOM.innerHTML !== '') {
    bubbleDOM.innerHTML = bubbleDOM.innerHTML + '<br>' + selection
  } else {
    bubbleDOM.innerHTML = selection
  } */
  bubbleDOM.style.top = mouseY + 'px'
  bubbleDOM.style.left = mouseX + 'px'
  bubbleDOM1.style.top = mouseY + 'px'
  bubbleDOM1.style.left = mouseX + 'px'
  bubbleDOM2.style.top = mouseY + 'px'
  bubbleDOM2.style.left = mouseX + 'px'
  bubbleDOM3.style.top = mouseY + 'px'
  bubbleDOM3.style.left = mouseX + 'px'
  bubbleDOM4.style.top = mouseY + 'px'
  bubbleDOM4.style.left = mouseX + 'px'
  bubbleDOM5.style.top = mouseY + 'px'
  bubbleDOM5.style.left = mouseX + 'px'
  bubbleDOM6.style.top = mouseY + 'px'
  bubbleDOM6.style.left = mouseX + 'px'
  bubbleDOM7.style.top = mouseY + 'px'
  bubbleDOM7.style.left = mouseX + 'px'
  bubbleDOM8.style.top = mouseY + 'px'
  bubbleDOM8.style.left = mouseX + 'px'
  bubbleDOM9.style.top = mouseY + 'px'
  bubbleDOM9.style.left = mouseX + 'px'
  bubbleDOM.style.visibility = 'visible'
}

// structure of translate
function translateui (sel) {
  bubbleDOM1.innerHTML = "<div class='translatebtn'></div>"
  document.querySelector('.translatebtn').addEventListener('click', (e) => {
    bubbleDOM1.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
  })
}

// apitranslate
function translate (selection1) {
  bubbleDOM1.style.visibility = 'visible'
  bubbleDOM.style.visibility = 'hidden'
  bubbleDOM1.innerHTML = ''
  const data1 = 'q=' + selection1
  const xhr1 = new XMLHttpRequest()
  xhr1.responseType = 'json'
  xhr1.withCredentials = true
  let ans1 = ''

  xhr1.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log('detect language')
      ans1 = this.response.data.detections[0][0].language
      console.log(ans1)
      console.log('detect language')
    }
  })

  xhr1.open('POST', 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect')
  xhr1.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  xhr1.setRequestHeader('x-rapidapi-key', 'd65221d8bdmsh1cdf6cec54dc013p192908jsn04d9cbe4cfdc')
  xhr1.setRequestHeader('x-rapidapi-host', 'google-translate1.p.rapidapi.com')

  xhr1.send(data1)

  const data = 'q=' + selection1 + '&source=' + ans1 + '&target=en'

  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.withCredentials = true

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      if (selection1.length > 0) {
        console.log('translate language')

        bubbleDOM1.innerHTML = "<b>Original: </b>" + selection1 + "<br><b>Translated: </b>"+this.response.data.translations[0].translatedText
        console.log('translate language')
      }
    }
  })

  xhr.open('POST', 'https://google-translate1.p.rapidapi.com/language/translate/v2')
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  xhr.setRequestHeader('x-rapidapi-key', 'd65221d8bdmsh1cdf6cec54dc013p192908jsn04d9cbe4cfdc')
  xhr.setRequestHeader('x-rapidapi-host', 'google-translate1.p.rapidapi.com')

  xhr.send(data)
}

// structure of dictionary
function dictionary (sel1) {
  bubbleDOM2.innerHTML = "<div class='translatebtn1'></div>"
  document.querySelector('.translatebtn1').addEventListener('click', (e) => {
    bubbleDOM2.style.visibility = 'visible'
    bubbleDOM.style.visibility = 'hidden'
  })
}

// apidictionary
function dictionarytxt (selection2) {
  bubbleDOM2.style.visibility = 'visible'
  bubbleDOM.style.visibility = 'hidden'
  bubbleDOM2.innerHTML = ''
  const data = null

  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.withCredentials = true

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.response.list)
      bubbleDOM2.innerHTML = "<p align='left'><b>Word: "+selection2.toUpperCase()+"</b><br></p>"
      bubbleDOM2.innerHTML = bubbleDOM2.innerHTML+this.response.list[0].definition
      
    }
  })
  const query = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=' + selection2
  xhr.open('GET', query)
  xhr.setRequestHeader('x-rapidapi-key', 'e64af7e547mshc9f85bc651c024bp1bdffbjsn0ced214f02ca')
  xhr.setRequestHeader('x-rapidapi-host', 'mashape-community-urban-dictionary.p.rapidapi.com')

  xhr.send(data)
}

// currencyapi
function currencyapi (selec) {
  const xhttp = new XMLHttpRequest()
  xhttp.responseType = 'json'
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      bubbleDOM3.innerHTML = "<p align='center'><b>Original Currency: </b>"+selec+"<br></p>"
      const currans = parseFloat(xhttp.response.USD_INR) * parseFloat(selec.substring(1))
      console.log(parseFloat(selec.substring(1)))
      bubbleDOM3.innerHTML = bubbleDOM3.innerHTML + "<p align='center'><b>Converted Currency: </b>"+currans+"</p>"
      // console.log(parseInt(xhttp.response.USD_INR)*parseInt(selec))
    }
  }
  xhttp.open('GET', 'https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=91588b10c2e928df38f9', true)
  xhttp.send()
}

function imdb (selec5) {
  const data = null

  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'


  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.response.rating)
      bubbleDOM4.innerHTML = "<b>Rating:</b>"+this.response.rating + "<br><b>Lead Cast:</b>"
      bubbleDOM4.innerHTML = bubbleDOM4.innerHTML +this.response.cast[0].actor+","+this.response.cast[1].actor+"<br><b>Plot:</b>"
      bubbleDOM4.innerHTML = bubbleDOM4.innerHTML + "<br>"+this.response.plot+"<br>"
      console.log(this.response)
    }
  })

  xhr.open('GET', 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/'+selec5)
  xhr.setRequestHeader('x-rapidapi-key', 'e64af7e547mshc9f85bc651c024bp1bdffbjsn0ced214f02ca')
  xhr.setRequestHeader('x-rapidapi-host', 'imdb-internet-movie-database-unofficial.p.rapidapi.com')

  xhr.send(data)
}


function stock (selec5) {
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const outstock=this.response.bestMatches[0]["1. symbol"];
      console.log(outstock);
      const data12 = null;

      const xhr12 = new XMLHttpRequest();
      xhr12.responseType = 'json'

      xhr12.addEventListener("readystatechange", function () {
	    if (this.readyState === this.DONE) {
        const stockoutans = parseFloat(this.response["Global Quote"]["03. high"]).toFixed(2)
        const stockoutans1 = parseFloat(this.response["Global Quote"]["04. low"]).toFixed(2)
        const stockoutans2 = parseFloat(this.response["Global Quote"]["05. price"]).toFixed(2)
		    console.log(this.response);
        bubbleDOM5.innerHTML = "<b>Name: </b>" + selec5 + "<b>Current Price: </b>" + stockoutans2 + "<br><b>Lowest Price: </b>" + stockoutans1 + "<br><b>Highest Price: </b>" + stockoutans
	    }
      });

      xhr12.open("GET", "https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol="+outstock+"&datatype=json");
      xhr12.setRequestHeader("x-rapidapi-key", "53f7801bdamsha54ea83970e4847p14683ejsn2fae6caf5675");
      xhr12.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");

      xhr12.send(data12);

    }
  });
  
  xhr.open("GET", "https://alpha-vantage.p.rapidapi.com/query?keywords="+selec5+"&function=SYMBOL_SEARCH&datatype=json");
  xhr.setRequestHeader("x-rapidapi-key", "53f7801bdamsha54ea83970e4847p14683ejsn2fae6caf5675");
  xhr.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");
  
  xhr.send(data);
}


function country (selec) {
  const xhttp = new XMLHttpRequest()
  xhttp.responseType = 'json'
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      const aq=xhttp.response[0].name
      const sw=xhttp.response[0].currencies[0].name
      const de=xhttp.response[0].languages[0].name
      bubbleDOM7.innerHTML="<ol><li><b>Country:</b> "+aq+"</li><li><b>Currency:</b> "+sw+"</li><li><b>Language:</b> "+de+"</li></ol>"
      // console.log(parseInt(xhttp.response.USD_INR)*parseInt(selec))
    }
  }
  xhttp.open('GET', 'https://restcountries.eu/rest/v2/capital/'+selec, true)
  xhttp.send()
}

function goodread (selec) {
  const data = null;

const xhr = new XMLHttpRequest();
xhr.responseType = 'json'
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		bubbleDOM8.innerHTML="<b>Ingredients</b><br>"+this.response.hints[0].food.foodContentsLabel;
	}
});

xhr.open("GET", "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr="+selec);
xhr.setRequestHeader("x-rapidapi-key", "53f7801bdamsha54ea83970e4847p14683ejsn2fae6caf5675");
xhr.setRequestHeader("x-rapidapi-host", "edamam-food-and-grocery-database.p.rapidapi.com");

xhr.send(data);
}

