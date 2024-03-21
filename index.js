function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!'
  } else if(feet>400 && feet<=2000) {
    return'That will be twenty bucks.'
  } else if(feet<2501) {
    return'I will gladly take your thirty bucks.' 
  } else{ 
    return 'No can do.';
  }
}
const city ='NYC'
function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ?'Ok, sounds good.' :'No go.'
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch (tip) {
    case tip ='generous':
      message = 'Thank you so much.'
      break;
    case tip = 'not as generous':
      message= 'Thank you.'
      break;
    
    default:
      message = 'Bye.'
  }
  return message;
}