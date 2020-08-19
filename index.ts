// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function convert (hours: number, minutes: number):number{
  var hoursconvert = hours * 3600;
  var minutesconvert = minutes * 60;
  var seconds = hoursconvert + minutesconvert;
  
  return seconds;
}
console.log(convert(1,3));
