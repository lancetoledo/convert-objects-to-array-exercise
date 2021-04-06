// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function toArray(obj) {
  //Intialized empty array where
  var pair = [];
  //Loop that iterates over all enumerable properties of an object thats keyed through strings
  for (var i in obj) {
    //Push the key value pair into the new array
    console.log([i, obj[i]]);
    pair.push([i, obj[i]]);
  }
  console.log(pair);
}

toArray({ a: 1, b: 2 });

toArray({ shrimp: 15, tots: 12 });
