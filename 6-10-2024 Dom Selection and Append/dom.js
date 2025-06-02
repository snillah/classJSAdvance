
console.log(this); /*or window*/

console.log(document); /*or Document*/

// Create an element 
const element = document.createElement("div")
console.log(element);

//set Attribute
element.setAttribute("class","dom")
element.setAttribute("id","main-div")

// practice
// create an anchor element
const anchorEle = document.createElement("a");
console.log(anchorEle);

// it return element and it contains attribute, inline style etc.

//set Attribute 
anchorEle.setAttribute("href","#");
anchorEle.setAttribute("target","new");

// Get Element By ID
const mainId = document.getElementById("main-id");
console.log("Capture ID",mainId);

// Get Element By Class it will give array type
const mainClass = document.getElementsByClassName("main-class");
console.log("Capture Class",mainClass);

// generic Selector => Query Selector
// for element("h1"), Id("#main-id"), class(".main-class")
// it will give First Element
const queryTagEle = document.querySelector("h1");
const queryTagClass = document.querySelector(".main-class");
console.log("QSEle it will take First element",queryTagEle);
console.log('QSClass it will take First Class',queryTagClass);

// Giving styles
queryTagEle.style.color="blue";
queryTagClass.style.color="red";

// Query Selector All => it will give array value
const querySelAllEle = document.querySelectorAll("h1");
const querySelAllClass = document.querySelectorAll(".main-class");
console.log("qSAll Element", querySelAllEle);
console.log("qSAll Class", querySelAllClass);

// // Giving Styles
querySelAllClass[0].style.color = "blue";
querySelAllClass[1].style.color = "red";

// for(let i =0;i<querySelAllClass.length;i++){
//     querySelAllClass[i].style.color = "red";
// }
function eleRed(ele){
        const applyStylesAllClass = document.querySelectorAll(`${ele}`);
        console.log(applyStylesAllClass);
        
        for(let i =0;i<applyStylesAllClass.length;i++){
            applyStylesAllClass[i].style.color="blue";
        }
}

eleRed("h1")

// Mulitple times I entered is wrong