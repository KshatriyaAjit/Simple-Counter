const count = document.querySelector('#counter');

function increment(){
      let value = parseInt(count.innerText);
      value = value+1;
      count.innerText = value;
}

function decrement(){
      let value = parseInt(count.innerText);
      value = value-1;
      count.innerText = value;
}