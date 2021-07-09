let clickedCard = null;
let prevClick = false;
let total = 0;

const colors = [' img1', ' img2', ' img3', ' img4', ' img5', ' img6', ' img7', ' img8'];

const cards = [...document.querySelectorAll('.col')];
for(let color of colors){
  const cardAindex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAindex];
  cards.splice(cardAindex, 1);
  cardA.className += color;
  cardA.className += ' color-hidden';
  cardA.setAttribute('data-color', color);

  const cardBindex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBindex];
  cards.splice(cardBindex, 1);
  cardB.className += color;
  cardB.className += ' color-hidden';
  cardB.setAttribute('data-color', color);
}

function Click(e){
  const target = e.currentTarget;
  if(prevClick || target === clickedCard || target.className.includes('done'))
  {
    return;
  }
  target.className = target.className.replace('color-hidden','').trim();
  target.className += ' done';
  if(!clickedCard){
    clickedCard = target;
  }
  else if(clickedCard){
    if(clickedCard.getAttribute('data-color') !== target.getAttribute('data-color'))
    {
      prevClick = true;
      setTimeout(() => {
        clickedCard.className = clickedCard.className.replace('done','').trim() + ' color-hidden';
        target.className = target.className.replace('done','').trim() + ' color-hidden';
        clickedCard = null;
        prevClick = false;
      }, 500);
    }
    else{
      total++;
      setTimeout(() => {
        target.style.visibility = 'hidden';
      }, 150);
      clickedCard.style.visibility = 'hidden';
      if(total === 8)
      {
        alert("you win!!");
      }
      clickedCard = null;
    }
  }
}