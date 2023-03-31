//---------------------------Obstacle------------------------------
// Objekt för skapa obstacle
// egenskaper innehållande
// positionering, storlek och hastighet
//-----------------------------------------------------------------
var Obstacle = function (x,y,height,speed) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = height;
    this.speed = speed;

}
//---------------------------update------------------------------
// Metod som kallas för att uppdatera en instans position
// samt kollar om en viss tid har gått under spelgång, isåfall ökar hastigheten på instans
Obstacle.prototype.update = function () {
    this.x -= this.speed;
    if ((Math.floor(Date.now() - InitGame.start_time) / 1000) > 5) this.speed += .2;
}
//---------------------------render------------------------------
// Metod som ritar ut instans på canvasens context
// parameter som skickas med : context , ImageUrl
// beräkningar som görs är logik för att minska felaktig krasch med Character, 
// då bilden är en fyrkant försöks även här Obstacles bild göras något större än den faktiska positioneringen
Obstacle.prototype.render = function(context, obj_image) {
    // context.fillStyle = '#FFFFF';
    // context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(obj_image, (this.x - 15), (this.y - 12), (this.width + 20), (this.height + 20));
}