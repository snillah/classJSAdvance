
const btnContainer = document.getElementById('btn-list');

function CreateButton(style){
    return function(color){
        if(!color){
            color="blue"
        }
        return function(text){
            if(!text){
                text = "button"
            }
            const button = document.createElement("button");
            button.className=style;
            button.style.backgroundColor=color;
            button.style.cursor = "pointer"
            button.innerText = text;
            return button;
        };
    }
}

let dangerBtn = CreateButton("large")("red")("Next");
let blueBtn = CreateButton("small")("blue")("Primary");
let largeBtn = CreateButton("large")("")("");

btnContainer.appendChild(dangerBtn);
btnContainer.appendChild(blueBtn);
btnContainer.appendChild(largeBtn);