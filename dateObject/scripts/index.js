const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

document.getElementById('demo').innerHTML = tomorrow;