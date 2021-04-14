// gets styles from css
var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];

// Two functions that allow the character to move left or right
function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
        character.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<380){
        character.style.left = left + 2 + "px";
    }
}

function moveUp(){
    var down = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   character.style.top = down - 3 + "px";
    }
// Runs code anytime you click button on key board
// Only runs if they click left or right arrow keys 
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
        if(event.key==="ArrowUp"){
            interval = setInterval(moveUp, 1);
        }
    }
});
// This listens for when you unclick any of the keys 
document.addEventListener("keyup", event => {
    clearInterval(interval);
    // code only runs if they click one arrow at a time
    both=0;
});
//  Interval function creates blocks and holes over and over again
// Keeps going for ever 
var blocks = setInterval(function(){
    var blockRecent = document.getElementById("block"+(counter-1));
    var holeRecent = document.getElementById("hole"+(counter-1));
    if(counter>0){
        var blockRecentTop = parseInt(window.getComputedStyle(blockRecent).getPropertyValue("top"));
        var holeRecentTop = parseInt(window.getComputedStyle(holeRecent).getPropertyValue("top"));
    }
    if(blockRecentTop<400||counter==0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        hole.setAttribute("class", "hole");
        block.setAttribute("id", "block"+counter);
        hole.setAttribute("id", "hole"+counter);
        block.style.top = blockRecentTop + 100 + "px";
        hole.style.top = holeRecentTop + 100 + "px";
        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
        
    }
    // sets drop back to zero if chaacter is above the drop 
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var fall = 0;
    if(characterTop <= 0){
        alert("Dead. Score: "+(counter-9));
       // document.getElementById("character").innerHTML="hsduouohho";
        clearInterval(blocks);
       location.reload();
    }
    // for loop that creates new variable current that = array 
    for(var i = 0; i < currentBlocks.length;i++){
        let current = currentBlocks[i];
        let ublock = document.getElementById("block"+current);
        let uhole = document.getElementById("hole"+current);
        let ublockTop = parseFloat(window.getComputedStyle(ublock).getPropertyValue("top"));
        let uholeLeft = parseFloat(window.getComputedStyle(uhole).getPropertyValue("left"));
        // equal to top postion of the block 
        ublock.style.top = ublockTop - 0.5 + "px";
        uhole.style.top = ublockTop - 0.5 + "px";
        // removes block if it is on top of the game 
        if(ublockTop < -20){
            currentBlocks.shift();
            ublock.remove();
            uhole.remove();
        }
        if(ublockTop-20<characterTop && ublockTop>characterTop){
            fall++;
            if(uholeLeft<=characterLeft && uholeLeft+20>=characterLeft){
                fall = 0;
            }
        }

    }
    if(fall==0){
        if(characterTop < 480){
            character.style.top = characterTop + 0.5 + "px";
        }
    }
    else{
        character.style.top = characterTop - 0.1 + "px";
    }
},1);