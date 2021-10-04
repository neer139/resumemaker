
function AddNewWEField(){
    // console.log("add new field button");

    let newNode=document.createElement("textarea");

    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter here')

    let weOb =document.getElementById('we');
    let weAddButtonOb = document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb)
}



function aqNewAQfield(){
    let newNode=document.createElement("textarea");

    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','enter here')

    let aqOb =document.getElementById('aq');
    let aqAddButtonOb = document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode, aqAddButtonOb)
}




//Generate cv 

function generateCV(){
    // console.log('function is working');
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1').innerHTML=nameField;
    let nameT2 =document.getElementById('nameT2').innerHTML=nameField;

    let contactField =document.getElementById('contactField').value;
    let contactT =document.getElementById('contactT').innerHTML=contactField;


    let AddressField =document.getElementById('AddressField').value;
    let addressT =document.getElementById('addressT').innerHTML=AddressField;

    let fbField =document.getElementById('fbField').value;
    let fbT =document.getElementById('fbT').innerHTML=fbField;

    let instaField =document.getElementById('instaField').value;
    let instaT =document.getElementById('instaT').innerHTML=instaField;

    let twitterField =document.getElementById('twitterField').value;
    let twitT =document.getElementById('twitT').innerHTML=twitterField;

    let objectiveField= document.getElementById('objectiveField').value;
    let objectiveT = document.getElementById('objectiveT').innerHTML=objectiveField;

//work expreience field

let wes = document.getElementsByClassName('weField');
let str ='';

for(let e of wes){
    str= str + `<li> ${e.value}</li>`;

    document.getElementById('weT').innerHTML =str;
}



let aqs = document.getElementsByClassName('aqField');
let str1 = '';

for(let b of aqs){
    str1 += `<li> ${b.value} </li>`;

    document.getElementById('aqT').innerHTML = str1;
    
    
    let file =document.getElementById('imgField').files[0];
    console.log(file);

    let reader =new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    // set the Image into template

    reader.onloadend=function(){
        document.getElementById('imgTemplate').src=reader.result;
    }

    
    
    document.getElementById('cv-form').style.display ='none';
    document.getElementById('cv-template').style.display ='block';
}


}

function printCV(){
     window.print();

}

