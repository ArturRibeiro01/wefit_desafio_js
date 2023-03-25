// Olá, essa é a solucão do desafio JS da WE-FIX

// GLOBAL
let doc = document
const colorWhite = getComputedStyle(doc.documentElement).getPropertyValue('--white');
const colorGray = getComputedStyle(doc.documentElement).getPropertyValue('--gray');


//MENU
let groupMenuContainer = doc.querySelector('div[role="group"]');
groupMenuContainer.classList.remove('btn-group-vertical');


// HEADER
let jumbo = doc.querySelector('.jumbotron')
let link = doc.querySelector('.jumbotron > a');

function editStyleJumbo() {
  let jumboPrefix = jumbo.style
  let linkPrefix = link.classList

  jumboPrefix.backgroundColor = colorGray
  jumboPrefix.color = colorWhite
  jumboPrefix.textAlign = "right"

  linkPrefix.remove('btn-primary');
  linkPrefix.add('btn-success');
}
editStyleJumbo()


//CARDS
function addTitle(list) {
  list.forEach((t) => {
    let nearbyCard = t.closest('div.card');
    nearbyCard.dataset['title'] = t.textContent;
  })
}

function AddClassButtonAnimals(cardTitle) {
  let btn = doc.querySelector(`[data-title="${cardTitle}"] .btn-primary`)
  btn.classList.add('btn-success');
}

function handleData (nodeListData,from, to ) {
  let item = nodeListData[to].offsetParent.parentElement

  item.insertBefore(
    nodeListData[from].offsetParent,
    nodeListData[to].offsetParent,
  )
}

function changeOrderCard() {
  let cards = document.querySelectorAll('.card');
  handleData(cards, 3, 0)
  handleData(cards, 2, 1)
}

function changeCards() {
  let cardsTitle = document.querySelectorAll('.card-title');

  changeOrderCard()
  addTitle(cardsTitle)
  AddClassButtonAnimals('Animais')
}
changeCards()


//LIST
let createNewLiItem = ({ contentText, isActive = false }) => {
  let contentBody = doc.createTextNode(contentText)
  let tagLi = doc.createElement('li')

  tagLi.classList.add('list-group-item')
  tagLi.appendChild(contentBody)

  if (isActive) { tagLi.classList.add('active')}

  return tagLi
}

function removeOldClass() {
  let itemActive = doc.querySelector('li.active')
  itemActive.classList.remove('active')
}

function editList() {
  removeOldClass()

  let ul = doc.querySelector('ul.list-group')
  let itemFour = createNewLiItem({ contentText: 'Quarto item', isActive: true })
  let itemFive = createNewLiItem({ contentText: 'Quinto item' })

  ul.appendChild(itemFour)
  ul.appendChild(itemFive)
}
editList()
