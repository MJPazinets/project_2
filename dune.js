const button = document.querySelector('button')
const list = document.querySelector('ul')

button.addEventListener('click', async () => {
  let response = await axios.get("https://the-dune-api.herokuapp.com/quotes")
  let duneQuote = response.data

  duneQuote.forEach((quote) => {
    let newLi = document.createElement('li')
    newLi.innerText = quote.quote
    list.append(newLi)
    console.log(duneQuote)
  })
})
