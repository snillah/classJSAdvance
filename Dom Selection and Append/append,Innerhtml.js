
const innerHtmlDo = document.querySelector('#domdo');
innerHtmlDo.innerHTML = "HI Hello"
innerHtmlDo.textContent = "HI Hello text context"

// Append Create element in exist element

// Create element
const NewDiv = document.createElement('div')
NewDiv.innerHTML="New Div ELement Create and Append"
const newAnchorEle = document.createElement('a');
// set attribute
newAnchorEle.setAttribute("href","https://www.w3schools.com")
newAnchorEle.innerHTML = "WWW3 School"

// Existing element choosing by ID
const appendEle = document.querySelector('#domappend');
appendEle.append(NewDiv,newAnchorEle)