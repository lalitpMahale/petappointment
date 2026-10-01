
const needBtn = document.querySelectorAll('.chaildNeedsection');

  needBtn.forEach(element => {
    element.addEventListener("click",() =>{
        needBtn.forEach( t=> t.classList.remove("active"));

        element.classList.add("active");
    });
    
  });

// click event for animal selection 

const animals = document.querySelectorAll(".animal");


 
 animals.forEach(element =>{
    element.addEventListener("click", () =>{
        animals.forEach(t => t.classList.remove("active"));


        element.classList.add("active");
    });
 });



// -----------------Suggestions  ---------------------------

function dogClick(){
  let element=document.getElementById('sugges');
  element.innerHTML='Suggestions for a dog, or type your own.';
}

function catClick(){
  let element=document.getElementById('sugges');
  element.innerHTML='Suggestions for a cat, or type your own.'
}

function frogClick() {
  let element=document.getElementById('sugges');
  element.innerHTML='Suggestions for a frog, or type your own.'
  
}
function otherClick(){
  let element=document.getElementById('sugges');
  element.innerHTML='Suggestions for a small pet, or type your own.'
}


// ----------------------imagePet Upload in name show in web browser---------------------------------------------

const petImage = document.getElementById("imagePet");

petImage.addEventListener("change",() =>{
   if (petImage.files.length > 0){
    console.log(petImage.files[0].name);
   }
});



// ----------------------form Submited function------------------------------------

let name=document.getElementsByClassName('name');
let breed=document.getElementsByClassName('breed');
let weight= document.getElementsByClassName('weight');

let image=document.getElementById('imagePet');
let userName=document.getElementById('mNumber');
let userEmail=document.getElementById('uEmail');
let userDate=document.getElementById('uDate');
let userTime=document.getElementById('uTime');


function submited(){
  name=name.value;
  breed=breed.value;
  weight=weight.value;
  image=image.value;
  userName=userName.value;
  userDate=userDate.value;
  userTime=userTime.value;
  alert( `form is Submited ${name}, ${breed}, ${weight}, ${weight}, ${image} , ${userName} ,${userEmail} ,${userDate} ,${userTime} `);
}