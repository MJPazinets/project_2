const randomQuote = document.querySelector('#randomQuote')
const idNumber = document.querySelector("#idNumber")
const quoteIdButton = document.querySelector("#quoteIdButton")
const list = document.querySelector('ul')
const listTwo = document.querySelector('.box2')

randomQuote.addEventListener('click', async () => {
  let response = await axios.get("https://the-dune-api.herokuapp.com/quotes")
  let duneQuote = response.data

  duneQuote.forEach((quote) => {
    let newLi = document.createElement('li')
    newLi.innerText = quote.quote
    list.append(newLi)
    console.log(duneQuote)
  })
}) 

quoteIdButton.addEventListener('click', async (event) => {
  event.preventDefault()
  const id = idNumber.value 
  console.log(id)
  let response = await axios.get("https://the-dune-api.herokuapp.com/quotes/id/"+ id)
  let listId2 = document.createElement('li')
  listId2.innerText = response.data.quote
  listTwo.append(listId2)

})
