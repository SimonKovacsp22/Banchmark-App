let prButton = document.getElementById('prceedBtn')
let checkBox = document.getElementById('check-box')
   prButton.addEventListener("click",function(){
       if(checkBox.checked==1){
        let welcomePageContainer = document.querySelector('.container');
        welcomePageContainer.classList.add('display-not')
       }
       else{
           alert('Dont forget the checkbox')
       }
        
    });