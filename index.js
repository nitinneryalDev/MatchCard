let cardsArray = [
  {
    name: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "jQuery",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnOERRdJZSEYeeGJ1s0ReOwaWV0iC2Ra1faqhFZyp12KiFbIYG6REl3a7bQWy8CObCvc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnOERRdJZSEYeeGJ1s0ReOwaWV0iC2Ra1faqhFZyp12KiFbIYG6REl3a7bQWy8CObCvc&usqp=CAUhttps://www.logo.wine/a/logo/JQuery/JQuery-Logo.wine.svg",
  },
  {
    name: "JS",
    img: "https://quintagroup.com/cms/js/js-image/javascript-logo.png",
  },
  {
    name: "Node",
    img: "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
  },
  {
    name: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
  },
];

const parentDiv = document.querySelector("#card-section");

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray);
console.log(gameCard);

// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         // console.log(i, j)
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }
//     return array
// }
//
// const shuffledChild = myNumbers(gameCard)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

let clickCount = 0;
let firstCard = "";
let secondCard = "";

// styling the match card
const card_matches = () => {
  let card_selected = document.querySelectorAll(".card_selected");

  card_selected.forEach((curElem) => {
    curElem.classList.add("card_match");
  });
};

// step 7

const resetGame = () => {
  firstCard = "";
  secondCard = "";
  clickCount = 0;

  let card_selected = document.querySelectorAll(".card_selected");

  card_selected.forEach((curElem) => {
    curElem.classList.remove("card_selected");
  });
};

// step 4
parentDiv.addEventListener("click", (event) => {
  let curCard = event.target;

  if (curCard.id === "card-section") {
    return false;
  }

  clickCount++;

  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected");
    } else {
      secondCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card_selected");
    }

    if (firstCard !== "" && secondCard !== "") {
      if (firstCard === secondCard) {
        // curCard.classList.add('card_match')
        setTimeout(() => {
          card_matches();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          resetGame();
        }, 1000);
      }
    }
  }
});

// step 1 to add the card
for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;
  // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

  const front_div = document.createElement("div");
  front_div.classList.add("front-card");

  const back_div = document.createElement("div");
  back_div.classList.add("back-card");

  back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

  parentDiv.appendChild(childDiv);

  childDiv.appendChild(front_div);
  childDiv.appendChild(back_div);
}
