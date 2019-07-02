






var itemName = [['book', 'table', 'bad', 'bag'],
                [5, 7, 56, 35],
                ['lamps', 'blanket', 'soup']
              
              ]
let itemPrice = [65, 34, 54, 67, 34, 35, 34, 23, 8]
let total = 0;


var textContent = document.querySelector('.textContent')
let users = [
  {firstName: 'Igor', lasName: 'Ivanov', position: 'designer', made: 6000},
  {firstName: 'John', lasName: 'Ivanov', position: 'designer', made: 7000},
  {firstName: 'Michael', lasName: 'Ivanov', position: 'designer', made: 8000},
  {firstName: 'Jordge', lasName: 'Ivanov', position: 'designer', made: 9000},
  {firstName: 'Ivan', lasName: 'Ivanov', position: 'coder', made: 10000}
];


let filterUsers = users.filter(item => {
  return item.made >= 7000;
});

let displayUsers = filterUsers;
// let content = displayUsers.map(item => `<p>${item4.firstName}</p>`);

let tableMarkup = `
<table class="tableStyle">
  <tr>
    <th>First name</th>
    <th>Last Name</th>
    <th>Position</th>
    <th>Made</th>
  </tr>
  ${displayUsers.map(
    user => `
  <tr>
    <td>${user.firstName}</td>
    <td>${user.lasName}</td>
    <td>${user.position}</td>
    <td>users made</td>
  </tr>  `).join('')}
 </table>
`

// textContent.innerHTML = tableMarkup;





var excercise = `
<div class = "container">  
  <div class ="exName"><h1>CSS variables update</h1></div>
    <span>
      <label for="spacing">Spacing</label>
      <input type = "range" name="spacing" max="100" min="10" data-sizing="px">
    </span>
    <span>
      <label for="blur">Blur</label>
      <input type = "range" name="blur" max="100" min="0" value="0" data-sizing="px">
    </span>
    <span>
      <label for="position">Border color</label>
      <input type = "color" class="colorChange" value="#bada55">
    </span>
    <br>
    <img src = "img/img2.jpg" class="cityImage"/>
</div>

`

textContent.innerHTML = tableMarkup + excercise;


//change blur and position
var triggers = document.querySelectorAll('input');


// triggerBlur.addEventListener('change', changeBlur);
// triggerBlur.addEventListener('mousemove', changeBlur);
triggers.forEach (trigger => trigger.addEventListener('change', handleUpdate));
triggers.forEach (trigger => trigger.addEventListener('mousemove', handleUpdate));

function handleUpdate(){
  var suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
  
  
  console.log(this.name);
  
  // var suffix = this.dataset.sizing
  // var blurValue = this.input.name;
  
  // document.documentElement.style.setProperty('--blur', blurValue+suffix);
  

}


//color
var colorChange = document.querySelector('.colorChange')
colorChange.addEventListener('change', color);

function color(){
  var colorValue = colorChange.value;
  document.documentElement.style.setProperty(`--base`, colorValue);
  console.log(colorValue);
}




// let tableContent = document.createElement('table');
// tableContent.className = 'tableStyle';

// const markup = `
// ${for (let i=0; i<content.length; i++)}{
  
//   <tr>
//     <th>First name</th>
//     <th>Last Name</th>
//     <th>Position</th>
//     <th>Made</th>
    
//   </tr>
//   <tr>
//     <td>${content[i]}</td>
//     <td>Last Name</td>
//     <td>Position</td>
//     <td>Made</td>
//   </tr>
//   <tr>
//   <td>${content[i]}</td>
//   <td>Last Name</td>
//   <td>Position</td>
//   <td>Made</td>
// </tr>
// <tr>
// <td>${[i]}</td>
// <td>Last Name</td>
// <td>Position</td>
// <td>Made</td>
// </tr>
// }
  
  // `

// textContent.append(tableContent);




// for (let m = 0; m<itemName.length; m++){
//   // var test = document.createElement('p');
//   // test.textContent = itemName[m]
//   // textContent.append(test);
//     let inside = itemName[m].length;
//     console.log(m, inside)
//     for (let k=0; k < inside; k++){
//     var test2 = document.createElement('p')
//     test2.textContent = itemName[k]
//     textContent.append(test2);
    
//     console.log(itemName[k])
//     }
//   }

// document.write(itemPrice[1])

// let filterUsers = users.filter((item) => {
//   return item.made >= 7000
// })

// console.log(filterUsers);
// var arrString = filterUsers.toString();
// textContent.innerHTML = arrString;



// textContent.innerHTML = JSON.stringify(filterUsers);
//https://www.youtube.com/watch?v=AqgVLYpBWG8
// let twoD = [[1, 2, 3, 4, 5, 6, 7],
//            [8, 10, 5, 7, 3, 22, 6, 42],
//            [123, 54, 12, 11, 9, 15]];

// let bigHero = {characters:[
//                 {name:'Hiro', voice:'Ryan Potter'},
//                 {name:'Baymax', voice:'Scott Adsit', prop:12},
//                 {name:'Go Go Tamago', voice:'Jamie Chung'},
//                 {name:'Fred', voice:'T.J. Miller'}
//             ]};

// let chars = bigHero['characters'];  //bigHero.characters
// let len = chars.length;
// for(let i=0; i<len; i++){
// //    console.log(chars[i]);
// //    console.log(chars[i].name);
// //    console.log(chars[i]['voice']);
//     for(let prop in chars[i]){
//         console.log(prop, chars[i].prop, chars[i][prop]);
//     }
// }

//nested for loops
// let rows = twoD.length;
// for(let j=0; j<rows; j++){
//    let items = twoD[j].length;
//    console.log(j, items)
//    for(let n=0; n<items; n++){
//        console.log(twoD[j][n]);
//    }
// }






























//crerate input for Item Name
// let enterItemName = document.createElement('input');
// enterItemName.textContent='please enter an item name'
// enterItemName.placeholder="enter item name"
// textContent.appendChild(enterItemName);

//creat input for Item Price
// let enterItemPrice = document.createElement('input')
// enterItemPrice.textContent = "enter Item Price"
// enterItemPrice.placeholder = "enter item price"
// textContent.appendChild(enterItemPrice);

//Create a submit Button
// let button = document.createElement('button');
// button.textContent = 'add item'
// textContent.appendChild(button);

// button.addEventListener('click', getData);


// function newFunction() {
//   let userFilter = document.createElement('p');
//   userFilter.textContent = filterUsers;
//   document.body.append(userFilter);
// }

//Store data into array
// function getData(){
//   let enterItemNameValue = enterItemName.value;
//   let enterItemPriceValue = enterItemPrice.value;

  // if (isNaN(enterItemNameValue)){
  //   console.log([itemName]);
  //   itemName.push(enterItemNameValue)
  // } else {
  //   let errorMessage = document.createElement('p');
  //   errorMessage.textContent = "please enter a name of the item"
  //   textContent.appendChild(errorMessage);
  //   return false;
  //  }
  //  if (isNaN(enterItemPriceValue)){
  //   console.log('not a number') 
  //   return true
  //  } 
   
  // }



  // textContent.innerHTML = "Item name";
  //display arrays
//   for (let i=0; i<itemName.length; i++){
//   var receipt = document.createElement('p');
//   receipt.textContent =  itemName[i];
//   // textContent.innerHTML = `${itemName[i]}`;
//   textContent.appendChild(receipt);
//   console.log(receipt);
  

// }
  
// textContent.innerHTML = "Price";

  // for (let u = 0; u < itemPrice.length; u++){
  //   var price = document.createElement('table');
  //   price.textContent = itemPrice[u];
  //   textContent.appendChild(price);

  //   total += itemPrice[u];
  //   var totalPrice = document.createElement('p');
  //   totalPrice.textContent = 'total price:' + total.toFixed(2);
    
  // }
  
  
  // document.write(total);
  // textContent.appendChild(totalPrice);
  // textContent.innerHTML = `${itemName}+${itemPrice}`
  
  
  
  // var table = document.createElement('table');
  // table.className = 'tableStyle'
  // table.innerHTML = `
  // <tr>
  //   <th>Item Name<th>
  //   <th>Item price<th>
  //   <th>Action</th>
  // </tr>
  // <tr>
  //   <td>${itemName[i]}<td>
  //   <td>${itemPrice[u]}<td>
  //   <td>Action</td>
  // </tr>
  
  
  // `;


  // textContent.append(table);
  

