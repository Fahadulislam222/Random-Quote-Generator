const randomQuotes = [
    {  
        quote: 'Keep your face always toward the sunshine - and shadows will fall behind you.',
        author: 'Walt Whitman',
    },
    {
        quote: 'I cannot change the direction of the wind, but I can adjust my sails to always reach my destination.',
        author: 'Jimmy Dean',
    },
    {
        quote: 'Perfection is not attainable, but if we chase perfection we can catch excellence.',
        author: 'Vince Lombardi',
    },
    {
        quote: 'It is never too late to be what you might have been.',
        author: 'George Eliot',
    },
    {
        quote: "Ah, but a man's reach should exceed his grasp, or what is heaven for?",
        author: 'Robert Browning',
    },
];

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

// Function to display a random quote
function autoQuote() {
    const quoteIndex = Math.floor(Math.random() * randomQuotes.length);
    quoteElement.textContent = randomQuotes[quoteIndex].quote;
    authorElement.textContent = `— ${randomQuotes[quoteIndex].author}`;
}

// Display an initial random quote on page load
autoQuote();

// Add event listener to the button for generating a new random quote
button.addEventListener('click', autoQuote);
