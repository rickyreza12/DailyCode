document.addEventListener("DOMContentLoaded", () => {
//   alert("hello");
  const cardArray = [
    {
      name: "DragonFly",
      img: "Images/DragonFly.png",
    },
    {
      name: "DragonFly",
      img: "Images/DragonFly.png",
    },
    {
      name: "Monkey",
      img: "Images/Monkey.png",
    },
    {
      name: "Monkey",
      img: "Images/Monkey.png",
    },
    {
      name: "Phony",
      img: "Images/Phony.png",
    },
    {
      name: "Phony",
      img: "Images/Phony.png",
    },
    {
      name: "Rusa",
      img: "Images/Rusa.png",
    },
    {
      name: "Rusa",
      img: "Images/Rusa.png",
    },
    {
      name: "SeaDog",
      img: "Images/SeaDog.png",
    },
    {
      name: "SeaDog",
      img: "Images/SeaDog.png",
    },
    {
      name: "Swan",
      img: "Images/Swan.png",
    },
    {
      name: "Swan",
      img: "Images/Swan.png",
    },
    {
      name: "Tiger",
      img: "Images/Tiger.png",
    },
    {
      name: "Tiger",
      img: "Images/Tiger.png",
    },
    {
      name: "Snake",
      img: "Images/Snake.png",
    },
    {
      name: "Snake",
      img: "Images/Snake.png",
    }
  ];

cardArray.sort (() => 0.5 - Math.random())

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
//   grid.appendChild('hello');
// const grid = docoument.getElement

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "Images/Blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch()
  {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    // console.log(optionOneId);
    // console.log(optionTwoId);

    if(cardsChosen[0] === cardsChosen[1])
    {
      alert('you found a match')
      cards[optionOneId].setAttribute('src', 'Images/White.png')
      cards[optionTwoId].setAttribute('src', 'Images/White.png')
      cardsWon.push(cardsChosen)
    }
    else
    {
      cards[optionOneId].setAttribute('src', 'Images/Blank.png')
      cards[optionTwoId].setAttribute('src', 'Images/Blank.png')
      alert('sory, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2)
    {
      resultDisplay.textContent = "Congrats you won"
    }
  }

  function flipCard()
  {
    let cardId = this.getAttribute('data-id')

    // console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) 
    {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard();
  
});
