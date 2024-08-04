const clock = document.getElementById('clock')

setInterval(()=>{
  let date = new Date().toLocaleTimeString()
  clock.innerHTML=`${date}`
},1000)

// setInterval() runs after every given interval.
//it has two attributes , callback fn & time period (in miliseconds)