var mais = document.querySelector("#valor");
mais.addEventListener("click",function(){
  mais.textContent++;
})

var mais1 = document.querySelector("#valor2");
mais1.addEventListener("click",function(){
  mais1.textContent++;
})

var mais2 = document.querySelector("#valor3");
mais2.addEventListener("click",function(){
  mais2.textContent++;
})

var mais3 = document.querySelector("#valor4");
mais3.addEventListener("click",function(){
  mais3.textContent++;
})

function insert() {
  document.querySelector("#add").innerHTML = '<a href=#> Video13 <p>Blues</p><button type=submit><span class=glyphicon glyphicon-thumbs-up></span> 0 </button><button type=submit><span class=glyphicon glyphicon-thumbs-down></span>0</button></a>';
}

var count = document.querySelector("#votos");
count.addEventListener("click",function(){
  count.textContent == (mais - mais1)/2;
})

var count2  = document.querySelector("#votos2")
count2.addEventListener("click",function(){
  count2.textContent = (mais2 - mais3)/2;
})