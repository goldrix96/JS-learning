
var checkboxContainer = document.querySelector('.checkboxContainer')
var checkboxMarkup = `

  <h1 style="text-align:center;">Hold Shift and Check Checkboxes</h1>
  <div class="inbox">
    <div class="item">
      <input type="checkbox">
      <p>This is an inbox layout.</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Check one item</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Hold down your Shift key</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Check a lower item</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Everything in between should also be set to checked</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Try to do it without any libraries</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Just regular JavaScript</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Good Luck!</p>
    </div>
    <div class="item">
      <input type="checkbox">
      <p>Don't forget to tweet your result!</p>
    </div>
  </div>
  `
  checkboxContainer.innerHTML = checkboxMarkup;

const checkAll = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkAll.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true
            }
        })    
    }
    
    lastChecked = this;
}

checkAll.forEach(checkbox => checkbox.addEventListener('click', handleCheck))



