x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "El Unicornio está uniescuchando. Unipor unifavor, Unihabla."; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "El unicornio unireconoció: " + content; 
      if(content =="círculo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se uniempezó a unidibujar un unicírculo "; 
        draw_circle = "set";
      }
      if(content =="rectángulo")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a unidibujar un unirectángulo "; 
        draw_rect = "set";
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_circle == "set")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Se unidibujó un unicírculo. ";
    draw_circle = "";
  }

  if(draw_rect == "set")
  {
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Se unidibujó un unirectángulo. ";
    draw_rect = "";
  }

}




