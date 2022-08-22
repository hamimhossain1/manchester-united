const playersList = [];

// set player name list on display //
function showPlayersName(playersList){
    const nameList = document.getElementById('name-list');
    nameList.innerText = '';
    console.log(nameList)

    for(let i = 0; i < playersList.length; i++){
        const playersNameList = playersList[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th class="text-slate-400">${i+1}.</th>
        <th class="text-slate-400">${playersNameList}</th>
        `;
        nameList.appendChild(tr);
    }
};

// get players name list //
function addToList(element){
    const playersName = element.parentNode.parentNode.children[0].innerText;
    if(playersList.length<5){
        playersList.push(playersName);
        element.disabled = true;
    }
    else{
        alert('Your limit not more then five.')
    }
    showPlayersName(playersList);
};

// calculate player expenses //
document.getElementById('btn-calculate').addEventListener('click', function(){
    const totalPlayers = playersList.length;
    const perPlayerValue = getInputValue('per-player-input-value')
    if(isNaN(perPlayerValue)){
        alert('Please give number.')
        return;
    }
    const totalPlayersExpenses = totalPlayers * perPlayerValue;

    const playerExpenses = getElementValue('player-expenses');
    setValue('player-expenses', totalPlayersExpenses);
});


// calculate total expenses//
document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerCost = getInputValue('manager-cost');
    
    const coachCost = getInputValue('coach-cost');
    if(isNaN(managerCost) || isNaN(coachCost)){
        alert('Please enter number in both input fields.')
        return;
    }
    const playerExpenses = getElementValue('player-expenses');
    const totalAmount = playerExpenses+managerCost+coachCost;
    const total = getElementValue('total');
    setValue('total',totalAmount );
});