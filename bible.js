const API_URL = "https://random-quote.hyobb.com"
const quoteElement =  document.getElementById("bible");

const getQuote = async() => {
    try {
        const data = await fetch(API_URL).then((res) => res.json());
        console.log(data);
        const result = data[1].respond;
        console.log(result);   
    } catch(err) {
        console.log(`err: ${err}`);
    }
}

getQuote();