
const billTotal = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
let numberOfPeople= document.getElementById('numberOfPeople');
const totalPerPerson= document.getElementById('perPersonTotal');

const calculateBill = () => {
  
  let totalB=      Number(billTotal.value)*Number((tipInput.value/100)+1);
  let tpp=totalB/Number(numberOfPeople.innerText);
  totalPerPerson.innerText=`$${tpp.toFixed(2)}`;
}


const increasePeople = () => {
  
  let nop = Number(numberOfPeople.innerText);
  nop++;
  numberOfPeople.innerText=nop;
  calculateBill();

 

}


const decreasePeople = () => {

  let nop = Number(numberOfPeople.innerText);
  if (nop == 1){
    return
  }
  nop--;
  numberOfPeople.innerText=nop;
  calculateBill();

  
} 