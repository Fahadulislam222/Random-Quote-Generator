const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

const urlAPI = 'https://api.api-ninjas.com/v1/quotes?category=beauty';
const keyAPI = '+ZCYslVEaiG62fwsLxe0SA==jGEX0SEaqdFeJt6y';

const getQuote =() =>{
    fetch(urlAPI,{
        headers: {
            'X-Api-key': keyAPI,
        },
    })
    .then(data => data.json())
    .then(item => {
       // console.log(item[0]);
        quoteElement.textContent = item[0].quote;
        authorElement.textContent = item[0].athor;
    })
    .catch(error => {
    console.error('Error Fatching Quotes',error);
});
};
getQuote();
button.addEventListener('click',getQuote);