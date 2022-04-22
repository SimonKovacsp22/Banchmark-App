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
