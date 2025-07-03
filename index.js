// Write your code here!
const main = document.getElementById('main');
main.remove();

window.newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Rooney is the champion';

document.body.append(newHeader);