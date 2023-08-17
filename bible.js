const API_KEY = "9FnZ0tl0VxGKRXh5vowvA14NCL6enI9TDswn6wKx";


const bibleElement = document.getElementById("bible");

const getBible = async() => {
    
    const API_ENDPOINT = "http://quotes.rest/bible/verse.json";
    const headers = {
        "Authorization": `Bearer ${API_KEY}`
    };

    const data = await fetch(API_ENDPOINT, {headers} ).then((res)=>res.json())
    console.log(data);
}

getBible();