// An array of lines from a text file
let lines;
// The Markov Generator object
let markov;
// An output element
let output;

// Preload some seed data

function setup() {
  // Join everything together in one long string
  // Keep carriage returns so these will show up in the markov generator
 
  //console.log(markov);
  
  // Make the button
  document.querySelector(".generate").addEventListener("click", generate)

  noCanvas();
}

function generate() {
  // Generate some text
  let text = document.querySelector("textarea").value;
  text.replace(/[\n\r]/g, '');
  // N-gram length and maximum length
  markov = new MarkovGenerator(8, 1000);
  markov.feed(text);
  let result = markov.generate();
  // Put in HTML line breaks wherever there was a carriage return
  result = result.replace('\n','<br/><br/>');
  document.querySelector("#result").innerHTML = "<strong>Result:</strong><br> <br>" + result;
}