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