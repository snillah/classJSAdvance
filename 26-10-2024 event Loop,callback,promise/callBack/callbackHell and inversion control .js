console.log(
  "To get the asynchornous work in proper control "
);
console.log("This is call back Asnc");

// function start() {
//   console.log("starting");
// }
// function first() {
//   console.log("first");
// }
// function second() {
//   setTimeout(() => {
//     console.log("second timer-2000");
//   }, 2000);
// }
// function third() {
//   setTimeout(() => {
//     console.log("third timer -3000");
//   }, 3000);
// }
// function completed() {
//   console.log("completed");
// }

// function doTheWork() {
//   start();
//   first();
//   second();
//   third();
//   completed();
// }
// doTheWork();

console.log("This is call back Asnc =>set up proper control or order");

function start1(fn) {
  console.log("starting");
  fn();
}
function first1(fn) {
  console.log("first");
  fn();
}
function second1(fn) {
  setTimeout(() => {
    console.log("second");
    fn();
  }, 2000);
}
function third1(fn) {
  setTimeout(() => {
    console.log("third");
    fn();
  }, 3000);
}
function completed1() {
  console.log("completed");
}
function inverseFn(fn){
  console.log("After second it should be run and finally run all the other functions");
  fn();
}

function doAsynctoSync() {
  start1(() => {
    first1(() => {
      second1(() => {
        // inverseFn(()=>) This is inversion of control
        third1(() => {
            start1(() => {
                first1(() => {
                  second1(() => {
                    third1(() => {
                        start1(() => {
                            first1(() => {
                              second1(() => {
                                third1(() => {
                                    start1(() => {
                                        first1(() => {
                                          second1(() => {
                                            third1(() => {
                                                start1(() => {
                                                    first1(() => {
                                                      second1(() => {
                                                        third1(() => {
                                                          completed1();
                                                        });
                                                      });
                                                    });
                                                  });
                                            });
                                          });
                                        });
                                      });
                                });
                              });
                            });
                          });

                    });
                  });
                });
              });
        });
      });
    });
  });
}
doAsynctoSync();
