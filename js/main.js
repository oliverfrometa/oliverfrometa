let quotes = [
    "Focus on things you can control and let go of things you can't.",
    "Your life is as good as your mindset.",
    "Operate from a place of love, kindness and generosity without expecting anything in return.",
    "Forget about your what and focus on your why."
];

let newQuoteSection = document.querySelector("#newQuoteSection");
let randomNumber = Math.floor(Math.random() * quotes.length)
newQuoteSection.innerHTML = quotes[randomNumber];


function getQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length)
   newQuoteSection.innerHTML = quotes[randomNumber];
}