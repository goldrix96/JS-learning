//Object Array + Map+Filter
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
<h1 style="text-align:center;">Object Array + Map+Filter</h1>
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







//CSS variables update

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

triggers.forEach (trigger => trigger.addEventListener('change', handleUpdate));
triggers.forEach (trigger => trigger.addEventListener('mousemove', handleUpdate));

function handleUpdate(){
  var suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
  
  console.log(this.name);
}
    //color
var colorChange = document.querySelector('.colorChange')
colorChange.addEventListener('change', color);

function color(){
  var colorValue = colorChange.value;
  document.documentElement.style.setProperty(`--base`, colorValue);
  console.log(colorValue);
}


//Array cardio

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];



var yearFilter = inventors.filter(inventor => inventor.year>=1600 && inventor.year <= 1850)
// console.table(yearFilter);

var inventorsMap = inventors.map(inventor =>(`${inventor.first} ${inventor.last}`))
// console.table(inventorsMap);

//sort by year
var sortFilte = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
// console.table(sortFilte);

var totalYear = inventors.reduce((a,b) => {
  return a + (b.passed - b.year)
}, 0)


//sort by age
var sortYear = inventors.sort((a,b)=>{
  var guy1 = a.passed - a.year;
  var guy2 = b.passed - b.year;
  return guy1>guy2 ? -1 : 1

   

})
//  console.table(sortYear);















var summ = inventors.sort(a=>
    a.passed - a.year 
    
    )

console.table(summ);



// console.log(totalYear);
// console.table(sortYear);

 
//====SEARCH===//
// const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));


const alpfa = people.sort((a,b) => {
  const [afirst, alast] = a.split(',');
  const [bfirst, blast] = b.split(',');
  return alast > blast ? 1 : -1;

});
// console.log(alpfa);











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
  

