// GO!

// TASK 1 -- Show/Hide Nav
function hiddenMenuNav(){
  var navMenuEl = document.querySelector('.answer-box .nav-menu')
     // console.log(navMenuEl);
     // console.log(navMenuEl.textContent);
   // var navMenuStyle = window.getComputedStyle(navMenuEl)
   // console.log(navMenuEl);
   navMenuEl.classList.contains("nav-menu-hidden")    // .contains retorna un valor boleano
   navMenuEl.classList.add("nav-menu-hidden")

   if(navMenuEl === "nav-menu-hidden"){
   navMenuEl.classList.remove("nav-menu-hidden")
    }

}

var task1BtnEl = document.querySelector("#hide-nav button")
task1BtnEl.addEventListener('click', hiddenMenuNav)

// TASK 2 -- Select an Icon

// TASK 3 -- Move Item From List to List
var conteo = document. querySelectorAll('.add-points button')
  console.log(conteo)
conteo.forEach(function(element) {
  console.log(element);
var suMas = parseInt(element.textContent)
  // console.log(typeof(suMas));

element.addEventListener('click', function increaseCount(evt) {
  var totalCountsEL = document.querySelector(".total-points")

  var resultado = parseInt(totalCountsEL.textContent)
 console.log(  totalCountsEL.textContent= resultado + suMas);
 resultado = resultado + suMas
 totalCountsEL.textContent = resultado

  })
});

// suMas.addEventListener('click', function increaseCount(evt){
//   console.log('loquesea')
//   // var totalCountsEL = document.querySelector(".total-points")
//   // var clikCoustNumStr = totalCountsEL.textContent
//   // var  clikCoustNum = parseInt(clikCoustNumStr)
//   // totalCountsEL.textContent = clikCoustNum + 1
//
// })

// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
