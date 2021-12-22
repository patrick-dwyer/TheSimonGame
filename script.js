// setup for functionality of gameplay
let btnList = ["btn1", "btn2", "btn3", "btn4"]
var simonArray = []
var x = -1
level = 1



// Keyboard hit to start game

$(document).on("keydown", function() {
    startGame()
  
});

// Button click to start game
$(".btn-start").on("click", function() {
  startGame()
  toggleStartBtn()
})


// force comparison between user pick and simonArray
$("button").on("click", function () {
  var userClick = $(this).attr("class");
  btnAnimationUser(this);
  makeSound(userClick);

  if (userClick === "btn-start") {
    // do nothing

  } else if (userClick === simonArray[x]) {
    x = x + 1
    
        if (x === simonArray.length) {
            x = 0
            level = level + 1
            simonSays = simonRandomPick()
            
            makeSound(simonSays)
            
            simonSays = "." + simonSays
            setTimeout (function() {
              simonBtnAnimation(simonSays)
            }, 600)
            
            
            $("h1").text("Level " + (level));
            

        }
      
  } else {
    gameOver()
    simonArray = []
    $("h1").text("Game Over, Press Any Key To Start Again");
    x = -1
    level = 1

  }
  
});

//Simon Random picker
function simonRandomPick() {
  var randomBtn = btnList[Math.floor(Math.random() * 4)];
  simonArray.push(randomBtn);
  
  var simonSays = "." + randomBtn
  makeSound(simonSays)
  return randomBtn
  
}


//Setup for animation of gameplay
function btnAnimationUser (btn) {
  
  $(btn).addClass("pressed");
  setTimeout (function() {
    $(btn).removeClass("pressed")}, 150);
  
 
}

function simonBtnAnimation (btn) {
  $(btn).addClass("pressed");
  setTimeout (function() {
    $(btn).removeClass("pressed")}, 500);
 
}


function makeSound (whichBtn) {
  

  switch (whichBtn) {
    
    case "btn1":
      var sound1 = new Audio("audio/audio1.mp3")
      sound1.play();
      break;

    case "btn2":
      var sound2 = new Audio("audio/audio2.mp3")
      sound2.play();
      break;

    case "btn3":
      var sound3 = new Audio("audio/audio3.mp3")
      sound3.play();
      break;

    case "btn4":
      var sound4 = new Audio("audio/audio4.mp3")
      sound4.play();
      break;

    case "btn-start":
      //do nothing
      break;
    
  }
}

function startGame() {
  if (x === -1) {

        simonSays = simonRandomPick()
        makeSound(simonSays)
        simonSays = "." + simonSays
        simonBtnAnimation(simonSays)
        
        
        
        x = x+1
        
        $("h1").text("Level " + (level));

    } else {
        //do nothing
    }
}

function toggleStartBtn() {
  $(".btn-start").toggle()
}

function gameOver () {
  $("body").addClass("game-over")
  setTimeout (function() {
    $("body").removeClass("game-over")}, 50)
  var gameOverSound = new Audio("audio/gameOver.mp3");
  gameOverSound.play()
  $(".btn-start").toggle()
}
  


