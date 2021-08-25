
// restart logic

var reset = document.querySelector("#b");

// all the squares

var squares = document.querySelectorAll("td");


// reset them to be blank
reset.addEventListener("click", function(){

  for(var i=0; i < squares.length; i++){
    squares[i].textContent = '';
  }
})


// function to mark squares

function mark() {

  if(this.textContent === ''){
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else{
    this.textContent = '';
  }

}

for(var i=0; i < squares.length; i++){
  squares[i].addEventListener("click", mark);
}
