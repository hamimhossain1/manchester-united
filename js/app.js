const playersList = [];

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

        console.log(playersNameList)
    }

    
};


function addToList(element){
    const playersName = element.parentNode.parentNode.children[0].innerText;
    
    playersList.push(playersName);

    showPlayersName(playersList);

};














document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerValue = getInputValue('per-player-input-value')
    // console.log(perPlayerValue)

    const playerExpenses = getElementValue('player-expenses');
    setValue('player-expenses', perPlayerValue);

    

});


document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerCost = getInputValue('manager-cost');
    
    const coachCost = getInputValue('coach-cost');
    
    const playerExpenses = getElementValue('player-expenses');
    
    const totalAmount = playerExpenses+managerCost+coachCost;
    const total = getElementValue('total');
    setValue('total',totalAmount );
    
    console.log(playerExpenses)


});