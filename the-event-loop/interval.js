let currentCount = 3;
let nIntervId = setInterval(() => {
  console.log(currentCount);
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(nIntervId);
    nIntervId = null;
  }
  currentCount--;
}, 1000);
