const buttons= document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        //body.style.backgroundColor=button.id
        console.log(e) //e is the object of event that has occured. e.g (mouse click etc)
        console.log(e.target) //e.target is target through which event has occured. (grey button,yellow button etc)
        body.style.backgroundColor=e.target.id
    })
})