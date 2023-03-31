//---------------------------------------------------------
//--------------------------Background-------------------------------
// Objekt för bakgrund
// egenskaper innehållande Image URLs, beroende på beskrivning
//---------------------------------------------------------
var Background = function (){
    this.sun = 'images_background/sun.jpg';
    this.rain = 'images_background/rain.jpg'; 
    this.cloudy = 'images_background/clouds.jpg';  
    this.misty = 'images_background/mist.jpg';
    this.storm = 'images_background/storm.jpg'; 
    this.snow = 'images_background/snow.jpg';

    this.background = new Image();

//---------------------------------------------------------
//--------------------------getBacground-------------------------------
// metod som används för att returnera en egenskap beroende på parameter
// weather parameter är beskrivning av väder såsom Rain, Clear osv.
// Se egenskapers namn för beskrivning av väder
// Returntype: img Url från egenskap
//---------------------------------------------------------
    this.getBackground = function (weather) {
        console.log(weather)
        switch (weather) {
            case 'Clear':
                return this.sun;
            case 'Rain' || 'Drizzle':
                return this.rain;
            case 'Clouds':
                return this.cloudy;
            case 'Mist' || 'Smoke' || 'Haze':
                return this.misty;
            case 'Thunderstorm' || 'Tornado':
                return this.storm;
            case 'Snow':
                return this.snow;

            default : return this.sun;
        }
    }
}