//GLOBAL VARIABLES

const addTagBtn = document.getElementById('entry-tag-btn');
const moodDialog = document.getElementById('mood-dialog');
const closeDialogBtn = document.getElementById('close-dialog');


//EVENT LISTNERS

//LOAD CURRENT DATE
document.addEventListener('DOMContentLoaded',()=>{
                
                const today = new Date();

                //Crete formatted date
                const formattedDate = new Intl.DateTimeFormat('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                const standardDateFormat = formattedDate.format(today);
                const cleanDateFormat = standardDateFormat.replace(/,/g, '');
  

                const displayDate = document.getElementById('display-date');
                displayDate.textContent = cleanDateFormat; 
                
                //add date to save
                console.log(today);

                const entryDate = document.getElementById('entry-date');
                const storedDate = new Date().toLocaleDateString('en-CA');
                console.log(storedDate)
                entryDate.value = storedDate;
                
            });

            // Get our HTML elements


//CHOOSE MOOD
addTagBtn.addEventListener('click', () => {
    moodDialog.showModal(); // This opens the dialog natively
});

// 2. When "Cancel" is clicked, close the box
closeDialogBtn.addEventListener('click', () => {
    moodDialog.close();
});

// 3. Listen for clicks inside the pop-up box
moodDialog.addEventListener('click', (event) => {
    // Check if the clicked element is one of our mood options
    const moodButton = event.target.closest('.mood-option');
    if (!moodButton) return; // If they clicked the background, do nothing

    // Get the exact mood text from the data attribute (e.g., "Happy")
    const selectedMood = moodButton.dataset.mood;

    console.log("You selected:", selectedMood); // Your chosen mood is ready!
    
    moodDialog.close(); // Close the pop-up automatically
});
