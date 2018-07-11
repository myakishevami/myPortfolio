
document.addEventListener('DOMContentLoaded', function () {
  
  var block = document.querySelectorAll(".reviews__elem-text");
  var predmax = 0;
  for (var i=0; i<block.length; i++)
  {
   var max = block[i].clientHeight;
    console.log("внутри скрипта");
    console.log(max+"px");
    if (predmax > max) {block[i].clientHeight = predmax};
    console.log(predmax);
    predmax = max;
   }
});