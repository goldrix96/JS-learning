//bulb turn on turn off
var button2 = document.querySelector('.buttonChange-two')
var bild = document.querySelector('.bild');


button2.addEventListener('click', clickButton);
function clickButton(){
    bild.classList.toggle('frame-two');
}


//Guess Game
var textField = document.querySelector('.textField');
var submitButton = document.querySelector('.submitNumber');
var mathRandom = Math.floor(Math.random()*100)+1;
var guessGame = document.querySelector('.guessGame');
var submitCounter = 1;



submitButton.addEventListener('click', getNumber);

function getNumber(){
  
  
  var textFieldValue = textField.value;
  
    if (isNaN(textFieldValue)){ 
     let placeTextHere = document.createElement('p')
      placeTextHere.textContent = "Must input numbers";
      guessGame.appendChild(placeTextHere);
      return false;
    }

  if(textFieldValue < mathRandom){
    let placeTextHere = document.createElement('p');
    placeTextHere.textContent = ` ${textFieldValue} is Too low`;
    guessGame.appendChild(placeTextHere);
  }else if (textFieldValue > mathRandom){
    let placeTextHere = document.createElement('p');
    placeTextHere.textContent = ` ${textFieldValue} is Too high`;
    guessGame.appendChild(placeTextHere);
  }else if(textFieldValue == mathRandom){
    let placeTextHere = document.createElement('p');
    placeTextHere.textContent = 'YOU WON!!!!'
    guessGame.appendChild(placeTextHere);
    bild.classList.add('frame-two');
    submitButton.disabled=true;


    let placeResetButton = document.createElement('button');
    placeResetButton.innerText = "Restart the game"
    guessGame.append(placeResetButton);
    placeResetButton.addEventListener('click', restartGame)
    function restartGame(){
      window.location.reload();
    }


}
}

submitButton.addEventListener('click', counterClicks);

function counterClicks(){
  let count = submitCounter++;
  if(count>9){
  let placeTextHere = document.createElement('p');
  placeTextHere.textContent = 'Game Over';
  guessGame.append(placeTextHere);
  submitButton.disabled = true;

  
  let placeResetButton = document.createElement('button');
  placeResetButton.innerText = "reset"
  guessGame.append(placeResetButton);
  placeResetButton.addEventListener('click', restartGame)
    function restartGame(){
      window.location.reload();
    }
  }
}






// function getNumber(){
//   let checkValue = Number(textField.value);
//   if (checkValue === mathRandom){
//   console.log('hello');
//   }
// }

// if(textField.value === mathRandom.value){
//   console.log('hurrrray')
// }
