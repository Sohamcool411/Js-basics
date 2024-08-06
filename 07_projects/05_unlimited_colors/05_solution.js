function randomColor(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i = 0;i<6;i++){
      color+=hex[(Math.floor(Math.random()*16))]
    }
    return color
  }
  
  function start(){
    document.body.style.backgroundColor=randomColor()
  }
  
  let changeMe
  
  document.querySelector('#start').addEventListener('click',()=>{
    changeMe= setInterval(start,500)
  })
  
  document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(changeMe)
    changeMe=null
  })