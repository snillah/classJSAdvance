const person = {
    type:"object",
    querySelect(){
        console.log(this.type);
        
    },
};

console.log(person);
person.querySelect();

console.log("doument",window.document);

let i

function giveSomeConsole(val){
    i = val || 0
    let j = i+1;
    i=j;
    console.log("clicking times=",i);
    return i;
}