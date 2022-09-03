const buttons = document.getElementsByClassName('oneB')
let u = document.querySelector('#bsix')




// dot.textContent = '.'


const iH = document.getElementById('iH')
const dot = document.getElementById('dot')


let text =`Grid-Rotator Project`
let counter = 0
window.addEventListener('load',
   
   typeWriter = () => {
      if(counter<text.length) {
        
          iH.innerHTML += text.charAt(counter)
          
      
          counter ++


      
          setTimeout(typeWriter, 100)
         
      
  
      }
  
      
  }

   
   
   )

 

buttons[4].addEventListener('click', function() {
   // u.style.animationIterationCount = '2'

   // u.style.animation = ' ano 1s ease-out'
   //  document.querySelector('#sec').style.animation ='ann infinite 2s ease-out'
    buttons[6].innerHTML = buttons[7].innerHTML

    buttons[7].innerHTML = buttons[8].innerHTML
    buttons[8].innerHTML = buttons[5].innerHTML
    buttons[5].innerHTML = buttons[2].innerHTML
    buttons[2].innerHTML = buttons[1].innerHTML
    buttons[1].innerHTML = buttons[0].innerHTML
    buttons[0].innerHTML = buttons[3].innerHTML
    buttons[3].innerHTML =  buttons[6].innerHTML
 if(buttons[3].innerHTML == '8') {
    buttons[3].innerHTML = '7'
 }
 else if(buttons[3].innerHTML == '9') {
    buttons[3].innerHTML = '8'
 }

 else if(buttons[3].innerHTML == '6') {
    buttons[3].innerHTML = '9'
 }

  else if(buttons[3].innerHTML == '3') {
     buttons[3].innerHTML = '6'
  }

  else if(buttons[3].innerHTML == '2') {
    buttons[3].innerHTML = '3'
 }

 else if(buttons[3].innerHTML == '1') {
    buttons[3].innerHTML = '2'
 }

 else if(buttons[3].innerHTML == '4') {
    buttons[3].innerHTML = '1'
 }

 else if(buttons[3].innerHTML == '7') {
    buttons[3].innerHTML = '4'
 }
 
})


ch = () => {
   
}
 
    
    
   
  
  
  




    buttons[0].addEventListener('click', function() {
       
        buttons[6].innerHTML =  buttons[3].innerHTML
        buttons[3].innerHTML = buttons[0].innerHTML
        buttons[0].innerHTML = buttons[1].innerHTML
        buttons[1].innerHTML = buttons[2].innerHTML
        buttons[2].innerHTML = buttons[5].innerHTML
        buttons[5].innerHTML = buttons[8].innerHTML
        buttons[8].innerHTML = buttons[7].innerHTML
        buttons[7].innerHTML = buttons[6].innerHTML
     
    }
 )

 buttons[1].addEventListener('click', function() {
       
    buttons[6].innerHTML =  buttons[3].innerHTML
    buttons[3].innerHTML = buttons[0].innerHTML
    buttons[0].innerHTML = buttons[1].innerHTML
    buttons[1].innerHTML = buttons[2].innerHTML
    buttons[2].innerHTML = buttons[5].innerHTML
    buttons[5].innerHTML = buttons[8].innerHTML
    buttons[8].innerHTML = buttons[7].innerHTML
    buttons[7].innerHTML = buttons[6].innerHTML
    if(buttons[7].innerHTML == '4') {
        buttons[7].innerHTML = '7'
    }
 else if(buttons[7].innerHTML == '1') {
    buttons[7].innerHTML = '4'
 }

 else if(buttons[7].innerHTML == '2') {
    buttons[7].innerHTML = '1'
 }

 else if(buttons[7].innerHTML == '3') {
    buttons[7].innerHTML = '2'
 }

 else if(buttons[7].innerHTML == '6') {
    buttons[7].innerHTML = '3'
 }

 else if(buttons[7].innerHTML == '9') {
    buttons[7].innerHTML = '6'
 }

 else if(buttons[7].innerHTML == '8') {
    buttons[7].innerHTML = '9'
 }

 else if(buttons[7].innerHTML == '7') {
    buttons[7].innerHTML = '8'
 }

 else if(buttons[7].innerHTML == '4') {
    buttons[7].innerHTML = '7'
 }
}
)

buttons[2].addEventListener('click', function() {
       
    buttons[6].innerHTML =  buttons[3].innerHTML
    buttons[3].innerHTML = buttons[0].innerHTML
    buttons[0].innerHTML = buttons[1].innerHTML
    buttons[1].innerHTML = buttons[2].innerHTML
    buttons[2].innerHTML = buttons[5].innerHTML
    buttons[5].innerHTML = buttons[8].innerHTML
    buttons[8].innerHTML = buttons[7].innerHTML
    buttons[7].innerHTML = buttons[6].innerHTML
    if(buttons[7].innerHTML == '4') {
        buttons[7].innerHTML = '7'
    }
 else if(buttons[7].innerHTML == '1') {
    buttons[7].innerHTML = '4'
 }

 else if(buttons[7].innerHTML == '2') {
    buttons[7].innerHTML = '1'
 }

 else if(buttons[7].innerHTML == '3') {
    buttons[7].innerHTML = '2'
 }

 else if(buttons[7].innerHTML == '6') {
    buttons[7].innerHTML = '3'
 }

 else if(buttons[7].innerHTML == '9') {
    buttons[7].innerHTML = '6'
 }

 else if(buttons[7].innerHTML == '8') {
    buttons[7].innerHTML = '9'
 }

 else if(buttons[7].innerHTML == '7') {
    buttons[7].innerHTML = '8'
 }

 else if(buttons[7].innerHTML == '4') {
    buttons[7].innerHTML = '7'
 }
}
)

buttons[3].addEventListener('click', function() {
       
    buttons[6].innerHTML =  buttons[3].innerHTML
    buttons[3].innerHTML = buttons[0].innerHTML
    buttons[0].innerHTML = buttons[1].innerHTML
    buttons[1].innerHTML = buttons[2].innerHTML
    buttons[2].innerHTML = buttons[5].innerHTML
    buttons[5].innerHTML = buttons[8].innerHTML
    buttons[8].innerHTML = buttons[7].innerHTML
    buttons[7].innerHTML = buttons[6].innerHTML
    if(buttons[7].innerHTML == '4') {
        buttons[7].innerHTML = '7'
    }
 else if(buttons[7].innerHTML == '1') {
    buttons[7].innerHTML = '4'
 }

 else if(buttons[7].innerHTML == '2') {
    buttons[7].innerHTML = '1'
 }

 else if(buttons[7].innerHTML == '3') {
    buttons[7].innerHTML = '2'
 }

 else if(buttons[7].innerHTML == '6') {
    buttons[7].innerHTML = '3'
 }

 else if(buttons[7].innerHTML == '9') {
    buttons[7].innerHTML = '6'
 }

 else if(buttons[7].innerHTML == '8') {
    buttons[7].innerHTML = '9'
 }

 else if(buttons[7].innerHTML == '7') {
    buttons[7].innerHTML = '8'
 }

 else if(buttons[7].innerHTML == '4') {
    buttons[7].innerHTML = '7'
 }
 
}
)

buttons[5].addEventListener('click', function() {
       
    buttons[6].innerHTML =  buttons[3].innerHTML
    buttons[3].innerHTML = buttons[0].innerHTML
    buttons[0].innerHTML = buttons[1].innerHTML
    buttons[1].innerHTML = buttons[2].innerHTML
    buttons[2].innerHTML = buttons[5].innerHTML
    buttons[5].innerHTML = buttons[8].innerHTML
    buttons[8].innerHTML = buttons[7].innerHTML
    buttons[7].innerHTML = buttons[6].innerHTML
    if(buttons[7].innerHTML == '4') {
        buttons[7].innerHTML = '7'
    }
 else if(buttons[7].innerHTML == '1') {
    buttons[7].innerHTML = '4'
 }

 else if(buttons[7].innerHTML == '2') {
    buttons[7].innerHTML = '1'
 }

 else if(buttons[7].innerHTML == '3') {
    buttons[7].innerHTML = '2'
 }

 else if(buttons[7].innerHTML == '6') {
    buttons[7].innerHTML = '3'
 }

 else if(buttons[7].innerHTML == '9') {
    buttons[7].innerHTML = '6'
 }

 else if(buttons[7].innerHTML == '8') {
    buttons[7].innerHTML = '9'
 }

 else if(buttons[7].innerHTML == '7') {
    buttons[7].innerHTML = '8'
 }

 else if(buttons[7].innerHTML == '4') {
    buttons[7].innerHTML = '7'
 }
 
}
)

buttons[6].addEventListener('click', function() {
       
    buttons[6].innerHTML =  buttons[3].innerHTML
    buttons[3].innerHTML = buttons[0].innerHTML
    buttons[0].innerHTML = buttons[1].innerHTML
    buttons[1].innerHTML = buttons[2].innerHTML
    buttons[2].innerHTML = buttons[5].innerHTML
    buttons[5].innerHTML = buttons[8].innerHTML
    buttons[8].innerHTML = buttons[7].innerHTML
    buttons[7].innerHTML = buttons[6].innerHTML
    if(buttons[7].innerHTML == '4') {
        buttons[7].innerHTML = '7'
    }
 else if(buttons[7].innerHTML == '1') {
    buttons[7].innerHTML = '4'
 }

 else if(buttons[7].innerHTML == '2') {
    buttons[7].innerHTML = '1'
 }

 else if(buttons[7].innerHTML == '3') {
    buttons[7].innerHTML = '2'
 }

 else if(buttons[7].innerHTML == '6') {
    buttons[7].innerHTML = '3'
 }

 else if(buttons[7].innerHTML == '9') {
    buttons[7].innerHTML = '6'
 }

 else if(buttons[7].innerHTML == '8') {
    buttons[7].innerHTML = '9'
 }

 else if(buttons[7].innerHTML == '7') {
    buttons[7].innerHTML = '8'
 }

 else if(buttons[7].innerHTML == '4') {
    buttons[7].innerHTML = '7'
 }
 
}
)

buttons[7].addEventListener('click', function() {
       
    buttons[6].innerHTML =  buttons[3].innerHTML
    buttons[3].innerHTML = buttons[0].innerHTML
    buttons[0].innerHTML = buttons[1].innerHTML
    buttons[1].innerHTML = buttons[2].innerHTML
    buttons[2].innerHTML = buttons[5].innerHTML
    buttons[5].innerHTML = buttons[8].innerHTML
    buttons[8].innerHTML = buttons[7].innerHTML
    buttons[7].innerHTML = buttons[6].innerHTML
    if(buttons[7].innerHTML == '4') {
        buttons[7].innerHTML = '7'
    }
 else if(buttons[7].innerHTML == '1') {
    buttons[7].innerHTML = '4'
 }

 else if(buttons[7].innerHTML == '2') {
    buttons[7].innerHTML = '1'
 }

 else if(buttons[7].innerHTML == '3') {
    buttons[7].innerHTML = '2'
 }

 else if(buttons[7].innerHTML == '6') {
    buttons[7].innerHTML = '3'
 }

 else if(buttons[7].innerHTML == '9') {
    buttons[7].innerHTML = '6'
 }

 else if(buttons[7].innerHTML == '8') {
    buttons[7].innerHTML = '9'
 }

 else if(buttons[7].innerHTML == '7') {
    buttons[7].innerHTML = '8'
 }

 else if(buttons[7].innerHTML == '4') {
    buttons[7].innerHTML = '7'
 }
 
}
)

buttons[8].addEventListener('click', function() {
       
    buttons[6].innerHTML =  buttons[3].innerHTML
    buttons[3].innerHTML = buttons[0].innerHTML
    buttons[0].innerHTML = buttons[1].innerHTML
    buttons[1].innerHTML = buttons[2].innerHTML
    buttons[2].innerHTML = buttons[5].innerHTML
    buttons[5].innerHTML = buttons[8].innerHTML
    buttons[8].innerHTML = buttons[7].innerHTML
    buttons[7].innerHTML = buttons[6].innerHTML
    if(buttons[7].innerHTML == '4') {
        buttons[7].innerHTML = '7'
    }
 else if(buttons[7].innerHTML == '1') {
    buttons[7].innerHTML = '4'
 }

 else if(buttons[7].innerHTML == '2') {
    buttons[7].innerHTML = '1'
 }

 else if(buttons[7].innerHTML == '3') {
    buttons[7].innerHTML = '2'
 }

 else if(buttons[7].innerHTML == '6') {
    buttons[7].innerHTML = '3'
 }

 else if(buttons[7].innerHTML == '9') {
    buttons[7].innerHTML = '6'
 }

 else if(buttons[7].innerHTML == '8') {
    buttons[7].innerHTML = '9'
 }

 else if(buttons[7].innerHTML == '7') {
    buttons[7].innerHTML = '8'
 }

 else if(buttons[7].innerHTML == '4') {
    buttons[7].innerHTML = '7'
 }
 
}
)
