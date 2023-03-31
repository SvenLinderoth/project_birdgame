//--------------------------Sound-------------------------------
// Statiskt Objekt 
// Kan användas för att spela upp ljudfiler
// egenskaper innnehåller olika ljudfilers URL:er
//---------------------------------------------------------
var Sound = {
    audio : new Audio(),
    background : 'soundeffects/background.wav',
    game_start : 'soundeffects/start.wav',
    game_over : 'soundeffects/gameover.wav',
    jump : 'soundeffects/jump.mp3',
//--------------------------play_background-------------------------------
// Metod för att spela upp egenskapen bakgrund
//---------------------------------------------------------
    play_background : function () {
        Sound.audio.src = Sound.background;
        Sound.audio.play();
    },
//--------------------------play_gameover-------------------------------
// Metod för att spela upp egenskapen play_gameover
//---------------------------------------------------------
    play_gameover : function () {
        Sound.audio.src = Sound.game_over;
        Sound.audio.play();
    },
//--------------------------play_gamestart-------------------------------
// Metod för att spela upp egenskapen play_gamestart
//---------------------------------------------------------
    play_gamestart : function () {
        Sound.audio.src = Sound.game_start;
        Sound.audio.play();
    },
//--------------------------play_jump-------------------------------
// Metod för att spela upp egenskapen play_jump
//---------------------------------------------------------
    play_jump : function () {
        Sound.audio.src = Sound.jump;
        Sound.audio.play();
    }
}