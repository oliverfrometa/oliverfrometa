let quotes = [
    "It always seems impossible until it's done.",
    "Focus on things you can control. Let go of things you can't.",
    "Your life is as good as your mindset.",
    "Act like the person you want to become."
];

let newQuoteSection = document.querySelector("#newQuoteSection");
let randomNumber = Math.floor(Math.random() * quotes.length)
newQuoteSection.innerHTML = quotes[randomNumber];


function getQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length)
   newQuoteSection.innerHTML = quotes[randomNumber];
}