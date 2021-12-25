function completeSomeTask(callback) {
  // onekgula kaj krlm,ekn ami bujhte chaschi je onkgula kaj complete hoye geche

  callback("Yes everything done.");
}

function done(msg) {
  console.log(msg);
}

function printAfterOneSecond(msg) {
  console.log(msg);
}

function callback() {
  printAfterOneSecond("ami 1 sec por print hobo");
}

// completeSomeTask(done);

setTimeout(function () {
  printAfterOneSecond("ami 5 sec por print hobo");
}, 0);

console.log("Amio print hobo");

/**
 * 1. browser
 * 2. browser resourses
 * 3. web api to access resourses of browser
 * 4. js engine
 * 5. call stack
 *  1. execution context
 *      a. memory component
 *      b. code component
 * 6. callback queue or task queue
 * 7. microtask queue (most priority wala)
 * 8. event loop
 * 9. a place where browser registers callback functions (what is the name of this place?)
 *
 */
