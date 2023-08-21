const API_KEY = "9FnZ0tl0VxGKRXh5vowvA14NCL6enI9TDswn6wKx";

function fetchRandomVerse() {
    const API_ENDPOINT = "http://quotes.rest/bible/verse.json";
    const headers = {
        "Authorization": `Bearer ${API_KEY}`
    };

    fetch(API_ENDPOINT, { headers })
        .then(response => response.json())
        .then(data => {
            const verse = data.contents.quote;  // API 응답에 따라 경로가 다를 수 있습니다.
            displayVerse(verse);
        })
        .catch(error => console.error("Error fetching the Bible verse:", error));
}

function displayVerse(verse) {
    const bibleDiv = document.getElementById("bible");
    bibleDiv.innerHTML = verse + bibleDiv.innerHTML;  // 성경 구절을 div에 추가합니다.
}

document.addEventListener("DOMContentLoaded", fetchRandomVerse);
