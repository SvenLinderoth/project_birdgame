//---------------------------------------------------------
//---------------------------Character------------------------------
// Objekt för spelkaraktär
// Egenskaper innehållande positionering, storlek
// samt logiska egenskaper som används för beräkningar under exekvering
//---------------------------------------------------------
function Character (canvasWidth, canvasHeight, width, height) {
    //Positioning
    this.x = 10;
    this.y = canvasHeight - height;
    //size 
    this.width = width || 45;
    this.height = height || 45;
    //speed 
    this.speed = 5;

    this.verticalVelocity = 0;
    this.vx = 0;

    this.jumpSpeed = -20;
    this.gravity = 1;
    //tracker om man kan hoppa eller ej 
    this.canJump = true; 
//---------------------------moveLeft------------------------------
// metod för att flytta karaktär vänster på x axeln
    this.moveLeft = function () {
        this.vx = - this.speed;
    }
//---------------------------moveRight------------------------------
// metod för att flytta karaktär höger på x axeln
    this.moveRight = function () {
        this.vx = this.speed;
    }
//---------------------------stopMoving------------------------------
// metod för att stoppa karaktär från att röra sig på x axlen
    this.stopMoving = function () {
        this.vx = 0;
    }
//---------------------------jump------------------------------
// metod för att flytta karaktär på Y axlen, (hoppa)
    this.jump = function () {
        if (this.canJump) {
            this.verticalVelocity = this.jumpSpeed;
            this.canJump = false;
        }
    }
//---------------------------update------------------------------
// metod för att uppdatera platsen av spelkaraktären
// logik för huruvida karaktären kan hoppa eller ej
// this.canJump avgör detta genom att kolla om Y positioneringen är högre än startpositionen på canvas.height
// Om canvas height - this height är samma som Y så kan karaktär hoppa igen
    this.update = function () {
        this.x += this.vx;
        this.y += this.verticalVelocity;
        this.verticalVelocity += this.gravity;

        if(this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
            this.verticalVelocity = 0;
            this.canJump = true;
        }
    }
//---------------------------render------------------------------
// Metod för att rita ut karaktär på canvasens context
// paramtrar : context, imageUrl
// beräkningar som görs är logik för att minska felaktig krasch med Obstacle, 
// då bilden är en fyrkant försöks karaktärens bild göras något större än den faktiska x och y positioneringen
    this.render = function (context, char_image) {
        // context.fillStyle = '#FFFFF';
        // context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(char_image, (this.x - 15), (this.y - 25), (this.width + 25), (this.height + 25));
    }
}