//if
const a=11
if (a<10) {
    console.log('less');
}else if(a==10){
    console.log('equal'); 
}else{
    console.log('greater');
}

//shorthand expression , ';' is necessary
const score=100
if(score>30) console.log('done');


if (a<10 && score>50) {
    console.log(true);
} else if(a>10 || score <100) {
    console.log(true);
}