function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;//+ coverts string numbers into intergers
    console.log(editedPlayer);
    playerConfigOverlayElement.style.display='block';
    backdropElement.style.display='block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value='';
}

function savePlayerConfig(event){
    event.preventDefault();//As we don't know till now how to work with the form submition and how to manipulate it in the backend thta's why with the help of Event Object's preventDefault() we have prevented default functioning sending https request. 
    const formData=new FormData(event.target); 
    const enteredPlayerName=formData.get('playername').trim();//gets rid of excess white space.eg'      '=> means enetered nothing
    //console.log(playerName);
    if(!enteredPlayerName){ //Or enetredPlayerName===' '
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent='Please enter a valid Name';
        return;//to stop the execution of the function,so that once error is show,nothing else executes from the code
    }
    const updatedPlayerDataElement=document.getElementById('player-' +editedPlayer+ '-data');
    updatedPlayerDataElement.children[1].textContent=enteredPlayerName;

    if(editedPlayer === 1){
        players[0].name=enteredPlayerName;
    }
    else{
        players[1].name=enteredPlayerName;
    }
    closePlayerConfig();//to close the player name popup by clicking confirm
}
