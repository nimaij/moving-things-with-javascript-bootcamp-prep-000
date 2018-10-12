const app = "I don't do much."

function moveDodgerRight(){
  var rightNumbers = dodger.style.right.replace('px','')
  var right=parseInt(rightNumbers,10)
  
  if (right>0){
    dodget.style.right=`${right-1}px`
  }
}

$('#dodger').addEventListener('keydown',function(e){
  if(e.which===39){
    moveDodgerRight();
  }
})