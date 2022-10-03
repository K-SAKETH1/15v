let quotesDiv = document.getElementById('spanQuote')
let buttonDiv = document.getElementById('getQuote')
let number = document.getElementById('no')
let quotesNumber = 1;
function randomNumber() {
    let random = Math.floor(Math.random()*1644)
    return random
}
function randomQuotes(num) {
    fetch("https://type.fit/api/quotes")
  .then(response => response.json())
.then(json=>{
    // quotesDiv.innerText = `${json}`
  quotesDiv.innerText = `"${json[num].text}"`
})
}
buttonDiv.onclick = () => {
    quotesNumber = quotesNumber+1;
    number.innerText = quotesNumber
    randomNumber()
    randomQuotes(randomNumber())
}