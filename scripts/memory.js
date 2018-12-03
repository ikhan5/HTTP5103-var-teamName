
// this array stores my card data 
const deck = [
    {
        name: 'axe',
        img: 'images/axe.png'
    },
    {
        name: 'backpack',
        img: 'images/backpack.png'
    },
    {
        name: 'firstaid',
        img: 'images/firstaid.png'
    },
    {
        name: 'lighter',
        img: 'images/lighter.png'
    },
    {
        name: 'pocket knife',
        img: 'images/pocketknife.png'
    },
    {
        name: 'radio',
        img: 'images/radio.png'
    },
    {
        name: 'shotgun',
        img: 'images/shotgun.png'
    },
    {
        name: 'tent',
        img: 'images/tent.png'
    },
    {
        name: 'water',
        img: 'images/water.png'
    }
];

//uncongragulations modal should appear when player wins asking if player wants to 
//play again?


//variable for amount of tries
let executed = 0;

//variable for correct match panel
let correctCount = 0;

//users can only test two at a time
let choice = 0;
let firstTry = '';
let secondTry = '';
let nextTry = null;
let moves = 0;
let delay = 1500;
//variable for countdown clock
let countdown = 61; //is this an okay strategy for countdown?

startbutton = document.getElementById('start-button')

const startGame = function() {

    //this will prevent player from clicking the button again and again
    executed ++;
    if(executed){
        startbutton.removeEventListener('click', startGame);
    }

    //game grid that gets created when button pressed
    const memoryGame = document.getElementById('game-deck');
    const deckContainer = document.createElement('ul');
    deckContainer.setAttribute('class', 'game-container');
    memoryGame.appendChild(deckContainer);

    //score panel
    const score = document.getElementById("score-panel");

    //correct attempts panel
    const correct = document.getElementById("correct-score-panel");


    let memoryDeck = deck
        .concat(deck) //duplicate my array
        .sort(() => 0.5 - Math.random()); //shuffles my array

        //this rigs my game, comment it out to properly play game
        delete memoryDeck[0];

    //creating final deck
    const finalDeck = memoryDeck.map(item => {

        const card = document.createElement('li');
        card.classList.add('card');
        card.dataset.name = item.name;

        //front of card
        const cardFront = document.createElement('div');
        cardFront.classList.add('front');

        //back of card
        const cardBack = document.createElement('div');
        cardBack.classList.add('back');
        cardBack.style.backgroundImage = `url(${item.img})`;

        deckContainer.appendChild(card);
        card.appendChild(cardFront);
        card.appendChild(cardBack);

    });

    //event listener for selecting cards
    deckContainer.addEventListener('click', selectedCard);

    //function to find matches 
    function match() {
        let clicked = document.querySelectorAll('.selected');
        clicked.forEach(card => {
            card.classList.add('match');
        });
    }

    //function to continue playing
    function tryAgain () {
        choice = 0;
        firstTry = '';
        secondTry = '';
        let clicked = document.querySelectorAll('.selected');
        clicked.forEach(card => {
            card.classList.remove('selected');
        });
    }

    //this function will count my moves
    const countMoves = function () {
        moves ++;
        score.innerHTML = moves;
    }

    //function that counts my correct moves
    const correctMoves = function() {
        correctCount ++;
        correct.innerHTML = correctCount;
    }

    //function for the card selections
    function selectedCard(){
        let selected = event.target;
        if(selected.nodeName === 'UL' || selected === nextTry 
        || selected.parentNode.classList.contains('selected') || selected.parentNode.classList.contains('match')
        ){
            return;
        }
        if (choice < 2){
            choice ++;
            if(choice === 1) {
                firstTry = selected.parentNode.dataset.name;
                console.log(firstTry);
                selected.parentNode.classList.add('selected');
            } else {
                secondTry = selected.parentNode.dataset.name;
                console.log(secondTry);
                selected.parentNode.classList.add('selected');
            }
            if (firstTry !== '' && secondTry !== ''){
                if (firstTry === secondTry) {
                    countMoves();
                    correctMoves();
                    setTimeout(match, delay);
                    setTimeout(tryAgain, delay);
                } else {
                    countMoves();
                    setTimeout(tryAgain, delay);
                }
            }
            nextTry = selected;
        }

    }

    //countdown timer 
    const countdownTimer = setInterval(function() {
        countdown --;
        document.getElementById("timer").innerHTML = countdown;
        if(countdown <= 0) { //add a message that will ask if they want to startGame();
                clearInterval(countdownTimer);
                const result = confirm('Do you want to play again?'); //add a custom popup that takes up whole screen
                if(result === true) {
                    resetGame();
                } else {
                    window.location.reload(true); //reloads the page
                }
            }
    }, 1000);

    function resetGame() {
        executed = 0;
        countdown = 61;
        correctCount = 0;
        choice = 0;
        delay = 1500;
        firstTry = '';
        secondTry = '';
        nextTry = null;
        moves = 0;
        score.innerHTML = '';
        correct.innerHTML = '';
        memoryGame.innerHTML = '';
        startGame();
    }

    return finalDeck;

};

startbutton.addEventListener('click', startGame);





