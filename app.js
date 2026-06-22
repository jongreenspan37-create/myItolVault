//LOAD LOCAL STORAGE FOR ALL PAGES
let savedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

//VISUAL DATE FORMAT
function getCleanDate(dateObject){
    

    const formattedDate = new Intl.DateTimeFormat('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

    const standardDateFormat = formattedDate.format(dateObject);
    const cleanDateFormat = standardDateFormat.replace(/,/g, '');

    return cleanDateFormat
}

//CARD TEMPLATE
function getNewCard(title, text, tagsHTML, dateObject){
    return       `<div class="thought-card">
                     <div class="tag-container">
                     ${tagsHTML}
                     </div>                
                     <div id="thought-date" class="thought-date">${getCleanDate(dateObject)}</div>
                     <div class="thought-title">${title}</div>
                     <div class="thought-body">${text}</div>
                    
                    </div>`;

}