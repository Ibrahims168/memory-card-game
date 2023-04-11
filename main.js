const cards = document.querySelectorAll(".memory-card");
const heading = document.querySelector(".heading");
let isCardFlipped = false;
let lockBoard = false;
let firstCard;
let secondCard;

shuffle()

// buttons
var startBtn = document.querySelector(".startBtn")
var harryPotter = document.querySelector(".harryPotter");
var dogsBtn = document.querySelector(".dogs");
var flagsBtn = document.querySelector(".flags");
var restartBtn = document.querySelector(".restart");
var randomBtn = document.querySelector(".random");

    
// start btn 
startBtn.addEventListener("click", () => {
     heading.textContent = "Please, choose an option!"
     startBtn.classList.add("displayNone");
     harryPotter.classList.remove("displayNone");
     dogsBtn.classList.remove("displayNone");
     flagsBtn.classList.remove("displayNone");
     randomBtn.classList.remove("displayNone");
     document.querySelector("#beatIcon").classList.add("displayNone");

    getRandomOption(randomBtn);
});
    
// restart btn
restartBtn.addEventListener("click", () => {
    location.reload()  
});


    // harry poter btn
    harryPotter.addEventListener("click", () => {
        showCards = document.querySelector(".mainCardsContainer").classList.remove("displayNone");
        document.querySelector(".headerCardsContainer").classList.add("displayNone");
        document.querySelector(".score").classList.remove("displayNone");
        document.querySelector(".timer").classList.remove("displayNone");
        heading.textContent = "Harry Potter Edition";
        harryPotter.classList.add("displayNone");
        dogsBtn.classList.add("displayNone");
        flagsBtn.classList.add("displayNone");
        restartBtn.classList.remove("displayNone");
        randomBtn.classList.add("displayNone");
        // background image
        var backFaceImg = "https://cdn-icons-png.flaticon.com/512/1601/1601065.png";
        $(".back-face").attr("src", backFaceImg);
        //api link harry potter characters
        $.getJSON("https://hp-api.onrender.com/api/characters", function (data){
        // card image
        var apiImg1 = data[1].image;
        $(".front-face.apiImg1").attr("src", apiImg1);
        var apiImg2 = data[2].image;
        $(".front-face.apiImg2").attr("src", apiImg2);
        var apiImg3 = data[3].image;
        $(".front-face.apiImg3").attr("src", apiImg3);
        var apiImg4 = data[4].image;
        $(".front-face.apiImg4").attr("src", apiImg4);
        var apiImg5 = data[5].image;
        $(".front-face.apiImg5").attr("src", apiImg5);
        var apiImg6 = data[0].image;
        $(".front-face.apiImg6").attr("src", apiImg6);   
    })
})

// dogs btn 
dogsBtn.addEventListener("click", () => {
    showCards = document.querySelector(".mainCardsContainer").classList.remove("displayNone");
    document.querySelector(".headerCardsContainer").classList.add("displayNone");
    document.querySelector(".score").classList.remove("displayNone");
    document.querySelector(".timer").classList.remove("displayNone");
    heading.textContent = "Dogs Edition";
    harryPotter.classList.add("displayNone");
    dogsBtn.classList.add("displayNone");
    flagsBtn.classList.add("displayNone");
    restartBtn.classList.remove("displayNone");
    randomBtn.classList.add("displayNone");
        // back face image
        var backFaceImg = "https://cdn-icons-png.flaticon.com/512/1662/1662923.png";
        $(".back-face").attr("src", backFaceImg);
        // front face image (card image) api dogs link
        $.getJSON("https://dog.ceo/api/breed/hound/images", function (data){
        var apiImg1 = data.message[1];
        $(".front-face.apiImg1").attr("src", apiImg1);
        var apiImg2 = data.message[2];
        $(".front-face.apiImg2").attr("src", apiImg2);
        var apiImg3 = data.message[3];
        $(".front-face.apiImg3").attr("src", apiImg3);
        var apiImg4 = data.message[4];
        $(".front-face.apiImg4").attr("src", apiImg4);
        var apiImg5 = data.message[5];
        $(".front-face.apiImg5").attr("src", apiImg5);
        var apiImg6 = data.message[6];
        $(".front-face.apiImg6").attr("src", apiImg6);         
    });
});

// flags btn
flagsBtn.addEventListener("click", () => {
    showCards = document.querySelector(".mainCardsContainer").classList.remove("displayNone");
    document.querySelector(".headerCardsContainer").classList.add("displayNone");
    document.querySelector(".score").classList.remove("displayNone");
    document.querySelector(".timer").classList.remove("displayNone");
    heading.textContent = "Flags Edition";
    harryPotter.classList.add("displayNone");
    dogsBtn.classList.add("displayNone");
    flagsBtn.classList.add("displayNone");
    restartBtn.classList.remove("displayNone");
    randomBtn.classList.add("displayNone");

        // back face image
        var backFaceImg = "https://cdn-icons-png.flaticon.com/512/473/473724.png";
        $(".back-face").attr("src", backFaceImg);
        // front face image (card image)
        var apiImg1 = "https://flagsapi.com/RW/shiny/64.png";
        $(".front-face.apiImg1").attr("src", apiImg1);
        var apiImg2 = "https://flagsapi.com/US/shiny/64.png";
        $(".front-face.apiImg2").attr("src", apiImg2);
        var apiImg3 = "https://flagsapi.com/RE/shiny/64.png";
        $(".front-face.apiImg3").attr("src", apiImg3);
        var apiImg4 = "https://flagsapi.com/JP/shiny/64.png";
        $(".front-face.apiImg4").attr("src", apiImg4);
        var apiImg5 = "https://flagsapi.com/IT/shiny/64.png";
        $(".front-face.apiImg5").attr("src", apiImg5);
        var apiImg6 = "https://flagsapi.com/MX/shiny/64.png";
        $(".front-face.apiImg6").attr("src", apiImg6);      

});


// random btn 
randomBtn.addEventListener("click", () => {
    const randomOption = getRandomOption()
        randomOption.click();
        randomBtn.classList.add("displayNone");
        document.querySelector(".headerCardsContainer").classList.add("displayNone");
        document.querySelector(".HeadingParagraph").classList.remove("displayNone"); 
});
// random option function
var options = [harryPotter, dogsBtn, flagsBtn]
function getRandomOption(){
     return  options[Math.floor(Math.random() * options.length)];
};
// add event Listener to all cards
cards.forEach((card) => {
    card.addEventListener("click", flipCard)
});
//shuffle cards
function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12); // give me random numbers 0 - 12
        card.style.order = randomPosition
 });
};

// check if all the card are flipped
function checkAllCardsFlipped() {
    const cards = document.querySelectorAll('.memory-card');
    const allFlipped = Array.from(cards).every(card => card.classList.contains('flip'));
    if (allFlipped) {
        stopTimer()
        document.querySelector(".score").classList.add("displayNone");
        document.querySelector(".timer").classList.add("displayNone");
        document.querySelector(".HeadingParagraph").classList.add("displayNone");
        heading.textContent = "Congratulations, you have flipped all the cards in " + seconds + " seconds and " + score + " trys";
    };
  };

// start the timer only on the first click
let firstClick = true;
function handleClick(){
  if (firstClick) {
    startTimer()
    firstClick = false; 
  }
}

// timer function for seconds
let seconds = 00;
let timerId;
  
function startTimer() {
    timerId = setInterval(() => {
      seconds++;
      const timerDisplay = document.querySelector(".timer");
      timerDisplay.textContent = "Time: " +seconds;
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(timerId);
  }

// count how many guess
function addToScore(){
    document.querySelector(".score").textContent = "Trys: " + score;
}


// board cards
var score = 0
var clicks = 0
function flipCard(){
    if (lockBoard) {
        return;
    } 
    else if (this === firstCard) {
        return;
    }
    else{
        this.classList.add("flip");
        clicks++
        if (clicks % 2 ==0) {
            score++
            addToScore()
        }
        // flipped first card
        if (!isCardFlipped) {
            isCardFlipped = true;
            firstCard = this;
            handleClick()
            return;
            // fliped second card
        } else {
            secondCard = this;
            checkForMatch()
            checkAllCardsFlipped()
        };
    };
};
// check for match
function checkForMatch() {
    lockBoard = true;
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    
    isMatch ? disableCards() : unflipCards();
};
  // disable cards
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  };
  // unflipped cards
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1500);
  };
  // reset board
  function resetBoard() {
    isCardFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
  };

