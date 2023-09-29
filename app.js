//if else statment
//funksjon som tar tallene du trykker inn på kalkulator og legger de inn i et variabel så i display
//funksjon som + * / - variablene i display
//funksjon som sletter alt i display
//funksjon som sletter et tall fra display

(function(){
    
    //The querySelector() method returns the first element that matches a CSS selector.
    const screen = document.querySelector(".screen");   
    const buttons = document.querySelectorAll(".btn");
    const clear = document.querySelector(".btn-clear");
    const equal = document.querySelector(".btn-equal");
    const reset = document.querySelector(".btn-reset");
    
    //retrieve data from numbers that are clicked
    buttons.forEach(function(button){
      button.addEventListener("click", function(e){
        let value = e.target.dataset.num;
        screen.value += value;
      })
    });
    
    equal.addEventListener("click", function(e){
        //screenValue holds a string value that represents the input of the user or the result of an operation. 
        //It’s how we keep track of what should be displayed on the screen.
      if(screen.value === ""){
        screen.value = "Please Enter a Value";
      } else {
        //eval() is a global function that takes a JavaScript expression as a string and executes it.
        let answer = eval(screen.value);                   
        screen.value = answer;
      }
    })
        //The addEventListener() method attaches an event handler to a document.
        ////funksjon som sletter alt i display
    clear.addEventListener("click", function(e){
      screen.value = "";
    })
    reset.addEventListener("click", function(e){
        screen.value = "";
      })
   
  })(); 

