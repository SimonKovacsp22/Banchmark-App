<<<<<<< HEAD
let prButton = document.getElementById('prceedBtn')
let checkBox = document.getElementById('check-box')
let linkToBench = document.querySelector('#prceedBtn a')
linkToBench.classList.add('disable-pointer')

   
    checkBox.addEventListener("click",function(){
        if(checkBox.checked==1){
            linkToBench.classList.remove('disable-pointer')
           
         
        }
        else{
            linkToBench.classList.add('disable-pointer')
               
        }
         
     });
     prButton.addEventListener("click",function(){
        if(checkBox.checked==1){
           
         
        }
        else{
            
            alert('Dont forget the checkbox')
        }
         
     });
=======
let prButton = document.getElementById("prceedBtn");
let checkBox = document.getElementById("check-box");
prButton.addEventListener("click", function () {
  if (checkBox.checked == 1) {
    let welcomePageContainer = document.querySelector(".container");
  } else {
    alert("Dont forget the checkbox");
    welcomePageContainer.classList.add("display-not");
  }
});
>>>>>>> 476a19bf853927a8fdf9b91a03fe23101328ab61
