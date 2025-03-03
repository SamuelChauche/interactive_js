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

//nuclear
let linkTag = document.querySelector('link[rel="stylesheet"]');
linkTag.disabled = false;

let navBar = document.querySelector(".collapse.bg-dark")
console.log ("ceci est la navbar :", navBar)

let disable = function(){
    if (linkTag.disabled === false){
        linkTag.disabled = true;
    }else{ 
        linkTag.disabled = false;
    }
};
navBar.addEventListener('dblclick', disable)
console.log(navBar)


// Exercice 6
let cards = document.querySelectorAll(".card");


for (let i = 0; i < cards.length; i++) {
    let viewButton = cards[i].querySelector(".btn-success");
    console.log("this is the edit button:", viewButton)
    let cardImage = cards[i].querySelector(".card-img-top");
    console.log("this is the card image :", cardImage)
    let cardText = cards[i].querySelector(".card-text");
    console.log("this is the text :", cardText)

    viewButton.addEventListener("mouseenter", function () {
        cardImage.style.width = "20%"; 
        cardText.style.display = "none"; 
    });

    viewButton.addEventListener("click", function () {
        cardImage.style.width = ""; 
        cardText.style.display = ""; 
    });
}