// call back

// mannual given
// function sayMyName() {
//     myName()
// }

// function myName() {
//   console.log("my name is xxxx");
// }
// sayMyName();

// automatic
function sayMyName(fn) {
    fn()
}
console.log("formal callback function ");

function myName(){
  console.log("say My name");
}

function myName1(x) {
  return function(){
    console.log("my name is",x);
  }
}

function myName2(y) {
  return function(){
    console.log("my name is",y);
  }
  }
  sayMyName(myName)
  sayMyName(myName1("ravi"));
  sayMyName(myName2("suresh"));
  
  console.log("simplify callback function ");
  function myName3(y) {
      console.log("my name is",y);
    }

    function myName4(y) {
        console.log("my name is",y);
      }
  

// or
sayMyName(()=>myName3("ramesh"));
sayMyName(()=>myName4("Ganesh"));

// why this is comming last 