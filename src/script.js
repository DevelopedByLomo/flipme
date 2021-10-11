
const cards = [
    {name:'cheeseburger', img:'images/cheeseburger.png'},
    {name:'fries', img:'images/fries.png'},
    {name:'hotdog', img:'images/hotdog.png'},
    {name:'icecream', img:'images/icecream.png'},
    {name:'milkshake', img:'images/milkshake.png'},
    {name:'pizza', img:'images/pizza.png'},
    {name:'cheeseburger', img:'images/cheeseburger.png'},
    {name:'fries', img:'images/fries.png'},
    {name:'hotdog', img:'images/hotdog.png'},
    {name:'icecream', img:'images/icecream.png'},
    {name:'milkshake', img:'images/milkshake.png'},
    {name:'pizza', img:'images/pizza.png'}  
]
cards.sort(() => 0.5-Math.random())
//to render the images

function displayImages(){
    const grid = document.querySelector('.grid')
    for(let i = 0; i < cards.length; i++){
        const blankImg = document.createElement('img')
        blankImg.setAttribute('src','images/blank.png')
        blankImg.setAttribute('data-id', i)
        blankImg.addEventListener('click', flipcard)
        grid.appendChild(blankImg)
    }
}
displayImages()

let chosenCards =[]
let chosenCardsId = []
let chosenCardsWon = []
const images = document.querySelectorAll('img')
let score = 0
const scoreEl = document.querySelector('#score')

function flipcard(){
    let imgId = this.getAttribute('data-id')
    let imgName = cards[imgId].name
    images[imgId].setAttribute('src', cards[imgId].img)
    chosenCards.push(imgName)
    chosenCardsId.push(imgId)
    if(chosenCardsId.length && chosenCardsId.length == 2){
        setTimeout(checkForMatch,500)
    }
}

function checkForMatch(){
    let chosenCardOne = images[chosenCardsId[0]]
    let chosenCardTwo = images[chosenCardsId[1]]
    if(chosenCardsId[0] === chosenCardsId[1]){
        alert('you cant select the same card')
        chosenCardOne.setAttribute('src', 'images/blank.png')
        chosenCardTwo.setAttribute('src', 'images/blank.png')
    }else if (chosenCards[0] == chosenCards[1]){
        alert('you have got a set')
        chosenCardOne.setAttribute('src', 'images/white.png')
        chosenCardTwo.setAttribute('src', 'images/white.png')
        chosenCardOne.removeEventListener('click', flipcard)
        chosenCardTwo.removeEventListener('click', flipcard)
        chosenCardsWon.push(chosenCards)
        score++
        scoreEl.innerHTML = score
    }else{
        alert('Try again')
        chosenCardOne.setAttribute('src', 'images/blank.png')
        chosenCardTwo.setAttribute('src', 'images/blank.png')
    }
    chosenCards =[]
    chosenCardsId = []
}