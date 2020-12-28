let baseURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');
logo.addEventListener('click', fetchQuote);


function fetchQuote() {
    fetch(baseURL)
    .then(response => response.json())
    .then(json => displayQuote(json))

    let logoContainer = document.getElementById('logoContainer');
    logoContainer.removeChild(logo);
    let instructions = document.getElementById('instructions');
    logoContainer.removeChild(instructions);
}

let displayQuote = json => {
    console.log(json);

    let quote = document.createElement('h1');
    quote.className = 'quote';
    quote.innerText = `"${json[0]}"`;
    quote.style = 'font-family: pinewood; color: #3a2718';
    // console.log(quote);

    let quoteBy = document.createElement('p');
    quoteBy.id = 'quoteBy';
    quoteBy.innerText = '- Ron Swanson';
    quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718';
    // console.log(quoteBy);

    console.log(json[0].length);
    if (json[0].length >= 50 && json[0].length <= 150) {
        quote.style.fontSize = '4rem';
    } else if (json[0].length < 50) {
        quote.style.fontSize = '5rem'
    } else {
        quote.style.fontSize = '2rem';
    }   

    let button = document.createElement('button');
    button.innerText = 'Another Please';
    button.className = 'reset';
    button.style = 'margin: 0; margin-top: 4em;'

    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(button);

    button.addEventListener('click', () => {
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(button);

        fetchQuote();
    })
}