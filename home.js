


const lineOneEntries = savedEntries.slice(-2);
const lineTwoEntries = savedEntries.slice(-4,-2);
const lineThreeEntries = savedEntries.slice(-5,-4)

const lineOne =document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');

function addCard(title,date,text,moodsArray) {


    const tagsHTML = moodsArray && moodsArray.length > 0
            ? moodsArray.map(mood => `<div class="tag-button">${mood}</div>`).join('')
            :'';
    
    const dateObject = new Date(date + 'T00:00:00');

    const newCard = getNewCard(title, text, tagsHTML, dateObject);
    
    return newCard;
}

function createHomeThoughts(){
    
    if (lineOne && lineOneEntries.length > 0) {
        lineOneEntries.forEach((item)=>{
             cardHtml = addCard(item.title, item.date, item.text, item.moods)
            lineOne.insertAdjacentHTML('beforeend', cardHtml);
        });
    }

    if (lineTwo && lineTwoEntries.length > 0) {
        lineTwoEntries.forEach((item)=>{
            const cardHtml = addCard(item.title, item.date, item.text, item.moods)
            lineTwo.insertAdjacentHTML('beforeend', cardHtml);
    });
    }

    if (lineThree && lineThreeEntries.length > 0) {
        lineThreeEntries.forEach((item)=>{
            const cardHtml = addCard(item.title, item.date, item.text, item.moods)
            lineThree.insertAdjacentHTML('beforeend', cardHtml);
    });
    }


}


createHomeThoughts()

