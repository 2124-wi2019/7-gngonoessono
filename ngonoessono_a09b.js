/*Gertrude Vanessa Ngono Essono
ngonoessono_a09b.js
INFO2124
Thoendel
02/13/2020*/

 function getAllPElms() { //this function will get all <p> tags and display the overall number in the html text//
    const pElems = document.getElementsByTagName('p');
    var total = pElems.length;
    console.log(`the total number of <p> tags in this document is: ${total}`);
    
 }
 
 function getAllDivElms() { //this function will get all <div> tags and display the overall number in the html text//
    const divElems = document.getElementsByTagName('div');
    var total = divElems.length;
   
    console.log(`the total number of <div> tags in this document is: ${total}`);
    
 }
 function getAllParElms() {//this function will get all "paragraph" classes and display the overall number in the html text//
    const paraElems = document.getElementsByClassName('paragraph');
    var total = paraElems.length;
    console.log(`the total number of "paragraph" classed elements in this document is: ${total}`)  
 }
 
 function getBlockTextElms() {//this function will get all block-text elements and display the overall number in the html text//
    const blockTextElems = document.getElementsByClassName("block-text");
    var total = blockTextElems.length;
    console.log(`the total number of "block-text" classed elements in this document is: ${total}`)
    
 }
 function getAllIdElms() {//this function will get an element with the id "b001"and display it//
    const idElems = document.getElementById("b001");  
    console.log(`element with id= "b001"  in this document is: ${idElems}`)

 }
 