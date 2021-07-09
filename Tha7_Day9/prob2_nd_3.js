const count = document.querySelector('.bkd_st');
const box = document.querySelector('.flex-container');
box.addEventListener('click', e =>{
  if(e.target.classList.contains('box_clkd')){
    e.target.classList.remove('box_clkd');
    e.target.classList.add('box');
  }
  else{
    if(e.target.classList.contains('box')){
      e.target.classList.add('box_clkd');
      e.target.classList.remove('box');
    }
  }
  const selected = document.querySelectorAll('.box_clkd');
  count.innerText = selected.length + " " + (36 - selected.length);
})