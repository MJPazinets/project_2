const button = document.querySelector('button')
const idNumber = document.querySelector("#idNumber")
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

idNumber.addEventListener('click', async () => {
  const id = idNumber.value 
  let response = await axios.get("https://the-dune-api.herokuapp.com/quotes/id/"+ id)
  let duneId = response.data
  console.log(response.data)
})
