// Ticket change handler
function handleTicketChange(isIncrease, ticketCountId, ticketTotalId, price){
   const ticketInput = document.getElementById(ticketCountId);
   const ticketCount = parseInt(ticketInput.value);
   let ticketNewCount = ticketCount;
   if(isIncrease == true){
      ticketNewCount = ticketCount + 1;
   }
   if(isIncrease == false && ticketCount > 0){
      ticketNewCount = ticketCount - 1;
   }
   ticketInput.value = ticketNewCount;
   const ticketTotal = ticketNewCount * price;
   document.getElementById(ticketTotalId).innerText = ticketTotal;
   calculateTotal()
}

// Get Total Price
function calculateTotal(){
   const fClassCount = getInputValue('f-class-count');
   const fEconomyCount = getInputValue('economy-count');

   const totalCost = fClassCount * 150 + fEconomyCount * 100;
   document.getElementById('sub-total').innerText = totalCost;
   const tax = totalCost / 10;
   document.getElementById('tax').innerText = tax;
   const total = totalCost + tax;
   document.getElementById('total').innerText = total;
}

// get input value
function getInputValue(ticket){
   const ticketInput = document.getElementById(ticket);
   const ticketCount = parseInt(ticketInput.value);
   return ticketCount;
}

//Display Success Note handler
function displayHandler(mainForm, successForm){
   document.getElementById(mainForm).style.display = 'none';
   document.getElementById(successForm).style.display = 'block';
   const fClassCount = getInputValue('f-class-count');
   const fEconomyCount = getInputValue('economy-count'); 
   const totalTicket = fClassCount + fEconomyCount;
   document.getElementById('total-ticket').innerText = totalTicket;
   const totalCost = document.getElementById('total').innerText;
   document.getElementById('total-price').innerText = totalCost;
   document.getElementById('f-class-ticket').innerText = fClassCount;
   document.getElementById('economy-ticket').innerText = fEconomyCount;
}


