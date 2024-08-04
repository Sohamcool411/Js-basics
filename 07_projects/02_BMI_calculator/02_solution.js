const form= document.querySelector('form')
//const height = new Number (document.querySelector('#height').value )
// if we take the height before event then we will get empty value

form.addEventListener('submit',(e)=>{
  e.preventDefault() // to prevent event from sending data to the url.

  const height = new Number (document.querySelector('#height').value )
  const weight = new Number (document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height<0 || height=='' || isNaN(height)){
    result.innerHTML=`please enter a valid height , ${height}`
  }else if(weight<0 || weight=='' || isNaN(weight)){
    result.innerHTML=`please enter a valid weightt , ${weight}`
  }else{

    const bmi= ((weight/(height**2))*10000).toFixed(2)
    //show the result
    let category=''
    if(bmi<18.6){
      category='under weight'
    }else if(bmi>=18.6 && bmi<=24.9){
      category='normal'
    }else{
      category='overweight'
    }
    result.innerHTML=`<span>${bmi}</span><br>${category}`
    
  }
})