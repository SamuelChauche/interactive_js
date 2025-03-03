let footer = document.querySelector("footer");
let clickCount = 0;

let onClick = function click(){
    clickCount ++;
    console.log("clique" + clickCount)
};
footer.addEventListener("click", onClick);

let burger = document.querySelector(".navbar-toggler");
let navbarHeader = document.querySelector("#navbarHeader");
let onClick2 = function(){
    navbarHeader.classList.toggle("collapse")
}
burger.addEventListener("click", onClick2)

//first card
let firstCard = document.querySelectorAll(".col-md-4")[0];
console.log("premiere carte :", firstCard);

let editButton = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary")[0];
console.log("bouton edit :", editButton);

editButton.addEventListener("click", function(){
let cardText = firstCard.querySelector(".card-text");
console.log(cardText);
cardText.style.color = "red";
});


//second card 
let secondCard = document.querySelectorAll(".col-md-4")[1];
console.log("seconde carte :", secondCard);

let secondeditButton = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary")[1];
console.log("bouton edit2 :", secondeditButton);
let cardText2 = secondCard.querySelector(".card-text");
console.log(cardText2);

secondeditButton.addEventListener("click", function(){
    if (cardText2.style.color === 'black'){    
        cardText2.style.color = 'green' ;
        }else cardText2.style.color = "black";
});

