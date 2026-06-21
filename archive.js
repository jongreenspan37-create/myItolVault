

const displayThoughts = document.getElementById('display-thoughts');

function addCard(title,date,text,moodsArray) {

    const tagsHTML = moodsArray && moodsArray.length > 0
            ? moodsArray.map(mood => `<div class="tag-button">${mood}</div>`).join('')
            :'';
    
    const dateObject = new Date(date + 'T00:00:00');

    const newCard = getNewCard(title, text, tagsHTML, dateObject);
    
    return newCard;
}

function createBody(){
    if (savedEntries.length > 0) {
        savedEntries.toReversed().forEach((item)=>{
             cardHtml = addCard(item.title, item.date, item.text, item.moods)
            displayThoughts.insertAdjacentHTML('beforeend', cardHtml);
        });
    }
}

createBody();



