// Needs:
// 1. Select all of the accordion and panel items
// 2. Create a loop which would allow the cycling through of all accordion items
// 3. Depending on which one is clicked, toggle the active class onto
// the panel item
// 4. select arrow icon and flip it 180deg on click

// const accordion = document.querySelectorAll(".accordion");
// const panel = document.querySelectorAll(".panel");
// const arrow = document.querySelectorAll(".arrow");
//
// for(let i = 0; i < accordion.length; i++){
//   accordion[i].addEventListener("click", function(){
//     panel[i].classList.toggle("active");
//     arrow[i].classList.toggle("imgActive")
//   });
//
// }


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {

var panel = this.nextElementSibling;

if (panel.style.maxHeight){
  panel.style.maxHeight = null;
}
else {
  let active = document.querySelectorAll(".active");
  for(let j = 0; j < active.length; j++){
    active[j].classList.remove("active");
    active[j].nextElementSibling.style.maxHeight = null;
  }
  this.classList.toggle("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}



// ----------------------------------------------------------------------------------

// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
// acc[i].addEventListener("click", function() {
//
// var panel = this.nextElementSibling;
// if (panel.style.maxHeight){
//   panel.style.maxHeight = null;
// } else {
//   let active = document.querySelectorAll(".accordion-div .accordion.active");
//   for(let j = 0; j < active.length; j++){
//     active[j].classList.remove("active");
//     active[j].nextElementSibling.style.maxHeight = null;
//   }
//   this.classList.toggle("active");
//   panel.style.maxHeight = panel.scrollHeight + "px";
// }
// });
// }








// ------------------------------------------------------------------------------------























// function tackle(id){
//   var x = document.getElementById(id);
//   if(x.className.indexOf("show") == -1){
//     x.className += "show";
//   } else{
//     x.className = x.className.replace("show", "");
//   }
// }

//
// function tackle(id){
//   var x = document.getElementById(id);
//   if(x.className = "hide"){
//     x.className.replace("hide", "show");
//   } else if(x.className = "show"){
//     x.className.replace("show", "hide");
//   }
// }
