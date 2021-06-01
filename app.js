'use strict'
let myform = document.getElementById('myForm');
let table = document.getElementById('table');
let array = [];
 let random = [];

let foodImage=['burger.jpg','pizza.jpg','shawarma.jpg']
function Orders(userName, type) {
    this.userName = userName;
    this.type = type;
    array.push(this);
}

///// loacl storage 
function settingItems(){
    let data=JSON.stringify(array);
    localStorage.setItem('orders',data);
}
function gettingItems(){
    let stringOpj=localStorage.getItem('orders');
    let normalOpj=JSON.parse(stringOpj);
    if (normalOpj !== null) {
        array=normalOpj;
        
    }
    render()
}



/////// make a random number dont forget 
////td 1 contain image 
///// td 2 contain 'customer name :userName
///// AND food type :type
///// food price :random number
function render(){

    let thE1 =document.createElement('th')
    table.appendChild(thE1);
    thE1.textContent='Order Image';

    let thE2 =document.createElement('th')
    table.appendChild(thE2);
    thE2.textContent='Order details';

    for (let i = 0; i < array.length; i++) {
        
        let trE1 =document.createElement('tr');
        table.appendChild(trE1);
        let tdE1 =document.createElement('td');
        let tdE2 =document.createElement('td');
        trE1.appendChild(tdE1);
        trE1.appendChild(tdE2);
        let p1 =document.createElement('p');
        
        let p2 =document.createElement('p');
        let p3 =document.createElement('p');
        tdE2.appendChild(p1);
        tdE2.appendChild(p2);
        tdE2.appendChild(p3);
        p1.textContent=`Customer Name :${array[i].userName}`
        p2.textContent=`Food Type :${array[i].type}`;
        p3.textContent=`Food Price :${random[i]}`

        // tdE2.textContent=`Customer Name :${array[i].userName} Food Type :${array[i].type} Food Price :${random[i]}`;
        let image =document.createElement('img');
        tdE1.appendChild(image);
        // image.innerHTML=`src=" img/food/${array[i].type}.jpg"`;
        image.setAttribute("src",`img/food/${array[i].type}.jpg`)

       


        // tdE1.textContent=array[i].userName;
    }


}
////////////////////////////////////////////////////////
randomNumber()
function randomNumber(){
   random.push(Math.floor(Math.random() * 101));  
}



//////////////////////////////////////////////////////
// function addImage(){
//     let source=
// }







/////////////////////////////////////////////
function handleSubmit(event) {
    event.preventDefault();
    table.innerHTML=''
    let userName = event.target.userName.value;
    let type = event.target.foodType.value;
    new Orders (userName,type);
    console.log('submit work')
    render();
    randomNumber();
    console.log(random);
    console.log(array);
    settingItems();
}
myform.addEventListener('submit', handleSubmit);


gettingItems()