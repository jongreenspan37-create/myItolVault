//GLOBAL VARIABLES

const addTagBtn = document.getElementById('entry-tag-btn');
const moodDialog = document.getElementById('mood-dialog');
const closeDialogBtn = document.getElementById('close-dialog');
const displayDate = document.getElementById('display-date');
const entryDate = document.getElementById('entry-date');
const moodContainer = document.querySelector('.mood-container');
const displayMoods =document.getElementById('display-moods');
const moodDelete = document.querySelectorAll('.mood-delete');
const inputForm = document.getElementById('input-form');

let newEntryMoods = [];



//FUNCTIONS

function clearAndCloseForm() {
   
    inputForm.reset();

   
    newEntryMoods = [];

   
    const dynamicMoods = moodContainer.querySelectorAll('.mood-tag');
    dynamicMoods.forEach(tag => tag.remove());

    window.location.href = "index.html"; 
}



//LOAD CURRENT DATE
if(displayDate && entryDate){
                
    const dateObject = new Date();

    
    
    displayDate.textContent = getCleanDate(dateObject); 
                
    //add date to save in form
    const storedDate = new Date().toLocaleDateString('en-CA');
    entryDate.value = storedDate;
                
}

            
//EVENT LISTNERS

//OPEN MOOD DIALOG
addTagBtn?.addEventListener('click', () => {
    moodDialog.showModal(); 
});

//CLOSE MOOD DIALOG
closeDialogBtn?.addEventListener('click', () => {
    moodDialog.close();
});

//CHOOSE MOOD
moodDialog?.addEventListener('click', (event) => {
    // Check if the clicked element is one of our mood options
    const moodButton = event.target.closest('.mood-option');
    if (!moodButton) return; // If they clicked the background, do nothing

    
    const selectedMood = moodButton.dataset.mood;
    console.log(selectedMood);
    const moodHTML = ` <div class="mood-tag">
                            <div >${selectedMood}</div>    
                            
                            <button type="button"
                                    data-mood = "${selectedMood}"
                                    class="mood-delete">
                                    x
                            </button>
                            
                        </div>`
    
    

    newEntryMoods.push(selectedMood)

    moodContainer.insertAdjacentHTML('beforeend', moodHTML);

    
    console.log(newEntryMoods);

    moodDialog.close();
}); 

moodContainer?.addEventListener ('click', (event)=> {
    const deleteButton = event.target.closest('.mood-delete')
    if(!deleteButton) return;

    const moodToRemove = deleteButton.dataset.mood;

    const index = newEntryMoods.indexOf(moodToRemove);
    if(index > -1){
        newEntryMoods.splice(index, 1);
    }
    
    const moodTag = deleteButton.closest('.mood-tag');
    moodTag.remove();

});

inputForm?.addEventListener('submit', (e)=>{
    e.preventDefault();

    const formData = new FormData(inputForm)
    
    const newEntry = {
        id: Date.now(), // Unique ID for finding/deleting later
        title: formData.get('entry-title'),
        date: formData.get('entry-date'),
        text: formData.get('entry-text'),
        moods: [...newEntryMoods] // Copy current values from your tracked moods array
    };

    savedEntries.push(newEntry);

    localStorage.setItem('journalEntries', JSON.stringify(savedEntries));

   clearAndCloseForm();

    

});


