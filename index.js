for(var i=0;i<document.querySelectorAll("button").length;i++){
 
    var activebutton = document.querySelectorAll("button")[i].addEventListener("click",function(){
        var pressedButton = this.innerHTML;
       makeSound(pressedButton);
       makeanimation(pressedButton);
    });

    var acivekey = document.addEventListener("keypress",function(event){
        var pressedKey = event.key;
        makeSound(pressedKey);
        makeanimation(pressedKey);
    })
 
    function makeSound(keyPressed){
        switch(keyPressed){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                document.querySelector("#title").innerHTML="😎😎😎";
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                document.querySelector("#title").innerHTML="😒😒😒";
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                document.querySelector("#title").innerHTML="😊😊😊";
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                document.querySelector("#title").innerHTML="😁😁😁";
                break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                document.querySelector("#title").innerHTML="❤️❤️❤️";
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                document.querySelector("#title").innerHTML="😂😂😂";
                break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                document.querySelector("#title").innerHTML="🤷‍♀️🤷‍♀️🤷‍♀️";
                break;
                            

        }
    }




}

function makeanimation(keypressed){
    var activeKey = document.querySelector("." + keypressed)
    activeKey.classList.add("pressed");
    setTimeout(function(){
       activeKey.classList.remove("pressed");
    },100);
}





 

