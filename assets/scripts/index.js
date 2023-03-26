let div1 = document.getElementById("result1");
let div2 = document.getElementById("result2");
let div3 = document.getElementById("result3");
let div4 = document.getElementById("result4");
let div5 = document.getElementById("result5");

let now = new Date();
console.log(now);

function formatDate(date) {
  if (now - date < 1000) {
    console.log("Right now");
  } else if (now - date < 30 * 1000) {
    console.log("30 sec. back");
  } else if (now - date < 5 * 60 * 1000) {
    console.log("5 min. back");
  } else if (now - date < 24 * 3600 * 1000) {
    console.log("Yesterday");
  } else console.log("Over 24 h. ago");
}




let a = new Date(new Date() - 1000);
div1.textContent = (`Right now: ${a}`);

let c = new Date(new Date() - 30000);
div2.textContent = (`30 sec. back: ${c}`);


let e = new Date(new Date() - 5 * 60 * 1000);
div3.textContent = (`5 min. back: ${e}`);


let g = new Date(new Date() - 24 * 3600 * 1000);
div4.textContent = (`Yesterday: ${g}`);

let i = new Date(new Date() - 48 * 3600 * 1000);
div5.textContent = (`Over 24 h. ago: ${i}`);


