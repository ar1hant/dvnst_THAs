const btn = document.querySelectorAll('button');

btn[0].addEventListener('click', async () => {
  fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then(data => console.log(data.content))
})

btn[1].addEventListener('click', async () => {
  fetch('https://discord.com/api/webhooks/859696206900101131/AMUeXOUoc9viOoPe63HguG4B4TG7CNgLDO_Q4qMu60u6A-gf2svyjWj2QvcNufjBrO04',
  {
    method: "POST",
    method: "post",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: "Hello"})
  })
  .then(res => res.json())
})

btn[2].addEventListener('click', async () => {
  fetch('https://meme-api.herokuapp.com/gimme')
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data.url;
  })
})