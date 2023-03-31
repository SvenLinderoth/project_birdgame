var Controller = function() {
    this.gamestart = false;

    this.updateStatus = function(character) {
        //console.log('checking controller updates');
        var gamepad = navigator.getGamepads()[0];
        if(gamepad) {
            if (gamepad.buttons[3].pressed && character.gamestart === false){
                InitGame.reset();
            }
            //logik för events med btns av character obj
            if (gamepad.buttons[0].pressed && character.gamestart === true) {
                character.jump();
                Sound.play_jump();
                //console.log('Button 0 pressed'); //A btn
            } 
            //Logik för gamestart, (startknapp på xbox_controller)
            else if (gamepad.buttons[9].pressed) {
                Sound.play_gamestart();
                character.gamestart = true;
                InitGame.start_time = Date.now();
            } else { 
                character.stopMoving();
            }
            //left right sticks
            if (gamepad.axes[0] > 0 && character.gamestart === true) {
                character.moveRight();
                //console.log('Axis 0 moved right'); //Right stick
            } else if (gamepad.axes[0] < 0 && character.gamestart === true) {
                character.moveLeft();
                //console.log('Axis 0 moved left'); //Left stick
            }   
            else { 
                character.stopMoving();
            }
        }
    };
};
