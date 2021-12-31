const get = document.querySelector(".push");
const reset = document.querySelector(".reset");
const text = document.querySelector(".number");

var list = [];

for(var i =1;i<91;i++)
  list.push(i);

function resetGame(){
  list = [];

  for(var i =1;i<91;i++){
    list.push(i);
    document.querySelector(".a"+i).innerHTML = i;

  }

}

function getNewNum(){
  var idx = Math.floor(Math.random() * list.length);
  text.innerHTML = list[idx];
  document.querySelector(".a"+list[idx]).innerHTML = "X";
  console.log(idx);
  list.splice(idx,1);
}


get.addEventListener('click', function(){
  getNewNum();
  //var idx = Math.floor(Math.random() * list.size());
  //text.innerHTML = 12;

});

reset.addEventListener('click', function(){
  text.innerHTML = 00;
  resetGame();
});
