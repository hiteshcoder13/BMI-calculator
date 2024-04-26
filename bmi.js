


let button = document.getElementsByTagName('button');

button[0].addEventListener('click', function(e){
    e.preventDefault();
   let height = document.getElementById('height').value;
   let weight =document.getElementById('weight').value;
   let i = 1;
   
  let bmi = weight/(height*height);
  let result = document.getElementById('results');
  if(i==1){
    result.innerText = result.innerText  + Math.floor(bmi);
i--
  };

  
});



// function run(){
   
//     let height = document.getElementById('height').value;
//     let weight =document.getElementById('weight').value;
//    let bmi = weight/(height*height);
//    let result = document.getElementById('results');
//    result.innerText = result.innerText + bmi;
// }
// result.innerText = result.innerText + bmi;